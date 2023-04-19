package com.segment.moengage.react

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.moengage.core.internal.logger.Logger
import com.moengage.plugin.base.segment.PluginBaseHandler

/**
 * Bridge to communicate with Hybrid MoEngage Segment Plugin
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
class MoESegmentBridge(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val tag = "MoESegmentBridge_${getMoESegmentLibVersion()}"

    private val context: Context = reactContext.applicationContext
    private val pluginBaseHandler = PluginBaseHandler(context, getMoESegmentLibVersion())

    override fun getName(): String = "MoESegmentBridge"

    private fun getMoESegmentLibVersion(): String = BuildConfig.MOENGAGE_REACT_SEGMENT_VERSION

    /**
     * Track AnonymousId 
     * 
     * @param payload the payload containing the MoEngage AppId + AnonymousId
     * @since 1.0.0
     */
    @ReactMethod
    fun trackAnonymousId(payload: String) {
        Logger.print { "$tag trackAnonymousId(): will try to track anonymous id $payload" }
        pluginBaseHandler.trackAnonymousId(payload)
    }

    /**
     * Track User Attributes
     *
     * @param payload the payload containing the MoEngage AppId + User Attributes
     * @since 1.0.0
     */
    @ReactMethod
    fun setUserAttributes(payload: String) {
        Logger.print { "$tag setUserAttributes(): will try to add user attributes $payload " }
        pluginBaseHandler.addUserAttributes(payload)
    }

    /**
     * Track Event
     *
     * @param payload the payload containing the MoEngage AppId + Event Name + Event Properties
     * @since 1.0.0
     */
    @ReactMethod
    fun trackEvent(payload: String) {
        Logger.print { "$tag trackEvent(): will try to track event $payload" }
        pluginBaseHandler.trackEvent(payload)
    }

    /**
     * Update the current user UniqueId
     *
     * @param payload the payload containing the MoEngage AppId + UniqueId
     * @since 1.0.0
     */
    @ReactMethod
    fun setUserAlias(payload: String) {
        Logger.print { "$tag setUserAlias(): will try to update user alias $payload" }
        pluginBaseHandler.setUserAlias(payload)
    }

    /**
     * Logout current user
     *
     * @param payload the payload containing the MoEngage AppId
     * @since 1.0.0
     */
    @ReactMethod
    fun logoutUser(payload: String) {
        Logger.print { "$tag logoutUser(): will try to logout user $payload" }
        pluginBaseHandler.logoutUser(payload)
    }
}