import { 
    getAccountMetaPayload, 
    getAnonymousIdPayload, 
    getTrackEventPayload, 
    getUserAliasUpdatePayload, 
    getUserAttributePayload 
} from "./PayloadBuilder";

const PLATFORM_ANDROID = "android";
const PLATFORM_iOS = "ios";

export default class PlatformPayloadBuilder {

    platform: string
    appId: string
    
    constructor(platform: string, appId: string) {
        this.platform = platform;
        this.appId = appId;
    }

    getAnonymousIdPayload(anonymousId?: string) {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getAnonymousIdPayload(this.appId, anonymousId));
        } else if (this.platform == PLATFORM_iOS) {
            return getAnonymousIdPayload(this.appId, anonymousId);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    getUserAttributesPayload(traits: { [k: string]: any }) {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getUserAttributePayload(this.appId, traits));
        } else if (this.platform == PLATFORM_iOS) {
            return getUserAttributePayload(this.appId, traits);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    getTrackEventPayload(event: string, properties: { [k: string | number]: any }) {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getTrackEventPayload(this.appId, event, properties));
        } else if (this.platform == PLATFORM_iOS) {
            return getTrackEventPayload(this.appId, event, properties);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    getUserAliasUpdatePayload(alias: string) {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getUserAliasUpdatePayload(this.appId, alias));
        } else if (this.platform == PLATFORM_iOS) {
            return getUserAliasUpdatePayload(this.appId, alias);
        } else {
            throw new Error("Platform Not Supported");
        }
    }

    getAccountMetaPayload() {
        if (this.platform == PLATFORM_ANDROID) {
            return JSON.stringify(getAccountMetaPayload(this.appId));
        } else if (this.platform == PLATFORM_iOS) {
            return getAccountMetaPayload(this.appId);
        } else {
            throw new Error("Platform Not Supported");
        }
    }
}