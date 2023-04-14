package com.segment.moengage.react

import android.content.Context
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MoESegmentBridge(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext)  {

    private val context: Context = reactContext.applicationContext

    override fun getName(): String {
        return "MoESegmentBridge"
    }

    @ReactMethod
    fun trackAnonymousId(payload: String) {
        Log.d("ABHISHEK", "trackAnonymousId: $payload")
    }

    @ReactMethod
    fun setUserAttributes(payload: String) {
        Log.d("ABHISHEK", "setUserAttributes: $payload")
    }

    @ReactMethod
    fun trackEvent(payload: String) {
        Log.d("ABHISHEK", "trackEvent: $payload")
    }

    @ReactMethod
    fun setUserAlias(payload: String) {
        Log.d("ABHISHEK", "setUserAlias: $payload")
    }

    @ReactMethod
    fun logoutUser(payload: String) {
        Log.d("ABHISHEK", "logoutUser: $payload")
    }
}