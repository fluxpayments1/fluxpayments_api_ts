[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/RecurringTransactionQuery](../modules/flux_types_RecurringTransactionQuery.md) / RecurringTransactionQuery

# Class: RecurringTransactionQuery

[flux\_types/RecurringTransactionQuery](../modules/flux_types_RecurringTransactionQuery.md).RecurringTransactionQuery

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`RecurringTransaction`](flux_types_RecurringTransaction.RecurringTransaction.md)\>

  ↳ **`RecurringTransactionQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#constructor)

### Properties

- [additionalSearchOptions](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#attachedobject)
- [id](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#id)
- [lookupPage](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#lookuppage)
- [metadata](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#metadata)
- [objectType](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#objecttype)
- [originalTransactionId](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#originaltransactionid)
- [otplId](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#otplid)
- [pagination](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#pagination)
- [productDumpId](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#productdumpid)
- [productId](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#productid)
- [recurringAmount](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#recurringamount)
- [recurringTaxAmount](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#recurringtaxamount)
- [status](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#status)
- [uniqueId](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#uniqueid)

### Methods

- [serialize](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#serialize)
- [createQuery](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md#createquery)

## Constructors

### constructor

• **new RecurringTransactionQuery**(`tokQ?`): [`RecurringTransactionQuery`](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IRecurringTransactionQuery`](../modules/flux_types_IRecurringTransactionQuery.md#irecurringtransactionquery) |

#### Returns

[`RecurringTransactionQuery`](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L29)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`RecurringTransaction`](flux_types_RecurringTransaction.RecurringTransaction.md)

#### Type declaration

• **new attachedObject**(`o?`): [`RecurringTransaction`](flux_types_RecurringTransaction.RecurringTransaction.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`RecurringTransaction`](flux_types_RecurringTransaction.RecurringTransaction.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L18)

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

[src/types/flux_types/RecurringTransactionQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L28)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L23)

___

### otplId

• **otplId**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L26)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### productDumpId

• **productDumpId**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L25)

___

### productId

• **productId**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L24)

___

### recurringAmount

• **recurringAmount**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L21)

___

### recurringTaxAmount

• **recurringTaxAmount**: `number`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L22)

___

### status

• **status**: `any`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L27)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L20)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `originalTransactionId` | `number` |
| `otplId` | `number` |
| `productDumpId` | `number` |
| `productId` | `number` |
| `recurringAmount` | `number` |
| `recurringTaxAmount` | `number` |
| `status` | `any` |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`RecurringTransactionQuery`](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IRecurringTransactionQuery`](../modules/flux_types_IRecurringTransactionQuery.md#irecurringtransactionquery) |

#### Returns

[`RecurringTransactionQuery`](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Defined in

[src/types/flux_types/RecurringTransactionQuery.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/RecurringTransactionQuery.d.ts#L30)
