package com.segment.moengage.react

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.moengage.core.internal.logger.Logger
import com.moengage.plugin.base.segment.PluginBaseHandler

class MoESegmentBridge(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val tag = "MoESegmentBridge_${getMoESegmentLibVersion()}"

    private val context: Context = reactContext.applicationContext
    private val pluginBaseHandler = PluginBaseHandler(context, getMoESegmentLibVersion())

    override fun getName(): String = "MoESegmentBridge"

    private fun getMoESegmentLibVersion(): String = BuildConfig.MOENGAGE_REACT_SEGMENT_VERSION

    @ReactMethod
    fun trackAnonymousId(payload: String) {
        Logger.print { "$tag trackAnonymousId(): will try to track anonymous id $payload" }
        pluginBaseHandler.trackAnonymousId(payload)
    }

    @ReactMethod
    fun setUserAttributes(payload: String) {
        Logger.print { "$tag setUserAttributes(): will try to add user attributes $payload " }
        pluginBaseHandler.addUserAttributes(payload)
    }

    @ReactMethod
    fun trackEvent(payload: String) {
        Logger.print { "$tag trackEvent(): will try to track event $payload" }
        pluginBaseHandler.trackEvent(payload)
    }

    @ReactMethod
    fun setUserAlias(payload: String) {
        Logger.print { "$tag setUserAlias(): will try to update user alias $payload" }
        pluginBaseHandler.setUserAlias(payload)
    }

    @ReactMethod
    fun logoutUser(payload: String) {
        Logger.print { "$tag logoutUser(): will try to logout user $payload" }
        pluginBaseHandler.logoutUser(payload)
    }
}