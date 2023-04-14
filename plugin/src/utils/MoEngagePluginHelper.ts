import {
    IntegrationSettings, 
    JsonMap,
    UserTraits
} from '@segment/analytics-react-native';
import PlatformHelper from './PlatformHelper';

const MoESegmentBridge = require("react-native").NativeModules.MoESegmentBridge;

const APP_ID_KEY = "apiKey";

export default class MoEngagePluginHelper {
    moEngageAppId: string

    trackAnonymousId(integrationSettings: MoEngageIntegration, anonymousId?: string) {
        this.moEngageAppId = integrationSettings[APP_ID_KEY];
        MoESegmentBridge.trackAnonymousId(PlatformHelper.getAnonymousIdPayload(this.moEngageAppId, anonymousId));
    }

    setUserAttributes(userTraits?: UserTraits) {
        if (userTraits === undefined) return;
        MoESegmentBridge.setUserAttributes(PlatformHelper.getUserAttributesPayload(this.moEngageAppId, userTraits));
    }

    trackEvent(event: string, properties?: JsonMap) {
        if (properties === undefined) properties = {};
        MoESegmentBridge.trackEvent(PlatformHelper.getTrackEventPayload(this.moEngageAppId, event, properties));
    }
    
    setUserAlias(alias?: string) {
        if (alias === undefined) return;
        MoESegmentBridge.setUserAlias(PlatformHelper.getUserAliasUpdatePayload(this.moEngageAppId, alias));
    }
    
    syncDataImmediately() {
        MoESegmentBridge.syncDataImmediately(PlatformHelper.getAccountMetaPayload(this.moEngageAppId));
    }
    
    logoutUser() {
        MoESegmentBridge.logoutUser(PlatformHelper.getAccountMetaPayload(this.moEngageAppId));
    }
}

declare type MoEngageIntegration = IntegrationSettings



