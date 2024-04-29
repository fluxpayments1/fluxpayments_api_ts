[fluxpayments](../README.md) / [Modules](../modules.md) / [InstallmentTransactionQuery](../modules/InstallmentTransactionQuery.md) / InstallmentTransactionQuery

# Class: InstallmentTransactionQuery

[InstallmentTransactionQuery](../modules/InstallmentTransactionQuery.md).InstallmentTransactionQuery

This is an object that is used to query for installment_transactions.

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)\>

  ↳ **`InstallmentTransactionQuery`**

## Implements

- [`IInstallmentTransactionQuery`](../modules/IInstallmentTransactionQuery.md#iinstallmenttransactionquery)

## Table of contents

### Constructors

- [constructor](InstallmentTransactionQuery.InstallmentTransactionQuery.md#constructor)

### Properties

- [additionalSearchOptions](InstallmentTransactionQuery.InstallmentTransactionQuery.md#additionalsearchoptions)
- [attachedObject](InstallmentTransactionQuery.InstallmentTransactionQuery.md#attachedobject)
- [id](InstallmentTransactionQuery.InstallmentTransactionQuery.md#id)
- [installmentAmount](InstallmentTransactionQuery.InstallmentTransactionQuery.md#installmentamount)
- [installmentPeriod](InstallmentTransactionQuery.InstallmentTransactionQuery.md#installmentperiod)
- [installmentsLeft](InstallmentTransactionQuery.InstallmentTransactionQuery.md#installmentsleft)
- [lookupPage](InstallmentTransactionQuery.InstallmentTransactionQuery.md#lookuppage)
- [metadata](InstallmentTransactionQuery.InstallmentTransactionQuery.md#metadata)
- [objectType](InstallmentTransactionQuery.InstallmentTransactionQuery.md#objecttype)
- [originalTransactionId](InstallmentTransactionQuery.InstallmentTransactionQuery.md#originaltransactionid)
- [otplId](InstallmentTransactionQuery.InstallmentTransactionQuery.md#otplid)
- [pagination](InstallmentTransactionQuery.InstallmentTransactionQuery.md#pagination)
- [status](InstallmentTransactionQuery.InstallmentTransactionQuery.md#status)

### Methods

- [serialize](InstallmentTransactionQuery.InstallmentTransactionQuery.md#serialize)
- [createQuery](InstallmentTransactionQuery.InstallmentTransactionQuery.md#createquery)

## Constructors

### constructor

• **new InstallmentTransactionQuery**(`tokQ?`): [`InstallmentTransactionQuery`](InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IInstallmentTransactionQuery`](../modules/IInstallmentTransactionQuery.md#iinstallmenttransactionquery) |

#### Returns

[`InstallmentTransactionQuery`](InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[InstallmentTransactionQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L28)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IInstallmentTransactionQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)

#### Type declaration

• **new attachedObject**(`o?`): [`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

IInstallmentTransactionQuery.id

#### Defined in

[InstallmentTransactionQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L19)

___

### installmentAmount

• **installmentAmount**: `number`

#### Implementation of

IInstallmentTransactionQuery.installmentAmount

#### Defined in

[InstallmentTransactionQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L23)

___

### installmentPeriod

• **installmentPeriod**: `any`

#### Implementation of

IInstallmentTransactionQuery.installmentPeriod

#### Defined in

[InstallmentTransactionQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L25)

___

### installmentsLeft

• **installmentsLeft**: `number`

#### Implementation of

IInstallmentTransactionQuery.installmentsLeft

#### Defined in

[InstallmentTransactionQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L22)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Implementation of

IInstallmentTransactionQuery.metadata

#### Defined in

[InstallmentTransactionQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L20)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[InstallmentTransactionQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L27)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Implementation of

IInstallmentTransactionQuery.originalTransactionId

#### Defined in

[InstallmentTransactionQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L21)

___

### otplId

• **otplId**: `number`

#### Implementation of

IInstallmentTransactionQuery.otplId

#### Defined in

[InstallmentTransactionQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L24)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IInstallmentTransactionQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/BaseQuery.d.ts#L7)

___

### status

• **status**: `any`

#### Implementation of

IInstallmentTransactionQuery.status

#### Defined in

[InstallmentTransactionQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L26)

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

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[InstallmentTransactionQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`ipq`): [`InstallmentTransactionQuery`](InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IInstallmentTransactionQuery`](../modules/IInstallmentTransactionQuery.md#iinstallmenttransactionquery) |

#### Returns

[`InstallmentTransactionQuery`](InstallmentTransactionQuery.InstallmentTransactionQuery.md)

#### Defined in

[InstallmentTransactionQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8975bae1716d8db8c473a4a80c0e4403e62bdbcd/src/types/flux_types/InstallmentTransactionQuery.d.ts#L29)
