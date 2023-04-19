/**
 * @file Contains different function to build payload which can be use for communication with Native Modules.
 * Note: This file doesn't build platform specific payload. To build platform specific payload check PlatformPayloadBuilder.
 * @author Abhishek Kumar
 */


/**
 * Create payload to track AnonymousId in Native Modules
 * 
 * @param {string} appId - MoEngage AppId
 * @param {string} anonymousId - User Anonymous id which needs to be track
 * @returns the json object with anonymous id
 * @since 1.0.0
 */
export function getAnonymousIdPayload(
    appId: string,
    anonymousId?: string
): { [k: string]: any } {
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            anonymousId: anonymousId ? anonymousId : ""
        }
    }
}

/**
 * Create payload to track user attributes in Native Modules
 * 
 * @param {string} appId - MoEngage AppId
 * @param {{[k: string]: any}} traits - User Attributes
 * @returns the json object with provided user attributes / traits
 * @since 1.0.0
 */
export function getUserAttributePayload(
    appId: string,
    traits: { [k: string]: any }
) {
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            traits: traits
        }
    }
}

/**
 * Create payload to track event in Native Modules
 * 
 * @param  {string} appId - MoEngage AppId
 * @param {string} event - Event Name
 * @param {{[k: string | number]: any}} properties - Event properties
 * @returns the json object for the events to be track
 * @since 1.0.0
 */
export function getTrackEventPayload(
    appId: string,
    event: string,
    properties: { [k: string | number]: any }
): { [k: string]: any } {
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

/**
 * Create payload to update user unique id in Native Modules
 * 
 * @param {string} appId - MoEngage AppId
 * @param {string} alias - User Unique Id
 * @returns the json object with provided alias & AppId
 * @since 1.0.0
 */
export function getUserAliasUpdatePayload(
    appId: string,
    alias: string
): { [k: string]: any } {
    return {
        accountMeta: {
            appId: appId
        },
        data: {
            alias: alias
        }
    }
}

/**
 * Create payload for the account meta info
 * 
 * @param {string} appId - MoEngage AppId
 * @returns the json object with provided AppId
 * @since 1.0.0
 */
export function getAccountMetaPayload(
    appId: string
): { [k: string]: any } {
    return {
        accountMeta: {
            appId: appId
        }
    }
}