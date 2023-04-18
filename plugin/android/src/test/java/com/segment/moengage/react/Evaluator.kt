package com.segment.moengage.react

import com.segment.moengage.react.internal.model.AddressData
import com.segment.moengage.react.internal.model.AliasData
import com.segment.moengage.react.internal.model.AnonymousIdData
import com.segment.moengage.react.internal.model.Datapoint
import com.segment.moengage.react.internal.model.InstanceMeta
import com.segment.moengage.react.internal.model.UserAttributeData
import org.skyscreamer.jsonassert.JSONAssert
import org.skyscreamer.jsonassert.JSONCompareMode

internal class Evaluator {

    fun equal(instanceMeta1: InstanceMeta, instanceMeta2: InstanceMeta): Boolean {
        return instanceMeta1.appId == instanceMeta2.appId
    }

    fun equal(aliasData1: AliasData, aliasData2: AliasData): Boolean {
        return equal(
            aliasData1.instanceMeta,
            aliasData2.instanceMeta
        ) && aliasData1.alias == aliasData2.alias
    }


    fun equal(anonymousIdData1: AnonymousIdData, anonymousIdData2: AnonymousIdData): Boolean {
        return equal(
            anonymousIdData1.instanceMeta,
            anonymousIdData2.instanceMeta
        ) && anonymousIdData1.anonymousId == anonymousIdData2.anonymousId
    }


    fun equal(addressData1: AddressData, addressData2: AddressData): Boolean {
        return addressData1.city == addressData2.city
                && addressData1.state == addressData2.state
                && addressData1.country == addressData2.country
    }


    fun equal(dataPoint1: Datapoint, dataPoint2: Datapoint): Boolean {
        JSONAssert.assertEquals(
            dataPoint1.properties,
            dataPoint2.properties,
            JSONCompareMode.LENIENT
        )
        return equal(dataPoint1.instanceMeta, dataPoint2.instanceMeta)
                && dataPoint1.eventName == dataPoint2.eventName
    }


    fun equal(userAttributeData1: UserAttributeData, userAttributeData2: UserAttributeData): Boolean {
        JSONAssert.assertEquals(
            userAttributeData1.traits,
            userAttributeData1.traits,
            JSONCompareMode.LENIENT
        )
        return equal(
            userAttributeData1.instanceMeta,
            userAttributeData2.instanceMeta
        )
    }
}