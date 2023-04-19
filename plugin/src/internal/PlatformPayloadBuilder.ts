import {
    getAccountMetaPayload,
    getAnonymousIdPayload,
    getTrackEventPayload,
    getUserAliasUpdatePayload,
    getUserAttributePayload
} from "./PayloadBuilder";

const PLATFORM_ANDROID = "android";
const PLATFORM_iOS = "ios";

/**
 * Build the Platform specific Payload which can be used to pass data from Hybrid to Native Modules
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
export default class PlatformPayloadBuilder {

    platform: string
    appId: string

    /**
     * Create an instance of PlatformPayloadBuilder for the given platform
     * 
     * @param {string} platform - current platform or the platform for which the payload should be return
     *      Note: If the platform is not supported all the function will throw error. 
     * @param {string} appId - MoEngage AppId
     * @since 1.0.0
     */
    constructor(platform: string, appId: string) {
        this.platform = platform;
        this.appId = appId;
    }

    /**
     * Create payload to track AnonymousId in Native Modules
     * 
     * @param {string} anonymousId - anonymous id for the user
     * @returns the platform specific payload.
     * @since 1.0.0
     */
    getAnonymousIdPayload(anonymousId?: string): string | { [k: string]: any; } {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getAnonymousIdPayload(this.appId, anonymousId));
        } else if (this.platform == PLATFORM_iOS) {
            return getAnonymousIdPayload(this.appId, anonymousId);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    /**
     * Create payload to track user attributes in Native Modules
     * 
     * @param {{[k: string]: any}} traits - attributes for the user
     * @returns the platform specific payload
     * @since 1.0.0
     */
    getUserAttributesPayload(traits: { [k: string]: any }): string | { [k: string]: any; } {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getUserAttributePayload(this.appId, traits));
        } else if (this.platform == PLATFORM_iOS) {
            return getUserAttributePayload(this.appId, traits);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    /**
     * Create payload to track event in Native Modules
     * 
     * @param {string} event - event name
     * @param {{[k: string]: any}} properties - properties for the event 
     * @returns the platform specific payload
     * @since 1.0.0
     */
    getTrackEventPayload(event: string, properties: { [k: string | number]: any }): string | { [k: string]: any; } {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getTrackEventPayload(this.appId, event, properties));
        } else if (this.platform == PLATFORM_iOS) {
            return getTrackEventPayload(this.appId, event, properties);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    /**
     * Create payload to update user unique id in Native Modules
     * 
     * @param {string} alias - user unique id
     * @returns the platform specific payload
     * @since 1.0.0
     */
    getUserAliasUpdatePayload(alias: string): string | { [k: string]: any; } {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getUserAliasUpdatePayload(this.appId, alias));
        } else if (this.platform == PLATFORM_iOS) {
            return getUserAliasUpdatePayload(this.appId, alias);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    /**
     * Create payload for the account meta info
     * 
     * @returns the platform specific payload
     * @since 1.0.0
     */
    getAccountMetaPayload(): string | { [k: string]: any; } {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getAccountMetaPayload(this.appId));
        } else if (this.platform == PLATFORM_iOS) {
            return getAccountMetaPayload(this.appId);
        } else {
            throw new Error("Platform Not Supported");
        }
    }
}