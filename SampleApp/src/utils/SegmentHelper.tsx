import { SegmentClient } from "@segment/analytics-react-native";

const currentIsoDate: string = (new Date()).toISOString();

// Equivalent to trackEvent in MoEngage
export function trackEvent(segmentClient: SegmentClient) {
    segmentClient.track('Mobile Item Purchased', {
        id: 321,
        name: "iPhone",
        purchaseTime: currentIsoDate,
        billAmount: 12312.12,
        userDetails: {
            userName: "moengage",
            email: "moengage@test.com",
            phone: 1234567890,
            gender: "male"
        },
        2: "item" 
    });
}

// Equivalent to setUserAttribute in MoEngage
export function identifyAttributes(segmentClient: SegmentClient) {
    segmentClient.identify('moengage-test-user-1', {
        address: {
            street: "Koramangala", 
            city: "Bengaluru",
            country: "India",
            state: "Karnataka",
            postalCode: "560095",
        },
        company: {
            name: "MoEngage",
            id: "MoE",
            industry: "Engagement",
            employee_count: 999,
            plan: "plan"
        },
        age: 1,
        birthday: currentIsoDate,
        createdAt: currentIsoDate,
        email: "moengage@test.com",
        id: "moe",
        title: "MoE. ",
        firstName: "MoEngage",
        lastName: "Inc. ",
        phone: "1234567890",
        username: "moengage",
        avatar: "https://picsum.photos/200/200",
        description: "Test Attributes",
        gender: "male",
        website: "https://moengage.com/",
        location: {
            latitude: 12.9344,
            longitude: 77.6113
        },
        extraStringKey: "Extra Attribute",
        extraIntKey: 99,
        extraLongKey: 1738141852226360940,
        extraDoubleKey: 3.0,
        extraDateKey: currentIsoDate,
        extraBoolKey: true,
        extraNullKey: null,
        extraUndefinedKey: undefined,
        extraJsonObjectKey: {
            key0: "tracking not supported"
        },
        extraJsonArrayKey: [{
            key1: "tracking not supported"
        }]
    });
}

// Equivalent to setUniqueId in MoEngage
export function setAlias(segmentClient: SegmentClient) {
    segmentClient.alias("moengage-12345");
}

// Equivalent to logout in MoEngage
export function logout(segmentClient: SegmentClient) {
    segmentClient.reset();
}

// Equivalent to syncInteractionDataImediately in MoEngage
export function syncData(segmentClient: SegmentClient) {
    segmentClient.flush();
}