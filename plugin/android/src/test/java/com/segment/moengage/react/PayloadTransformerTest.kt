package com.segment.moengage.react

import com.segment.moengage.react.dataprovider.ACCOUNT_INSTANCE_META_JSON_STRING
import com.segment.moengage.react.dataprovider.ACCOUNT_INSTANCE_META_OBJECT
import com.segment.moengage.react.dataprovider.ADDRESS_EMPTY_JSON_OBJECT
import com.segment.moengage.react.dataprovider.ADDRESS_EMPTY_JSON_STRING
import com.segment.moengage.react.dataprovider.ADDRESS_JSON_STRING
import com.segment.moengage.react.dataprovider.ADDRESS_OBJECT
import com.segment.moengage.react.dataprovider.ADDRESS_WITH_CITY_MISSING_JSON_STRING
import com.segment.moengage.react.dataprovider.ADDRESS_WITH_CITY_MISSING_OBJECT
import com.segment.moengage.react.dataprovider.ADDRESS_WITH_COUNTRY_MISSING_JSON_STRING
import com.segment.moengage.react.dataprovider.ADDRESS_WITH_COUNTRY_MISSING_OBJECT
import com.segment.moengage.react.dataprovider.ADDRESS_WITH_STATE_MISSING_JSON_STRING
import com.segment.moengage.react.dataprovider.ADDRESS_WITH_STATE_MISSING_OBJECT
import com.segment.moengage.react.dataprovider.ANONYMOUS_ID_JSON_STRING
import com.segment.moengage.react.dataprovider.ANONYMOUS_ID_OBJECT
import com.segment.moengage.react.dataprovider.TRACKED_EVENT_JSON_STRING
import com.segment.moengage.react.dataprovider.TRACKED_EVENT_OBJECT
import com.segment.moengage.react.dataprovider.USER_ALIAS_JSON_STRING
import com.segment.moengage.react.dataprovider.USER_ALIAS_OBJECT
import com.segment.moengage.react.dataprovider.USER_ATTRIBUTES_JSON_STRING
import com.segment.moengage.react.dataprovider.USER_ATTRIBUTES_OBJECT
import com.segment.moengage.react.internal.PayloadTransformer
import com.segment.moengage.react.internal.model.AddressData
import com.segment.moengage.react.internal.model.AliasData
import com.segment.moengage.react.internal.model.AnonymousIdData
import com.segment.moengage.react.internal.model.Datapoint
import com.segment.moengage.react.internal.model.InstanceMeta
import com.segment.moengage.react.internal.model.UserAttributeData
import junitparams.JUnitParamsRunner
import org.json.JSONObject
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(value = JUnitParamsRunner::class)
internal class PayloadTransformerTest {

    private lateinit var payloadTransformer: PayloadTransformer
    private lateinit var evaluator: Evaluator

    @Before
    fun setup() {
        payloadTransformer = PayloadTransformer()
        evaluator = Evaluator()
    }

    @Test
    @junitparams.Parameters(method = "instanceMetaFromJsonParams")
    fun instanceMetaFromJsonTest(
        request: JSONObject,
        expectedResult: InstanceMeta
    ) {
        assert(
            evaluator.equal(
                payloadTransformer.instanceMetaFromJson(request),
                expectedResult
            )
        )
    }

    fun instanceMetaFromJsonParams(): Array<Array<Any?>> {
        return arrayOf(
            arrayOf(
                JSONObject(ACCOUNT_INSTANCE_META_JSON_STRING),
                ACCOUNT_INSTANCE_META_OBJECT
            )
        )
    }

    @Test
    @junitparams.Parameters(method = "aliasDataFromJsonParams")
    fun aliasDataFromJsonTest(
        request: JSONObject,
        expectedResult: AliasData
    ) {
        assert(
            evaluator.equal(
                payloadTransformer.aliasDataFromJson(request),
                expectedResult
            )
        )
    }

    fun aliasDataFromJsonParams(): Array<Array<Any?>> {
        return arrayOf(
            arrayOf(
                JSONObject(USER_ALIAS_JSON_STRING),
                USER_ALIAS_OBJECT
            )
        )
    }

    @Test
    @junitparams.Parameters(method = "anonymousIdDataFromJsonParams")
    fun anonymousIdDataFromJsonTest(
        request: JSONObject,
        expectedResult: AnonymousIdData
    ) {
        assert(
            evaluator.equal(
                payloadTransformer.anonymousIdDataFromJson(request),
                expectedResult
            )
        )
    }

    fun anonymousIdDataFromJsonParams(): Array<Array<Any?>> {
        return arrayOf(
            arrayOf(
                JSONObject(ANONYMOUS_ID_JSON_STRING),
                ANONYMOUS_ID_OBJECT
            )
        )
    }

    @Test
    @junitparams.Parameters(method = "dataPointsFromJsonParams")
    fun dataPointsFromJsonTest(
        request: JSONObject,
        expectedResult: Datapoint
    ) {
        assert(
            evaluator.equal(
                payloadTransformer.dataPointsFromJson(request),
                expectedResult
            )
        )
    }

    fun dataPointsFromJsonParams(): Array<Array<Any?>> {
        return arrayOf(
            arrayOf(
                JSONObject(TRACKED_EVENT_JSON_STRING),
                TRACKED_EVENT_OBJECT
            )
        )
    }

    @Test
    @junitparams.Parameters(method = "userAttributeDataFromJsonParams")
    fun userAttributeDataFromJsonTest(
        request: JSONObject,
        expectedResult: UserAttributeData
    ) {
        assert(
            evaluator.equal(
                payloadTransformer.userAttributeDataFromJson(request),
                expectedResult
            )
        )
    }

    fun userAttributeDataFromJsonParams(): Array<Array<Any?>> {
        return arrayOf(
            arrayOf(
                JSONObject(USER_ATTRIBUTES_JSON_STRING),
                USER_ATTRIBUTES_OBJECT
            )
        )
    }

    @Test
    @junitparams.Parameters(method = "getAddressDataFromJsonParams")
    fun getAddressDataFromJsonTest(
        request: JSONObject,
        expectedResult: AddressData
    ) {
        assert(
            evaluator.equal(
                payloadTransformer.getAddressDataFromJson(request),
                expectedResult
            )
        )
    }

    fun getAddressDataFromJsonParams(): Array<Array<Any?>> {
        return arrayOf(
            arrayOf(
                JSONObject(ADDRESS_JSON_STRING),
                ADDRESS_OBJECT
            ),

            arrayOf(
                JSONObject(ADDRESS_WITH_CITY_MISSING_JSON_STRING),
                ADDRESS_WITH_CITY_MISSING_OBJECT
            ),

            arrayOf(
                JSONObject(ADDRESS_WITH_COUNTRY_MISSING_JSON_STRING),
                ADDRESS_WITH_COUNTRY_MISSING_OBJECT
            ),

            arrayOf(
                JSONObject(ADDRESS_WITH_STATE_MISSING_JSON_STRING),
                ADDRESS_WITH_STATE_MISSING_OBJECT
            ),

            arrayOf(
                JSONObject(ADDRESS_EMPTY_JSON_STRING),
                ADDRESS_EMPTY_JSON_OBJECT
            )
        )
    }
}