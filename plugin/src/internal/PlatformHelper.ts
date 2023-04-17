import { Platform } from "react-native";
import { 
    getAccountMetaPayload, 
    getAnonymousIdPayload, 
    getTrackEventPayload, 
    getUserAliasUpdatePayload, 
    getUserAttributePayload 
} from "./PayloadBuilder";

const PLATFORM_ANDROID = "android";
const PLATFORM_iOS = "ios";

export default class PlatformHelper {

    private PlatformHelper() { }

    static getAnonymousIdPayload(appId: string, anonymousId?: string) {
        if (Platform.OS == PLATFORM_ANDROID) {
            return JSON.stringify(getAnonymousIdPayload(appId, anonymousId));
        } else if (Platform.OS == PLATFORM_iOS) {
            return getAnonymousIdPayload(appId, anonymousId);
        }
    }

    static getUserAttributesPayload(appId: string, traits: { [k: string]: any }) {
        if (Platform.OS == PLATFORM_ANDROID) {
            return JSON.stringify(getUserAttributePayload(appId, traits));
        } else if (Platform.OS == PLATFORM_iOS) {
            return getUserAttributePayload(appId, traits);
        }
    }

    static getTrackEventPayload(appId: string, event: string, properties: { [k: string | number]: any }) {
        if (Platform.OS == PLATFORM_ANDROID) {
            return JSON.stringify(getTrackEventPayload(appId, event, properties));
        } else if (Platform.OS == PLATFORM_iOS) {
            return getTrackEventPayload(appId, event, properties);
        }
    }

    static getUserAliasUpdatePayload(appId: string, alias: string) {
        if (Platform.OS == PLATFORM_ANDROID) {
            return JSON.stringify(getUserAliasUpdatePayload(appId, alias));
        } else if (Platform.OS == PLATFORM_iOS) {
            return getUserAliasUpdatePayload(appId, alias);
        }
    }

    static getAccountMetaPayload(appId: string) {
        if (Platform.OS == PLATFORM_ANDROID) {
            return JSON.stringify(getAccountMetaPayload(appId));
        } else if (Platform.OS == PLATFORM_iOS) {
            return getAccountMetaPayload(appId);
        }
    }
}