[fluxpayments](../README.md) / [Modules](../modules.md) / [TransactionQuery](../modules/TransactionQuery.md) / TransactionQuery

# Class: TransactionQuery

[TransactionQuery](../modules/TransactionQuery.md).TransactionQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Transaction`](Transaction.Transaction.md)\>

  ↳ **`TransactionQuery`**

## Implements

- [`ITransactionQuery`](../modules/ITransactionQuery.md#itransactionquery)

## Table of contents

### Constructors

- [constructor](TransactionQuery.TransactionQuery.md#constructor)

### Properties

- [accountDumpId](TransactionQuery.TransactionQuery.md#accountdumpid)
- [accountId](TransactionQuery.TransactionQuery.md#accountid)
- [accountVersion](TransactionQuery.TransactionQuery.md#accountversion)
- [activeStatus](TransactionQuery.TransactionQuery.md#activestatus)
- [additionalSearchOptions](TransactionQuery.TransactionQuery.md#additionalsearchoptions)
- [amount](TransactionQuery.TransactionQuery.md#amount)
- [attachedObject](TransactionQuery.TransactionQuery.md#attachedobject)
- [baseTransaction](TransactionQuery.TransactionQuery.md#basetransaction)
- [cardBrandId](TransactionQuery.TransactionQuery.md#cardbrandid)
- [conditional](TransactionQuery.TransactionQuery.md#conditional)
- [createdAt](TransactionQuery.TransactionQuery.md#createdat)
- [currency](TransactionQuery.TransactionQuery.md#currency)
- [direction](TransactionQuery.TransactionQuery.md#direction)
- [email](TransactionQuery.TransactionQuery.md#email)
- [hasBackOrderedProducts](TransactionQuery.TransactionQuery.md#hasbackorderedproducts)
- [id](TransactionQuery.TransactionQuery.md#id)
- [inventoryOnlyOrder](TransactionQuery.TransactionQuery.md#inventoryonlyorder)
- [lookupPage](TransactionQuery.TransactionQuery.md#lookuppage)
- [metadata](TransactionQuery.TransactionQuery.md#metadata)
- [objectType](TransactionQuery.TransactionQuery.md#objecttype)
- [pagination](TransactionQuery.TransactionQuery.md#pagination)
- [paymentMethodAddressDumpId](TransactionQuery.TransactionQuery.md#paymentmethodaddressdumpid)
- [paymentMethodAddressId](TransactionQuery.TransactionQuery.md#paymentmethodaddressid)
- [paymentMethodAddressVersion](TransactionQuery.TransactionQuery.md#paymentmethodaddressversion)
- [paymentMethodId](TransactionQuery.TransactionQuery.md#paymentmethodid)
- [paymentMethodUniqueid](TransactionQuery.TransactionQuery.md#paymentmethoduniqueid)
- [shippingAddressDumpId](TransactionQuery.TransactionQuery.md#shippingaddressdumpid)
- [shippingAddressId](TransactionQuery.TransactionQuery.md#shippingaddressid)
- [shippingAddressVersion](TransactionQuery.TransactionQuery.md#shippingaddressversion)
- [taxAmount](TransactionQuery.TransactionQuery.md#taxamount)
- [taxRate](TransactionQuery.TransactionQuery.md#taxrate)
- [transactionCost](TransactionQuery.TransactionQuery.md#transactioncost)
- [transactionStatus](TransactionQuery.TransactionQuery.md#transactionstatus)
- [transactionType](TransactionQuery.TransactionQuery.md#transactiontype)
- [uniqueId](TransactionQuery.TransactionQuery.md#uniqueid)
- [updatedAt](TransactionQuery.TransactionQuery.md#updatedat)
- [version](TransactionQuery.TransactionQuery.md#version)

### Methods

- [serialize](TransactionQuery.TransactionQuery.md#serialize)
- [createQuery](TransactionQuery.TransactionQuery.md#createquery)

## Constructors

### constructor

• **new TransactionQuery**(`tokQ?`): [`TransactionQuery`](TransactionQuery.TransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`ITransactionQuery`](../modules/ITransactionQuery.md#itransactionquery) |

#### Returns

[`TransactionQuery`](TransactionQuery.TransactionQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[TransactionQuery.d.ts:73](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L73)

## Properties

### accountDumpId

• **accountDumpId**: `number`

#### Defined in

[TransactionQuery.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L47)

___

### accountId

• **accountId**: `number`

#### Defined in

[TransactionQuery.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L46)

___

### accountVersion

• **accountVersion**: `number`

#### Defined in

[TransactionQuery.d.ts:53](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L53)

___

### activeStatus

• **activeStatus**: `any`

#### Defined in

[TransactionQuery.d.ts:62](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L62)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

ITransactionQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/BaseQuery.d.ts#L9)

___

### amount

• **amount**: `number`

#### Defined in

[TransactionQuery.d.ts:61](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L61)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Transaction`](Transaction.Transaction.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Transaction`](Transaction.Transaction.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Transaction`](Transaction.Transaction.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/BaseQuery.d.ts#L7)

___

### baseTransaction

• **baseTransaction**: `number`

#### Defined in

[TransactionQuery.d.ts:71](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L71)

___

### cardBrandId

• **cardBrandId**: `string`

#### Defined in

[TransactionQuery.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L43)

___

### conditional

• **conditional**: ``"OR"`` \| ``"AND"``

#### Implementation of

ITransactionQuery.conditional

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[conditional](BaseQuery.BaseQuery.md#conditional)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/BaseQuery.d.ts#L6)

___

### createdAt

• **createdAt**: `Date`

#### Defined in

[TransactionQuery.d.ts:68](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L68)

___

### currency

• **currency**: `string`

#### Implementation of

ITransactionQuery.currency

#### Defined in

[TransactionQuery.d.ts:63](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L63)

___

### direction

• **direction**: `string`

#### Defined in

[TransactionQuery.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L48)

___

### email

• **email**: `string`

#### Defined in

[TransactionQuery.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L42)

___

### hasBackOrderedProducts

• **hasBackOrderedProducts**: `any`

#### Defined in

[TransactionQuery.d.ts:70](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L70)

___

### id

• **id**: `number`

#### Implementation of

ITransactionQuery.id

#### Defined in

[TransactionQuery.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L41)

___

### inventoryOnlyOrder

• **inventoryOnlyOrder**: `any`

#### Implementation of

ITransactionQuery.inventoryOnlyOrder

#### Defined in

[TransactionQuery.d.ts:55](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L55)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/BaseQuery.d.ts#L10)

___

### metadata

• **metadata**: `string`

#### Defined in

[TransactionQuery.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L45)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[TransactionQuery.d.ts:72](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L72)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

ITransactionQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/BaseQuery.d.ts#L8)

___

### paymentMethodAddressDumpId

• **paymentMethodAddressDumpId**: `number`

#### Defined in

[TransactionQuery.d.ts:56](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L56)

___

### paymentMethodAddressId

• **paymentMethodAddressId**: `number`

#### Defined in

[TransactionQuery.d.ts:57](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L57)

___

### paymentMethodAddressVersion

• **paymentMethodAddressVersion**: `number`

#### Defined in

[TransactionQuery.d.ts:54](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L54)

___

### paymentMethodId

• **paymentMethodId**: `number`

#### Defined in

[TransactionQuery.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L49)

___

### paymentMethodUniqueid

• **paymentMethodUniqueid**: `string`

#### Defined in

[TransactionQuery.d.ts:52](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L52)

___

### shippingAddressDumpId

• **shippingAddressDumpId**: `number`

#### Defined in

[TransactionQuery.d.ts:66](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L66)

___

### shippingAddressId

• **shippingAddressId**: `number`

#### Defined in

[TransactionQuery.d.ts:65](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L65)

___

### shippingAddressVersion

• **shippingAddressVersion**: `number`

#### Defined in

[TransactionQuery.d.ts:67](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L67)

___

### taxAmount

• **taxAmount**: `number`

#### Defined in

[TransactionQuery.d.ts:60](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L60)

___

### taxRate

• **taxRate**: `number`

#### Implementation of

ITransactionQuery.taxRate

#### Defined in

[TransactionQuery.d.ts:59](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L59)

___

### transactionCost

• **transactionCost**: `number`

#### Defined in

[TransactionQuery.d.ts:50](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L50)

___

### transactionStatus

• **transactionStatus**: `any`

#### Defined in

[TransactionQuery.d.ts:64](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L64)

___

### transactionType

• **transactionType**: `any`

#### Defined in

[TransactionQuery.d.ts:51](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L51)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

ITransactionQuery.uniqueId

#### Defined in

[TransactionQuery.d.ts:58](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L58)

___

### updatedAt

• **updatedAt**: `Date`

#### Defined in

[TransactionQuery.d.ts:69](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L69)

___

### version

• **version**: `number`

#### Defined in

[TransactionQuery.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L44)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountDumpId` | `number` |
| `accountId` | `number` |
| `accountVersion` | `number` |
| `activeStatus` | `any` |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `amount` | `number` |
| `baseTransaction` | `number` |
| `cardBrandId` | `string` |
| `createdAt` | `Date` |
| `currency` | `string` |
| `direction` | `string` |
| `email` | `string` |
| `hasBackOrderedProducts` | `any` |
| `id` | `number` |
| `inventoryOnlyOrder` | `any` |
| `metadata` | `string` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](PaginationSupport.PaginationSupport.md) |
| `paymentMethodAddressDumpId` | `number` |
| `paymentMethodAddressId` | `number` |
| `paymentMethodAddressVersion` | `number` |
| `paymentMethodId` | `number` |
| `paymentMethodUniqueid` | `string` |
| `shippingAddressDumpId` | `number` |
| `shippingAddressId` | `number` |
| `shippingAddressVersion` | `number` |
| `taxAmount` | `number` |
| `taxRate` | `number` |
| `transactionCost` | `number` |
| `transactionStatus` | `any` |
| `transactionType` | `any` |
| `uniqueId` | `string` |
| `updatedAt` | `Date` |
| `version` | `number` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[TransactionQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`TransactionQuery`](TransactionQuery.TransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`ITransactionQuery`](../modules/ITransactionQuery.md#itransactionquery) |

#### Returns

[`TransactionQuery`](TransactionQuery.TransactionQuery.md)

#### Defined in

[TransactionQuery.d.ts:74](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/a6ae41cec3853b52ad8cc24b4c7051f97f78a6d5/src/types/flux_types/TransactionQuery.d.ts#L74)
