[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/InstallmentTransactionQuery](../modules/flux_types_InstallmentTransactionQuery.md) / InstallmentTransactionQuery

# Class: InstallmentTransactionQuery

[flux\_types/InstallmentTransactionQuery](../modules/flux_types_InstallmentTransactionQuery.md).InstallmentTransactionQuery

This is an object that is used to query for installment_transactions.

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)\>

  ↳ **`InstallmentTransactionQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#constructor)

### Properties

- [additionalSearchOptions](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#attachedobject)
- [id](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#id)
- [installmentAmount](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#installmentamount)
- [installmentPeriod](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#installmentperiod)
- [installmentsLeft](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#installmentsleft)
- [lookupPage](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#lookuppage)
- [metadata](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#metadata)
- [objectType](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#objecttype)
- [originalTransactionId](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#originaltransactionid)
- [otplId](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#otplid)
- [pagination](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#pagination)
- [status](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#status)

### Methods

- [serialize](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#serialize)
- [createQuery](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md#createquery)

## Constructors

### constructor

• **new InstallmentTransactionQuery**(`tokQ?`): [`InstallmentTransactionQuery`](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IInstallmentTransactionQuery`](../modules/flux_types_IInstallmentTransactionQuery.md#iinstallmenttransactionquery) |

#### Returns

[`InstallmentTransactionQuery`](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L28)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)

#### Type declaration

• **new attachedObject**(`o?`): [`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L19)

___

### installmentAmount

• **installmentAmount**: `number`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L23)

___

### installmentPeriod

• **installmentPeriod**: `any`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L25)

___

### installmentsLeft

• **installmentsLeft**: `number`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L22)

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

[src/types/flux_types/InstallmentTransactionQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L20)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L27)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L21)

___

### otplId

• **otplId**: `number`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L24)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### status

• **status**: `any`

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L26)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `installmentAmount` | `number` |
| `installmentPeriod` | `any` |
| `installmentsLeft` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `originalTransactionId` | `number` |
| `otplId` | `number` |
| `status` | `any` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`ipq`): [`InstallmentTransactionQuery`](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IInstallmentTransactionQuery`](../modules/flux_types_IInstallmentTransactionQuery.md#iinstallmenttransactionquery) |

#### Returns

[`InstallmentTransactionQuery`](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Defined in

[src/types/flux_types/InstallmentTransactionQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransactionQuery.d.ts#L29)
