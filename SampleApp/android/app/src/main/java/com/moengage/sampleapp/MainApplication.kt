package com.moengage.sampleapp

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.moengage.core.LogLevel
import com.moengage.core.MoEngage
import com.moengage.core.config.FcmConfig
import com.moengage.core.config.LogConfig
import com.moengage.core.config.NotificationConfig
import com.moengage.core.model.IntegrationPartner
import com.moengage.react.MoEInitializer
import com.segment.moengage.react.MoESegmentPackage

class MainApplication : Application(), ReactApplication {

    private val moEngageAppId: String = "DAO6UGZ73D9RTK8B5W96TPYN"

    private val mReactNativeHost: ReactNativeHost = object : DefaultReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            val packages: MutableList<ReactPackage> = PackageList(this).packages
            packages.add(MoESegmentPackage())
            return packages
        }

        override fun getJSMainModuleName(): String = "index"

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED

        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this,  /* native exopackage */false)
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load()
        }
        ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)

        val moEngage = MoEngage.Builder(this, moEngageAppId)
            .configureLogs(LogConfig(LogLevel.VERBOSE, true))
            .configureFcm(FcmConfig(true))
            .configureNotificationMetaData(
                NotificationConfig(
                    R.drawable.small_icon,
                    R.drawable.large_icon
                )
            )
            .enablePartnerIntegration(IntegrationPartner.SEGMENT)

        MoEInitializer.initializeDefaultInstance(applicationContext, moEngage)
    }
}