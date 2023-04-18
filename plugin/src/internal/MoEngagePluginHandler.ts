import { Platform } from "react-native";
import {
    IntegrationSettings,
    JsonMap
} from '@segment/analytics-react-native';
import PlatformPayloadBuilder from './PlatformPayloadBuilder';
import { MoEngageLogger as Logger } from './Logger';

const MoESegmentBridge = require("react-native").NativeModules.MoESegmentBridge;

const APP_ID_KEY = "apiKey";

export default class MoEngagePluginHandler {

    tag = "MoEngagePluginHandler";
    moEngageAppId: string
    platformPayloadBuilder: PlatformPayloadBuilder
    currentAnonymousId: string | undefined

    constructor(integrationSettings: MoEngageIntegration) {
        this.moEngageAppId = integrationSettings[APP_ID_KEY as keyof IntegrationSettings];
        this.platformPayloadBuilder = new PlatformPayloadBuilder(Platform.OS, this.moEngageAppId);
        Logger.debug(this.tag, `MoEngage app id fetched ${this.moEngageAppId}`);
    }

    trackAnonymousId(anonymousId?: string) {
        try {
            Logger.debug(this.tag, `trackAnonymousId(): Id ${anonymousId}`);
            if (this.currentAnonymousId === anonymousId) return;
            MoESegmentBridge.trackAnonymousId(this.platformPayloadBuilder.getAnonymousIdPayload(anonymousId));
            this.currentAnonymousId = anonymousId;
        } catch (error) {
            Logger.error(this.tag, `trackAnonymousId(): ${error}`);
        }
    }

    setUserAttributes(userTraits?: Record<string, unknown>) {
        try {
            Logger.debug(this.tag, `setUserAttributes(): traits ${userTraits}`);
            if (userTraits === undefined) return;
            MoESegmentBridge.setUserAttributes(this.platformPayloadBuilder.getUserAttributesPayload(userTraits));
        } catch (error) {
            Logger.error(this.tag, `setUserAttributes(): ${error}`);
        }
    }

    trackEvent(event: string, properties?: JsonMap) {
        try {
            Logger.debug(this.tag, `trackEvent():  event ${event} & properties ${properties}`);
            if (properties === undefined) properties = {};
            MoESegmentBridge.trackEvent(this.platformPayloadBuilder.getTrackEventPayload(event, properties));
        } catch (error) {
            Logger.error(this.tag, `trackEvent(): ${error}`);
        }
    }

    setUserAlias(alias?: string) {
        try {
            Logger.debug(this.tag, `setUserAlias():  alias ${alias}}`);
            if (alias === undefined) return;
            MoESegmentBridge.setUserAlias(this.platformPayloadBuilder.getUserAliasUpdatePayload(alias));
        } catch (error) {
            Logger.error(this.tag, `setUserAlias(): ${error}`);
        }
    }

    logoutUser() {
        try {
            Logger.debug(this.tag, `logoutUser(): `);
            MoESegmentBridge.logoutUser(this.platformPayloadBuilder.getAccountMetaPayload());
        } catch (error) {
            Logger.error(this.tag, `logoutUser(): ${error}`);
        }
    }
}

declare type MoEngageIntegration = IntegrationSettings



