[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/TransactionQuery](../modules/flux_types_TransactionQuery.md) / TransactionQuery

# Class: TransactionQuery

[flux\_types/TransactionQuery](../modules/flux_types_TransactionQuery.md).TransactionQuery

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`Transaction`](flux_types_Transaction.Transaction.md)\>

  ↳ **`TransactionQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_TransactionQuery.TransactionQuery.md#constructor)

### Properties

- [accountDumpId](flux_types_TransactionQuery.TransactionQuery.md#accountdumpid)
- [accountId](flux_types_TransactionQuery.TransactionQuery.md#accountid)
- [accountVersion](flux_types_TransactionQuery.TransactionQuery.md#accountversion)
- [activeStatus](flux_types_TransactionQuery.TransactionQuery.md#activestatus)
- [additionalSearchOptions](flux_types_TransactionQuery.TransactionQuery.md#additionalsearchoptions)
- [amount](flux_types_TransactionQuery.TransactionQuery.md#amount)
- [attachedObject](flux_types_TransactionQuery.TransactionQuery.md#attachedobject)
- [baseTransaction](flux_types_TransactionQuery.TransactionQuery.md#basetransaction)
- [cardBrandId](flux_types_TransactionQuery.TransactionQuery.md#cardbrandid)
- [createdAt](flux_types_TransactionQuery.TransactionQuery.md#createdat)
- [currency](flux_types_TransactionQuery.TransactionQuery.md#currency)
- [direction](flux_types_TransactionQuery.TransactionQuery.md#direction)
- [email](flux_types_TransactionQuery.TransactionQuery.md#email)
- [hasBackOrderedProducts](flux_types_TransactionQuery.TransactionQuery.md#hasbackorderedproducts)
- [id](flux_types_TransactionQuery.TransactionQuery.md#id)
- [inventoryOnlyOrder](flux_types_TransactionQuery.TransactionQuery.md#inventoryonlyorder)
- [lookupPage](flux_types_TransactionQuery.TransactionQuery.md#lookuppage)
- [metadata](flux_types_TransactionQuery.TransactionQuery.md#metadata)
- [objectType](flux_types_TransactionQuery.TransactionQuery.md#objecttype)
- [pagination](flux_types_TransactionQuery.TransactionQuery.md#pagination)
- [paymentMethodAddressDumpId](flux_types_TransactionQuery.TransactionQuery.md#paymentmethodaddressdumpid)
- [paymentMethodAddressId](flux_types_TransactionQuery.TransactionQuery.md#paymentmethodaddressid)
- [paymentMethodAddressVersion](flux_types_TransactionQuery.TransactionQuery.md#paymentmethodaddressversion)
- [paymentMethodId](flux_types_TransactionQuery.TransactionQuery.md#paymentmethodid)
- [paymentMethodUniqueid](flux_types_TransactionQuery.TransactionQuery.md#paymentmethoduniqueid)
- [shippingAddressDumpId](flux_types_TransactionQuery.TransactionQuery.md#shippingaddressdumpid)
- [shippingAddressId](flux_types_TransactionQuery.TransactionQuery.md#shippingaddressid)
- [shippingAddressVersion](flux_types_TransactionQuery.TransactionQuery.md#shippingaddressversion)
- [taxAmount](flux_types_TransactionQuery.TransactionQuery.md#taxamount)
- [taxRate](flux_types_TransactionQuery.TransactionQuery.md#taxrate)
- [transactionCost](flux_types_TransactionQuery.TransactionQuery.md#transactioncost)
- [transactionStatus](flux_types_TransactionQuery.TransactionQuery.md#transactionstatus)
- [transactionType](flux_types_TransactionQuery.TransactionQuery.md#transactiontype)
- [uniqueid](flux_types_TransactionQuery.TransactionQuery.md#uniqueid)
- [updatedAt](flux_types_TransactionQuery.TransactionQuery.md#updatedat)
- [version](flux_types_TransactionQuery.TransactionQuery.md#version)

### Methods

- [serialize](flux_types_TransactionQuery.TransactionQuery.md#serialize)
- [createQuery](flux_types_TransactionQuery.TransactionQuery.md#createquery)

## Constructors

### constructor

• **new TransactionQuery**(`tokQ?`): [`TransactionQuery`](flux_types_TransactionQuery.TransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`ITransactionQuery`](../modules/flux_types_ITransactionQuery.md#itransactionquery) |

#### Returns

[`TransactionQuery`](flux_types_TransactionQuery.TransactionQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:71](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L71)

## Properties

### accountDumpId

• **accountDumpId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L45)

___

### accountId

• **accountId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L44)

___

### accountVersion

• **accountVersion**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:51](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L51)

___

### activeStatus

• **activeStatus**: `any`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:60](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L60)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### amount

• **amount**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:59](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L59)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Transaction`](flux_types_Transaction.Transaction.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Transaction`](flux_types_Transaction.Transaction.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Transaction`](flux_types_Transaction.Transaction.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### baseTransaction

• **baseTransaction**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:69](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L69)

___

### cardBrandId

• **cardBrandId**: `string`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L41)

___

### createdAt

• **createdAt**: `Date`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:66](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L66)

___

### currency

• **currency**: `string`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:61](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L61)

___

### direction

• **direction**: `string`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L46)

___

### email

• **email**: `string`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L40)

___

### hasBackOrderedProducts

• **hasBackOrderedProducts**: `any`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:68](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L68)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L39)

___

### inventoryOnlyOrder

• **inventoryOnlyOrder**: `any`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:53](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L53)

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

[src/types/flux_types/TransactionQuery.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L43)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:70](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L70)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### paymentMethodAddressDumpId

• **paymentMethodAddressDumpId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:54](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L54)

___

### paymentMethodAddressId

• **paymentMethodAddressId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:55](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L55)

___

### paymentMethodAddressVersion

• **paymentMethodAddressVersion**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:52](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L52)

___

### paymentMethodId

• **paymentMethodId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L47)

___

### paymentMethodUniqueid

• **paymentMethodUniqueid**: `string`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:50](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L50)

___

### shippingAddressDumpId

• **shippingAddressDumpId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:64](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L64)

___

### shippingAddressId

• **shippingAddressId**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:63](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L63)

___

### shippingAddressVersion

• **shippingAddressVersion**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:65](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L65)

___

### taxAmount

• **taxAmount**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:58](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L58)

___

### taxRate

• **taxRate**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:57](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L57)

___

### transactionCost

• **transactionCost**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L48)

___

### transactionStatus

• **transactionStatus**: `any`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:62](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L62)

___

### transactionType

• **transactionType**: `any`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L49)

___

### uniqueid

• **uniqueid**: `string`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:56](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L56)

___

### updatedAt

• **updatedAt**: `Date`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:67](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L67)

___

### version

• **version**: `number`

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L42)

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
| `uniqueid` | `string` |
| `updatedAt` | `Date` |
| `version` | `number` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`TransactionQuery`](flux_types_TransactionQuery.TransactionQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`ITransactionQuery`](../modules/flux_types_ITransactionQuery.md#itransactionquery) |

#### Returns

[`TransactionQuery`](flux_types_TransactionQuery.TransactionQuery.md)

#### Defined in

[src/types/flux_types/TransactionQuery.d.ts:72](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TransactionQuery.d.ts#L72)
