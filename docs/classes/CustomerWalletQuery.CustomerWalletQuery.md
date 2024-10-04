[fluxpayments](../README.md) / [Modules](../modules.md) / [CustomerWalletQuery](../modules/CustomerWalletQuery.md) / CustomerWalletQuery

# Class: CustomerWalletQuery

[CustomerWalletQuery](../modules/CustomerWalletQuery.md).CustomerWalletQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`CustomerWallet`](CustomerWallet.CustomerWallet.md)\>

  ↳ **`CustomerWalletQuery`**

## Implements

- [`ICustomerWalletQuery`](../modules/ICustomerWalletQuery.md#icustomerwalletquery)

## Table of contents

### Constructors

- [constructor](CustomerWalletQuery.CustomerWalletQuery.md#constructor)

### Properties

- [additionalSearchOptions](CustomerWalletQuery.CustomerWalletQuery.md#additionalsearchoptions)
- [attachedObject](CustomerWalletQuery.CustomerWalletQuery.md#attachedobject)
- [chain](CustomerWalletQuery.CustomerWalletQuery.md#chain)
- [conditional](CustomerWalletQuery.CustomerWalletQuery.md#conditional)
- [createdAt](CustomerWalletQuery.CustomerWalletQuery.md#createdat)
- [id](CustomerWalletQuery.CustomerWalletQuery.md#id)
- [lookupPage](CustomerWalletQuery.CustomerWalletQuery.md#lookuppage)
- [metadata](CustomerWalletQuery.CustomerWalletQuery.md#metadata)
- [objectType](CustomerWalletQuery.CustomerWalletQuery.md#objecttype)
- [pagination](CustomerWalletQuery.CustomerWalletQuery.md#pagination)
- [publicAddress](CustomerWalletQuery.CustomerWalletQuery.md#publicaddress)
- [uniqueId](CustomerWalletQuery.CustomerWalletQuery.md#uniqueid)

### Methods

- [serialize](CustomerWalletQuery.CustomerWalletQuery.md#serialize)
- [createQuery](CustomerWalletQuery.CustomerWalletQuery.md#createquery)

## Constructors

### constructor

• **new CustomerWalletQuery**(`tokQ?`): [`CustomerWalletQuery`](CustomerWalletQuery.CustomerWalletQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`ICustomerWallet`](../interfaces/ICustomerWallet.ICustomerWallet.md) |

#### Returns

[`CustomerWalletQuery`](CustomerWalletQuery.CustomerWalletQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[CustomerWalletQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L20)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

ICustomerWalletQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L10)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`CustomerWallet`](CustomerWallet.CustomerWallet.md)

#### Type declaration

• **new attachedObject**(`o?`): [`CustomerWallet`](CustomerWallet.CustomerWallet.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`CustomerWallet`](CustomerWallet.CustomerWallet.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L7)

___

### chain

• **chain**: `string`

#### Implementation of

ICustomerWalletQuery.chain

#### Defined in

[CustomerWalletQuery.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L14)

___

### conditional

• **conditional**: ``"OR"`` \| ``"AND"``

#### Implementation of

ICustomerWalletQuery.conditional

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

ICustomerWalletQuery.id

#### Defined in

[CustomerWalletQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L17)

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

ICustomerWalletQuery.metadata

#### Defined in

[CustomerWalletQuery.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L16)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[CustomerWalletQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L19)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

ICustomerWalletQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L9)

___

### publicAddress

• **publicAddress**: `any`

#### Defined in

[CustomerWalletQuery.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L15)

___

### uniqueId

• `Optional` **uniqueId**: `string`

#### Implementation of

ICustomerWalletQuery.uniqueId

#### Defined in

[CustomerWalletQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L18)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chain` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `publicAddress` | `any` |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[CustomerWalletQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L6)

___

### createQuery

▸ **createQuery**(`ipq`): [`CustomerWalletQuery`](CustomerWalletQuery.CustomerWalletQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`ICustomerWallet`](../interfaces/ICustomerWallet.ICustomerWallet.md) |

#### Returns

[`CustomerWalletQuery`](CustomerWalletQuery.CustomerWalletQuery.md)

#### Defined in

[CustomerWalletQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CustomerWalletQuery.d.ts#L21)
