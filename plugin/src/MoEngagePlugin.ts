import {
    AliasEventType,
    DestinationPlugin,
    IdentifyEventType,
    PluginType,
    SegmentAPISettings,
    TrackEventType,
    UpdateType
} from '@segment/analytics-react-native';
import MoEngagePluginHelper from './utils/MoEngagePluginHelper';

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
            }
        } catch(error) {
        }
    }

    identify(event: IdentifyEventType): IdentifyEventType | Promise<IdentifyEventType | undefined> | undefined {
        this.moEngagePluginHelper.setUserAttributes(event.traits);
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

     // todo: check if this is needed because it can make double API call to server
    flush(): void | Promise<void> {
       this.moEngagePluginHelper.syncDataImmediately();
    }

    reset(): void {
        this.moEngagePluginHelper.logoutUser();
    }
}