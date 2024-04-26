[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/OneTimePaymentLinkQuery](../modules/flux_types_OneTimePaymentLinkQuery.md) / OneTimePaymentLinkQuery

# Class: OneTimePaymentLinkQuery

[flux\_types/OneTimePaymentLinkQuery](../modules/flux_types_OneTimePaymentLinkQuery.md).OneTimePaymentLinkQuery

This is an object that is used to query for one_time_payment_links.

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`OneTimePaymentLink`](flux_types_OneTimePaymentLink.OneTimePaymentLink.md)\>

  ↳ **`OneTimePaymentLinkQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#constructor)

### Properties

- [accountId](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#accountid)
- [additionalSearchOptions](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#attachedobject)
- [id](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#id)
- [liveStatus](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#livestatus)
- [lookupPage](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#lookuppage)
- [metadata](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#metadata)
- [objectType](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#objecttype)
- [pagination](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#pagination)
- [paymentLink](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#paymentlink)
- [removeOnSuccess](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#removeonsuccess)
- [uniqueId](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#uniqueid)

### Methods

- [serialize](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#serialize)
- [createQuery](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md#createquery)

## Constructors

### constructor

• **new OneTimePaymentLinkQuery**(`tokQ?`): [`OneTimePaymentLinkQuery`](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IOneTimePaymentLinkQuery`](../modules/flux_types_IOneTimePaymentLinkQuery.md#ionetimepaymentlinkquery) |

#### Returns

[`OneTimePaymentLinkQuery`](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L26)

## Properties

### accountId

• **accountId**: `number`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L24)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`OneTimePaymentLink`](flux_types_OneTimePaymentLink.OneTimePaymentLink.md)

#### Type declaration

• **new attachedObject**(`o?`): [`OneTimePaymentLink`](flux_types_OneTimePaymentLink.OneTimePaymentLink.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`OneTimePaymentLink`](flux_types_OneTimePaymentLink.OneTimePaymentLink.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L18)

___

### liveStatus

• **liveStatus**: `any`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L21)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[lookupPage](flux_types_BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L25)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### paymentLink

• **paymentLink**: `string`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L23)

___

### removeOnSuccess

• **removeOnSuccess**: `any`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L22)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L20)

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

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`ipq`): [`OneTimePaymentLinkQuery`](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IOneTimePaymentLinkQuery`](../modules/flux_types_IOneTimePaymentLinkQuery.md#ionetimepaymentlinkquery) |

#### Returns

[`OneTimePaymentLinkQuery`](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

#### Defined in

[src/types/flux_types/OneTimePaymentLinkQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/OneTimePaymentLinkQuery.d.ts#L27)
