[fluxpayments](../README.md) / [Modules](../modules.md) / [RecurringTransactionQuery](../modules/RecurringTransactionQuery.md) / RecurringTransactionQuery

# Class: RecurringTransactionQuery

[RecurringTransactionQuery](../modules/RecurringTransactionQuery.md).RecurringTransactionQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)\>

  ↳ **`RecurringTransactionQuery`**

## Implements

- [`IRecurringTransactionQuery`](../modules/IRecurringTransactionQuery.md#irecurringtransactionquery)

## Table of contents

### Constructors

- [constructor](RecurringTransactionQuery.RecurringTransactionQuery.md#constructor)

### Properties

- [additionalSearchOptions](RecurringTransactionQuery.RecurringTransactionQuery.md#additionalsearchoptions)
- [attachedObject](RecurringTransactionQuery.RecurringTransactionQuery.md#attachedobject)
- [id](RecurringTransactionQuery.RecurringTransactionQuery.md#id)
- [lookupPage](RecurringTransactionQuery.RecurringTransactionQuery.md#lookuppage)
- [metadata](RecurringTransactionQuery.RecurringTransactionQuery.md#metadata)
- [objectType](RecurringTransactionQuery.RecurringTransactionQuery.md#objecttype)
- [originalTransactionId](RecurringTransactionQuery.RecurringTransactionQuery.md#originaltransactionid)
- [otplId](RecurringTransactionQuery.RecurringTransactionQuery.md#otplid)
- [pagination](RecurringTransactionQuery.RecurringTransactionQuery.md#pagination)
- [productDumpId](RecurringTransactionQuery.RecurringTransactionQuery.md#productdumpid)
- [productId](RecurringTransactionQuery.RecurringTransactionQuery.md#productid)
- [recurringAmount](RecurringTransactionQuery.RecurringTransactionQuery.md#recurringamount)
- [recurringTaxAmount](RecurringTransactionQuery.RecurringTransactionQuery.md#recurringtaxamount)
- [status](RecurringTransactionQuery.RecurringTransactionQuery.md#status)
- [uniqueId](RecurringTransactionQuery.RecurringTransactionQuery.md#uniqueid)

### Methods

- [serialize](RecurringTransactionQuery.RecurringTransactionQuery.md#serialize)
- [createQuery](RecurringTransactionQuery.RecurringTransactionQuery.md#createquery)

## Constructors

### constructor

• **new RecurringTransactionQuery**(`tokQ?`): [`RecurringTransactionQuery`](RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IRecurringTransactionQuery`](../modules/IRecurringTransactionQuery.md#irecurringtransactionquery) |

#### Returns

[`RecurringTransactionQuery`](RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[RecurringTransactionQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L29)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IRecurringTransactionQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)

#### Type declaration

• **new attachedObject**(`o?`): [`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

IRecurringTransactionQuery.id

#### Defined in

[RecurringTransactionQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L18)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Implementation of

IRecurringTransactionQuery.metadata

#### Defined in

[RecurringTransactionQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[RecurringTransactionQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L28)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Implementation of

IRecurringTransactionQuery.originalTransactionId

#### Defined in

[RecurringTransactionQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L23)

___

### otplId

• **otplId**: `number`

#### Implementation of

IRecurringTransactionQuery.otplId

#### Defined in

[RecurringTransactionQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L26)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IRecurringTransactionQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### productDumpId

• **productDumpId**: `number`

#### Implementation of

IRecurringTransactionQuery.productDumpId

#### Defined in

[RecurringTransactionQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L25)

___

### productId

• **productId**: `number`

#### Implementation of

IRecurringTransactionQuery.productId

#### Defined in

[RecurringTransactionQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L24)

___

### recurringAmount

• **recurringAmount**: `number`

#### Implementation of

IRecurringTransactionQuery.recurringAmount

#### Defined in

[RecurringTransactionQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L21)

___

### recurringTaxAmount

• **recurringTaxAmount**: `number`

#### Implementation of

IRecurringTransactionQuery.recurringTaxAmount

#### Defined in

[RecurringTransactionQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L22)

___

### status

• **status**: `any`

#### Implementation of

IRecurringTransactionQuery.status

#### Defined in

[RecurringTransactionQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L27)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[RecurringTransactionQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L20)

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

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[RecurringTransactionQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`RecurringTransactionQuery`](RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IRecurringTransactionQuery`](../modules/IRecurringTransactionQuery.md#irecurringtransactionquery) |

#### Returns

[`RecurringTransactionQuery`](RecurringTransactionQuery.RecurringTransactionQuery.md)

#### Defined in

[RecurringTransactionQuery.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/RecurringTransactionQuery.d.ts#L30)
