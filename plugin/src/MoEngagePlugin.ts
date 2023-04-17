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
import MoEngagePluginHelper from './utils/MoEngagePluginHelper';
import { traitsMap, transformMap } from './utils/ParametersMapping';

const mappedTraits = generateMapTransform(traitsMap, transformMap);

export class MoEngagePlugin extends DestinationPlugin {

    tag = "MoEngagePlugin";
    type = PluginType.destination;
    key = 'MoEngage';
  
    moEngagePluginHelper = new MoEngagePluginHelper();

    update(settings: SegmentAPISettings, type: UpdateType): void {
        try {
            if (type == UpdateType.initial && settings.integrations?.[this.key] !== undefined) {
                let moEngageIntegrationSettings = settings.integrations[this.key];
                this.moEngagePluginHelper.trackAnonymousId(moEngageIntegrationSettings, this.analytics?.userInfo.get().anonymousId);
                this.analytics?.userInfo.onChange((userInfo) => {
                    this.moEngagePluginHelper.trackAnonymousId(moEngageIntegrationSettings, userInfo.anonymousId);
                });
            }
        } catch(error) {
        }
    }

    identify(event: IdentifyEventType): IdentifyEventType | Promise<IdentifyEventType | undefined> | undefined {
        const traits = mappedTraits(event.traits as Record<string, unknown>);
        this.moEngagePluginHelper.setUserAttributes(traits);
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