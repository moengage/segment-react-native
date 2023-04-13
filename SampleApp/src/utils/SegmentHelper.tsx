import { SegmentClient } from "@segment/analytics-react-native";

const currentIsoDate: string = (new Date()).toISOString();

// Equivalent to trackEvent in MoEngage
export function trackEvent(segmentClient: SegmentClient) {
    segmentClient.track('Item Purchased', {
        id: 321,
        name: "iPhone",
        purchaseTime: currentIsoDate,
        billAmount: 12312.12,
        userDetails: {
            userName: "moengage",
            email: "moengage@test.com",
            phone: 1234567890,
            gender: "male"
        }
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
        age: 1,
        birthday: currentIsoDate,
        createdAt: currentIsoDate,
        email: "moengage@test.com",
        firstName: "MoEngage",
        lastName: "Inc. ",
        phone: "1234567890",
        username: "moengage"
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