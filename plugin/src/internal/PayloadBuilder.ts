export function getAnonymousIdPayload(appId: string, anonymousId?: string): { [k: string]: any } { 
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            anonymousId: anonymousId ? anonymousId : ""
        }
    }
}

export function getUserAttributePayload(appId: string, traits: { [k: string]: any }) {
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            traits: traits
        }
    }
}

export function getTrackEventPayload(appId: string, event: string, properties: { [k: string | number]: any }): { [k: string]: any } {
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            event: event,
            properties: properties
        }
    }
}

export function getUserAliasUpdatePayload(appId: string, alias: string): { [k: string]: any } {
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            alias: alias
        }
    }
}

export function getAccountMetaPayload(appId: string): { [k: string]: any } {
    return {
        accountMeta: {
            appId: appId
        }
    }
}