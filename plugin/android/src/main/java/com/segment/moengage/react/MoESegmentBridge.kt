package com.segment.moengage.react

import android.app.Application
import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.moengage.core.MoECoreHelper
import com.moengage.core.analytics.MoEAnalyticsHelper
import com.moengage.core.internal.USER_ATTRIBUTE_USER_LOCATION
import com.moengage.core.internal.integrations.MoEIntegrationHelper
import com.moengage.core.internal.model.IntegrationMeta
import com.moengage.core.internal.utils.MoEUtils.jsonToMap
import com.moengage.core.internal.utils.isNullOrBlank
import com.moengage.core.model.GeoLocation
import com.moengage.core.model.IntegrationPartner
import com.segment.moengage.react.internal.INTEGRATION_META_TYPE
import com.segment.moengage.react.internal.PayloadTransformer
import com.segment.moengage.react.internal.USER_TRAIT_ADDRESS
import com.segment.moengage.react.internal.USER_TRAIT_ADDRESS_CITY
import com.segment.moengage.react.internal.USER_TRAIT_ADDRESS_COUNTRY
import com.segment.moengage.react.internal.USER_TRAIT_ADDRESS_STATE
import com.segment.moengage.react.internal.USER_TRAIT_LOCATION
import com.segment.moengage.react.internal.USER_TRAIT_LOCATION_LATITUDE
import com.segment.moengage.react.internal.USER_TRAIT_LOCATION_LONGITUDE
import org.json.JSONObject

class MoESegmentBridge(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val context: Context = reactContext.applicationContext
    private val payloadTransformer = PayloadTransformer()
    private var integrationHelper: MoEIntegrationHelper? = null

    override fun getName(): String = "MoESegmentBridge"

    private fun getMoESegmentLibVersion(): String = BuildConfig.MOENGAGE_REACT_SEGMENT_VERSION

    @ReactMethod
    fun trackAnonymousId(payload: String) {
        val anonymousIdData = payloadTransformer.anonymousIdDataFromJson(JSONObject(payload))
        if (integrationHelper == null) {
            integrationHelper = MoEIntegrationHelper(context, IntegrationPartner.SEGMENT)
            integrationHelper?.initialize(
                anonymousIdData.instanceMeta.appId,
                context as Application
            )

            MoEIntegrationHelper.addIntegrationMeta(
                IntegrationMeta(
                    INTEGRATION_META_TYPE,
                    getMoESegmentLibVersion()
                ),
                anonymousIdData.instanceMeta.appId
            )
        }

        integrationHelper?.trackAnonymousId(
            anonymousIdData.anonymousId,
            anonymousIdData.instanceMeta.appId
        )
    }

    @ReactMethod
    fun setUserAttributes(payload: String) {
        val userAttributeData = payloadTransformer.userAttributeDataFromJson(JSONObject(payload))

        if (!userAttributeData.traits.isNullOrBlank()) {
            integrationHelper?.trackUserAttribute(
                jsonToMap(userAttributeData.traits),
                userAttributeData.instanceMeta.appId
            )

            // Address Tracking
            val address = userAttributeData.traits.optJSONObject(USER_TRAIT_ADDRESS)
            val city = address?.optString(USER_TRAIT_ADDRESS_CITY)
            if (!city.isNullOrEmpty()) {
                MoEAnalyticsHelper.setUserAttribute(
                    context,
                    USER_TRAIT_ADDRESS_CITY,
                    city,
                    userAttributeData.instanceMeta.appId
                )
            }
            val country = address?.optString(USER_TRAIT_ADDRESS_COUNTRY)
            if (!country.isNullOrEmpty()) {
                MoEAnalyticsHelper.setUserAttribute(
                    context,
                    USER_TRAIT_ADDRESS_COUNTRY,
                    country,
                    userAttributeData.instanceMeta.appId
                )
            }
            val state = address?.optString(USER_TRAIT_ADDRESS_STATE)
            if (!state.isNullOrEmpty()) {
                MoEAnalyticsHelper.setUserAttribute(
                    context,
                    USER_TRAIT_ADDRESS_STATE,
                    state,
                    userAttributeData.instanceMeta.appId
                )
            }

            // Location Tracking
            val location = userAttributeData.traits.optJSONObject(USER_TRAIT_LOCATION)
            if (location != null) {
                MoEAnalyticsHelper.setUserAttribute(
                    context,
                    USER_ATTRIBUTE_USER_LOCATION,
                    GeoLocation(
                        location.optDouble(USER_TRAIT_LOCATION_LATITUDE),
                        location.optDouble(USER_TRAIT_LOCATION_LONGITUDE)
                    ), userAttributeData.instanceMeta.appId
                )
            }
        }
    }

    @ReactMethod
    fun trackEvent(payload: String) {
        val dataPoints = payloadTransformer.dataPointsFromJson(JSONObject(payload))
        integrationHelper?.trackEvent(
            dataPoints.eventName,
            dataPoints.properties,
            dataPoints.instanceMeta.appId
        )
    }

    @ReactMethod
    fun setUserAlias(payload: String) {
        val userAliasData = payloadTransformer.aliasDataFromJson(JSONObject(payload))
        MoEAnalyticsHelper.setAlias(context, userAliasData.alias, userAliasData.instanceMeta.appId)
    }

    @ReactMethod
    fun logoutUser(payload: String) {
        val instanceMeta = payloadTransformer.instanceMetaFromJson(JSONObject(payload))
        MoECoreHelper.logoutUser(context, instanceMeta.appId)
    }
}