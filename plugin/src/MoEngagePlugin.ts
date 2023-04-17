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
import MoEngagePluginHelper from './internal/MoEngagePluginHelper';
import { traitsMap, transformMap } from './internal/ParametersMapping';
import { MoEngageLogger as Logger } from './Logger';

const mappedTraits = generateMapTransform(traitsMap, transformMap);

export class MoEngagePlugin extends DestinationPlugin {

    tag = "MoEngagePlugin";
    type = PluginType.destination;
    key = 'MoEngage';
  
    moEngagePluginHelper = new MoEngagePluginHelper();

    update(settings: SegmentAPISettings, type: UpdateType): void {
        try {
            Logger.debug(this.tag, "update(): will try to fetch MoEngage Config");
            if (type == UpdateType.initial && settings.integrations?.[this.key] !== undefined) {
                let moEngageIntegrationSettings = settings.integrations[this.key];
                this.moEngagePluginHelper.trackAnonymousId(moEngageIntegrationSettings, this.analytics?.userInfo.get().anonymousId);
                this.analytics?.userInfo.onChange((userInfo) => {
                    Logger.debug(this.tag, "update(): anonymous id changed for user");
                    this.moEngagePluginHelper.trackAnonymousId(moEngageIntegrationSettings, userInfo.anonymousId);
                });
            }
        } catch(error) {
            Logger.error(this.tag, `update(): error while fetching config ${error}`);
        }
    }

    identify(event: IdentifyEventType): IdentifyEventType | Promise<IdentifyEventType | undefined> | undefined {
        try {
            const traits = mappedTraits(event.traits as Record<string, unknown>);
            this.moEngagePluginHelper.setUserAttributes(traits);
        } catch(error) {
            Logger.error(this.tag, `identify(): error while tracking attributes ${error}`);
        }
        return event;
    }

    track(event: TrackEventType): TrackEventType | Promise<TrackEventType | undefined> | undefined {
        this.moEngagePluginHelper.trackEvent(event.event, event.properties);
        return event;
    }

    alias(event: AliasEventType): AliasEventType | Promise<AliasEventType | undefined> | undefined {
        this.moEngagePluginHelper.setUserAlias(event.userId);
        return event;
    }

    reset(): void {
        this.moEngagePluginHelper.logoutUser();
    }
}