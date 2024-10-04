[fluxpayments](../README.md) / [Modules](../modules.md) / [PaymentLinkQuery](../modules/PaymentLinkQuery.md) / PaymentLinkQuery

# Class: PaymentLinkQuery

[PaymentLinkQuery](../modules/PaymentLinkQuery.md).PaymentLinkQuery

This is an object that is used to query for one_time_payment_links.

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`PaymentLink`](PaymentLink.PaymentLink.md)\>

  ↳ **`PaymentLinkQuery`**

## Implements

- [`IPaymentLinkQuery`](../modules/IPaymentLinkQuery.md#ipaymentlinkquery)

## Table of contents

### Constructors

- [constructor](PaymentLinkQuery.PaymentLinkQuery.md#constructor)

### Properties

- [accountId](PaymentLinkQuery.PaymentLinkQuery.md#accountid)
- [additionalSearchOptions](PaymentLinkQuery.PaymentLinkQuery.md#additionalsearchoptions)
- [attachedObject](PaymentLinkQuery.PaymentLinkQuery.md#attachedobject)
- [conditional](PaymentLinkQuery.PaymentLinkQuery.md#conditional)
- [createdAt](PaymentLinkQuery.PaymentLinkQuery.md#createdat)
- [id](PaymentLinkQuery.PaymentLinkQuery.md#id)
- [liveStatus](PaymentLinkQuery.PaymentLinkQuery.md#livestatus)
- [lookupPage](PaymentLinkQuery.PaymentLinkQuery.md#lookuppage)
- [metadata](PaymentLinkQuery.PaymentLinkQuery.md#metadata)
- [obName](PaymentLinkQuery.PaymentLinkQuery.md#obname)
- [objectType](PaymentLinkQuery.PaymentLinkQuery.md#objecttype)
- [pagination](PaymentLinkQuery.PaymentLinkQuery.md#pagination)
- [paymentLink](PaymentLinkQuery.PaymentLinkQuery.md#paymentlink)
- [removeOnSuccess](PaymentLinkQuery.PaymentLinkQuery.md#removeonsuccess)
- [uniqueId](PaymentLinkQuery.PaymentLinkQuery.md#uniqueid)

### Methods

- [serialize](PaymentLinkQuery.PaymentLinkQuery.md#serialize)
- [createQuery](PaymentLinkQuery.PaymentLinkQuery.md#createquery)

## Constructors

### constructor

• **new PaymentLinkQuery**(`tokQ?`): [`PaymentLinkQuery`](PaymentLinkQuery.PaymentLinkQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IPaymentLinkQuery`](../modules/IPaymentLinkQuery.md#ipaymentlinkquery) |

#### Returns

[`PaymentLinkQuery`](PaymentLinkQuery.PaymentLinkQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[PaymentLinkQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L27)

## Properties

### accountId

• **accountId**: `number`

#### Implementation of

IPaymentLinkQuery.accountId

#### Defined in

[PaymentLinkQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L25)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IPaymentLinkQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L10)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`PaymentLink`](PaymentLink.PaymentLink.md)

#### Type declaration

• **new attachedObject**(`o?`): [`PaymentLink`](PaymentLink.PaymentLink.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`PaymentLink`](PaymentLink.PaymentLink.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L7)

___

### conditional

• **conditional**: ``"OR"`` \| ``"AND"``

#### Implementation of

IPaymentLinkQuery.conditional

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[conditional](BaseQuery.BaseQuery.md#conditional)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L6)

___

### createdAt

• **createdAt**: `number`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[createdAt](BaseQuery.BaseQuery.md#createdat)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L8)

___

### id

• **id**: `number`

#### Implementation of

IPaymentLinkQuery.id

#### Defined in

[PaymentLinkQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L19)

___

### liveStatus

• **liveStatus**: `any`

#### Implementation of

IPaymentLinkQuery.liveStatus

#### Defined in

[PaymentLinkQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L22)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L11)

___

### metadata

• **metadata**: `string`

#### Implementation of

IPaymentLinkQuery.metadata

#### Defined in

[PaymentLinkQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L20)

___

### obName

• **obName**: `string`

#### Defined in

[PaymentLinkQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[PaymentLinkQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L26)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IPaymentLinkQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L9)

___

### paymentLink

• **paymentLink**: `string`

#### Implementation of

IPaymentLinkQuery.paymentLink

#### Defined in

[PaymentLinkQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L24)

___

### removeOnSuccess

• **removeOnSuccess**: `any`

#### Implementation of

IPaymentLinkQuery.removeOnSuccess

#### Defined in

[PaymentLinkQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L23)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

IPaymentLinkQuery.uniqueId

#### Defined in

[PaymentLinkQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L21)

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

[PaymentLinkQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L9)

___

### createQuery

▸ **createQuery**(`ipq`): [`PaymentLinkQuery`](PaymentLinkQuery.PaymentLinkQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IPaymentLinkQuery`](../modules/IPaymentLinkQuery.md#ipaymentlinkquery) |

#### Returns

[`PaymentLinkQuery`](PaymentLinkQuery.PaymentLinkQuery.md)

#### Defined in

[PaymentLinkQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLinkQuery.d.ts#L28)
