import {
    IntegrationSettings, 
    JsonMap,
    UserTraits
} from '@segment/analytics-react-native';
import PlatformHelper from './PlatformHelper';
import { MoEngageLogger as Logger } from '../Logger';

const MoESegmentBridge = require("react-native").NativeModules.MoESegmentBridge;

const APP_ID_KEY = "apiKey";

export default class MoEngagePluginHelper {

    tag = "MoEngagePluginHelper";
    moEngageAppId: string

    trackAnonymousId(integrationSettings: MoEngageIntegration, anonymousId?: string) {
        try {
            Logger.debug(this.tag, `trackAnonymousId(): Id ${anonymousId}`);
            this.moEngageAppId = integrationSettings[APP_ID_KEY];
            MoESegmentBridge.trackAnonymousId(PlatformHelper.getAnonymousIdPayload(this.moEngageAppId, anonymousId));
        } catch(error) {
            Logger.error(this.tag, `trackAnonymousId(): ${error}`);
        }
    }

    setUserAttributes(userTraits?: Record<string, unknown>) {
       try {
            Logger.debug(this.tag, `setUserAttributes(): traits ${userTraits}`);
            if (userTraits === undefined) return;
            MoESegmentBridge.setUserAttributes(PlatformHelper.getUserAttributesPayload(this.moEngageAppId, userTraits));
       } catch(error) {
            Logger.error(this.tag, `setUserAttributes(): ${error}`);
       }
    }

    trackEvent(event: string, properties?: JsonMap) {
        try {
            Logger.debug(this.tag, `trackEvent():  event ${event} & properties ${properties}`);
            if (properties === undefined) properties = {};
            MoESegmentBridge.trackEvent(PlatformHelper.getTrackEventPayload(this.moEngageAppId, event, properties));
        } catch(error) {
            Logger.error(this.tag, `trackEvent(): ${error}`);
        }
    }
    
    setUserAlias(alias?: string) {
        try {
            Logger.debug(this.tag, `setUserAlias():  alias ${alias}}`);
            if (alias === undefined) return;
            MoESegmentBridge.setUserAlias(PlatformHelper.getUserAliasUpdatePayload(this.moEngageAppId, alias));
        } catch(error) {
            Logger.error(this.tag, `setUserAlias(): ${error}`);
        }
    }
    
    logoutUser() {
        try {
            Logger.debug(this.tag, `logoutUser(): `);
            MoESegmentBridge.logoutUser(PlatformHelper.getAccountMetaPayload(this.moEngageAppId));
        } catch(error) {
            Logger.error(this.tag, `logoutUser(): ${error}`);
        }
    }
}

declare type MoEngageIntegration = IntegrationSettings



