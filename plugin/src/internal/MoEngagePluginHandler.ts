import { Platform } from "react-native";
import {
    IntegrationSettings,
    JsonMap
} from '@segment/analytics-react-native';
import PlatformPayloadBuilder from './PlatformPayloadBuilder';
import { MoEngageLogger as Logger } from '../Logger';
import { traitsMap } from "./ParametersMapping";

const MoESegmentBridge = require("react-native").NativeModules.MoESegmentBridge;

const APP_ID_KEY = "apiKey";

/**
 * Handler class for MoEngagePlugin
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
export default class MoEngagePluginHandler {

    tag = "MoEngagePluginHandler";
    moEngageAppId: string;
    platformPayloadBuilder: PlatformPayloadBuilder;

    /**
     * Create an instance of MoEngagePluginHandler
     * 
     * @param {MoEngageIntegration} integrationSettings - MoEngage SDK Configuration
     * @since 1.0.0
     */
    constructor(integrationSettings: MoEngageIntegration) {
        this.moEngageAppId = integrationSettings[APP_ID_KEY as keyof IntegrationSettings];
        this.platformPayloadBuilder = new PlatformPayloadBuilder(Platform.OS, this.moEngageAppId);
        Logger.debug(this.tag, `MoEngage app id fetched ${this.moEngageAppId}`);
    }

    /**
     * Initialise the Native Integration SDK
     *
     * @since 1.0.0
     */
    initialiseSdk(): void {
        try {
            Logger.debug(this.tag, `initialiseSdk(): `);
            MoESegmentBridge.initialiseSdk(this.platformPayloadBuilder.getAccountMetaPayload());
        } catch (error) {
            Logger.error(this.tag, `initialiseSdk(): ${error}`);
        }
    }

    /**
     * Track AnonymousId for the AppId in IntegrationSetting
     * 
     * @param {string} anonymousId - anonymous id fetched from Segment Plugin
     * @since 1.0.0
     */
    trackAnonymousId(anonymousId?: string): void {
        try {
            Logger.debug(this.tag, `trackAnonymousId(): Id ${anonymousId}`);
            if (anonymousId === undefined) return;
            MoESegmentBridge.trackAnonymousId(this.platformPayloadBuilder.getAnonymousIdPayload(anonymousId));
        } catch (error) {
            Logger.error(this.tag, `trackAnonymousId(): ${error}`);
        }
    }

    /**
     * Modify the user traits with user id added in the traits
     * 
     * @param {string} anonymousId - anonymous id for the user
     * @param {string} userId - unique id for user
     * @param {Record<string, unknown>} userTraits - tracked user traits 
     * @returns modified user traits
     * @since 1.0.0
     */
    getModifiedUserTraits(
        anonymousId?: string,
        userId?: string,
        userTraits?: Record<string, unknown>
    ): Record<string, unknown> | undefined {
        let modifiedUserTraits: { [k: string]: any } = {};
        if (userId !== undefined) modifiedUserTraits[traitsMap.userId] = userId;
        if (anonymousId !== undefined) modifiedUserTraits[traitsMap.anonymousId] = anonymousId;
        modifiedUserTraits = Object.assign(modifiedUserTraits, userTraits);
        return modifiedUserTraits;
    }

    /**
     * Track user attributes for the AppId in IntegrationSetting
     * 
     * @param {Record<string, unknown>} userTraits - user attribute to be tracked 
     *     Note: Records should be mapped to MoEngage predefined attributes if available 
     * @since 1.0.0
     */
    setUserAttributes(userTraits?: Record<string, unknown>): void {
        try {
            Logger.debug(this.tag, `setUserAttributes(): traits ${userTraits}`);
            if (userTraits === undefined) return;
            MoESegmentBridge.setUserAttributes(this.platformPayloadBuilder.getUserAttributesPayload(userTraits));
        } catch (error) {
            Logger.error(this.tag, `setUserAttributes(): ${error}`);
        }
    }

    /**
     * Track Event for the AppId in IntegrationSetting
     * 
     * @param {string} event - event name
     * @param {JsonMap} properties - event propeties 
     * @since 1.0.0
     */
    trackEvent(event: string, properties?: JsonMap): void {
        try {
            Logger.debug(this.tag, `trackEvent():  event ${event} & properties ${properties}`);
            if (properties === undefined) properties = {};
            MoESegmentBridge.trackEvent(this.platformPayloadBuilder.getTrackEventPayload(event, properties));
        } catch (error) {
            Logger.error(this.tag, `trackEvent(): ${error}`);
        }
    }

    /**
     * Set an Alias to update the existing user Unique Id for the AppId in IntegrationSetting
     * 
     * @param {string} alias - the unique id for the user
     * @since 1.0.0
     */
    setUserAlias(alias?: string): void {
        try {
            Logger.debug(this.tag, `setUserAlias():  alias ${alias}}`);
            if (alias === undefined) return;
            MoESegmentBridge.setUserAlias(this.platformPayloadBuilder.getUserAliasUpdatePayload(alias));
        } catch (error) {
            Logger.error(this.tag, `setUserAlias(): ${error}`);
        }
    }

    /**
     * Logout current user for the AppId in IntegrationSetting
     * 
     * @since 1.0.0
     */
    logoutUser(): void {
        try {
            Logger.debug(this.tag, `logoutUser(): `);
            MoESegmentBridge.logoutUser(this.platformPayloadBuilder.getAccountMetaPayload());
        } catch (error) {
            Logger.error(this.tag, `logoutUser(): ${error}`);
        }
    }
}

declare type MoEngageIntegration = IntegrationSettings



