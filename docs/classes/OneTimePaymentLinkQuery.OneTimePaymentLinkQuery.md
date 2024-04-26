[fluxpayments](../README.md) / [Modules](../modules.md) / [OneTimePaymentLinkQuery](../modules/OneTimePaymentLinkQuery.md) / OneTimePaymentLinkQuery

# Class: OneTimePaymentLinkQuery

[OneTimePaymentLinkQuery](../modules/OneTimePaymentLinkQuery.md).OneTimePaymentLinkQuery

This is an object that is used to query for one_time_payment_links.

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)\>

  ↳ **`OneTimePaymentLinkQuery`**

## Table of contents

### Constructors

- [constructor](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#constructor)

### Properties

- [accountId](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#accountid)
- [additionalSearchOptions](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#additionalsearchoptions)
- [attachedObject](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#attachedobject)
- [id](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#id)
- [liveStatus](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#livestatus)
- [lookupPage](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#lookuppage)
- [metadata](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#metadata)
- [objectType](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#objecttype)
- [pagination](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#pagination)
- [paymentLink](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#paymentlink)
- [removeOnSuccess](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#removeonsuccess)
- [uniqueId](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#uniqueid)

### Methods

- [serialize](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#serialize)
- [createQuery](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#createquery)

## Constructors

### constructor

• **new OneTimePaymentLinkQuery**(`tokQ?`): [`OneTimePaymentLinkQuery`](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IOneTimePaymentLinkQuery`](../modules/IOneTimePaymentLinkQuery.md#ionetimepaymentlinkquery) |

#### Returns

[`OneTimePaymentLinkQuery`](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[OneTimePaymentLinkQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L26)

## Properties

### accountId

• **accountId**: `number`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L24)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)

#### Type declaration

• **new attachedObject**(`o?`): [`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L18)

___

### liveStatus

• **liveStatus**: `any`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L21)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[OneTimePaymentLinkQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L25)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L7)

___

### paymentLink

• **paymentLink**: `string`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L23)

___

### removeOnSuccess

• **removeOnSuccess**: `any`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L22)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[OneTimePaymentLinkQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L20)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `id` | `number` |
| `liveStatus` | `any` |
| `metadata` | `string` |
| `objectType` | `string` |
| `paymentLink` | `string` |
| `removeOnSuccess` | `any` |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[OneTimePaymentLinkQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`ipq`): [`OneTimePaymentLinkQuery`](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IOneTimePaymentLinkQuery`](../modules/IOneTimePaymentLinkQuery.md#ionetimepaymentlinkquery) |

#### Returns

[`OneTimePaymentLinkQuery`](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Defined in

[OneTimePaymentLinkQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L27)
