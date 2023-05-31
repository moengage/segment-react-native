/*
 * Copyright (c) 2014-2023 MoEngage Inc.
 *
 * All rights reserved.
 *
 *  Use of source code or binaries contained within MoEngage SDK is permitted only to enable use of the MoEngage platform by customers of MoEngage.
 *  Modification of source code and inclusion in mobile apps is explicitly allowed provided that all other conditions are met.
 *  Neither the name of MoEngage nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *  Redistribution of source code or binaries is disallowed except with specific prior written permission. Any such redistribution must retain the above copyright notice, this list of conditions and the following disclaimer.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package com.segment.moengage.react

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.moengage.core.internal.logger.Logger
import com.moengage.plugin.base.segment.SegmentPluginHelper

/**
 * Bridge to communicate with Hybrid MoEngage Segment Plugin
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
class MoESegmentBridge(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val moESegmentLibVersion = BuildConfig.MOENGAGE_REACT_SEGMENT_VERSION
    
    private val tag = "MoESegmentBridge_$moESegmentLibVersion"

    private val context: Context = reactContext.applicationContext
    private val segmentPluginHelper = SegmentPluginHelper(context, moESegmentLibVersion)

    override fun getName(): String = "MoESegmentBridge"

    /**
     * Initialise the SDK
     * 
     * @param payload the payload containing the MoEngage AppId
     * @since 1.0.0
     */
    @ReactMethod
    fun initialiseSdk(payload: String) {
        Logger.print { "$tag initialiseSdk(): will try to initialise sdk $payload" }
        segmentPluginHelper.initializeIntegrationHelperIfRequired(payload);
    }

    /**
     * Track AnonymousId 
     * 
     * @param payload the payload containing the MoEngage AppId + AnonymousId
     * @since 1.0.0
     */
    @ReactMethod
    fun trackAnonymousId(payload: String) {
        Logger.print { "$tag trackAnonymousId(): will try to track anonymous id $payload" }
        segmentPluginHelper.trackAnonymousId(payload)
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
        segmentPluginHelper.addUserAttributes(payload)
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
        segmentPluginHelper.trackEvent(payload)
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
        segmentPluginHelper.setUserAlias(payload)
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
        segmentPluginHelper.logoutUser(payload)
    }
}