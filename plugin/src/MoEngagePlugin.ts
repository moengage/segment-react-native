import {
    AliasEventType,
    DestinationPlugin,
    IdentifyEventType,
    PluginType,
    SegmentAPISettings,
    TrackEventType,
    UpdateType,
    generateMapTransform
} from '@segment/analytics-react-native';
import MoEngagePluginHandler from './internal/MoEngagePluginHandler';
import { traitsMap, transformMap } from './internal/ParametersMapping';
import { MoEngageLogger as Logger } from './internal/Logger';

/**
 * Destination Plugin to integrate MoEngage SDK with Segment SDK
 * 
 * @author Abhishek Kumar
 * @since 1.0.0
 */
export class MoEngagePlugin extends DestinationPlugin {

    tag = "MoEngagePlugin";
    type = PluginType.destination;
    key = 'MoEngage';

    moEngagePluginHandler: MoEngagePluginHandler | undefined

    update(settings: SegmentAPISettings, type: UpdateType): void {
        try {
            Logger.debug(this.tag, "update(): will try to fetch MoEngage Config");
            if (type == UpdateType.initial && settings.integrations?.[this.key] !== undefined) {
                let moEngageIntegrationSettings = settings.integrations[this.key];
                this.moEngagePluginHandler = new MoEngagePluginHandler(moEngageIntegrationSettings);
                this.moEngagePluginHandler?.trackAnonymousId(this.analytics?.userInfo.get().anonymousId);
                this.analytics?.userInfo.onChange((userInfo) => {
                    this.moEngagePluginHandler?.trackAnonymousId(userInfo.anonymousId);
                });
            }
        } catch (error) {
            Logger.error(this.tag, `update(): error while fetching config ${error}`);
        }
    }

    identify(event: IdentifyEventType): IdentifyEventType | Promise<IdentifyEventType | undefined> | undefined {
        try {
            Logger.debug(this.tag, "identify(): will try to add attributes");
            const traits = transformMap(
                traitsMap,
                this.moEngagePluginHandler
                    ?.getModifiedUserTraits(event.anonymousId, event.userId, event.traits) as Record<string, unknown>
            );
            this.moEngagePluginHandler?.setUserAttributes(traits);
        } catch (error) {
            Logger.error(this.tag, `identify(): error while tracking attributes ${error}`);
        }
        return event;
    }

    track(event: TrackEventType): TrackEventType | Promise<TrackEventType | undefined> | undefined {
        Logger.debug(this.tag, "track(): will try to track event");
        this.moEngagePluginHandler?.trackEvent(event.event, event.properties);
        return event;
    }

    alias(event: AliasEventType): AliasEventType | Promise<AliasEventType | undefined> | undefined {
        Logger.debug(this.tag, "update(): will try to update user alias");
        this.moEngagePluginHandler?.setUserAlias(event.userId);
        return event;
    }

    reset(): void {
        Logger.debug(this.tag, "reset(): will try to logout user");
        this.moEngagePluginHandler?.logoutUser();
    }
}