[fluxpayments](../README.md) / [Modules](../modules.md) / [WalletQuery](../modules/WalletQuery.md) / WalletQuery

# Class: WalletQuery

[WalletQuery](../modules/WalletQuery.md).WalletQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Wallet`](Wallet.Wallet.md)\>

  ↳ **`WalletQuery`**

## Implements

- [`IWalletQuery`](../modules/IWalletQuery.md#iwalletquery)

## Table of contents

### Constructors

- [constructor](WalletQuery.WalletQuery.md#constructor)

### Properties

- [active](WalletQuery.WalletQuery.md#active)
- [additionalSearchOptions](WalletQuery.WalletQuery.md#additionalsearchoptions)
- [attachedObject](WalletQuery.WalletQuery.md#attachedobject)
- [chain](WalletQuery.WalletQuery.md#chain)
- [conditional](WalletQuery.WalletQuery.md#conditional)
- [createdAt](WalletQuery.WalletQuery.md#createdat)
- [id](WalletQuery.WalletQuery.md#id)
- [lookupPage](WalletQuery.WalletQuery.md#lookuppage)
- [metadata](WalletQuery.WalletQuery.md#metadata)
- [objectType](WalletQuery.WalletQuery.md#objecttype)
- [pagination](WalletQuery.WalletQuery.md#pagination)
- [publicAddress](WalletQuery.WalletQuery.md#publicaddress)
- [uniqueId](WalletQuery.WalletQuery.md#uniqueid)

### Methods

- [serialize](WalletQuery.WalletQuery.md#serialize)
- [createQuery](WalletQuery.WalletQuery.md#createquery)

## Constructors

### constructor

• **new WalletQuery**(`tokQ?`): [`WalletQuery`](WalletQuery.WalletQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IWallet`](../interfaces/IWallet.IWallet.md) |

#### Returns

[`WalletQuery`](WalletQuery.WalletQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[WalletQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L22)

## Properties

### active

• **active**: `boolean`

#### Implementation of

IWalletQuery.active

#### Defined in

[WalletQuery.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L15)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IWalletQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L10)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Wallet`](Wallet.Wallet.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Wallet`](Wallet.Wallet.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Wallet`](Wallet.Wallet.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L7)

___

### chain

• **chain**: `string`

#### Implementation of

IWalletQuery.chain

#### Defined in

[WalletQuery.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L16)

___

### conditional

• **conditional**: ``"OR"`` \| ``"AND"``

#### Implementation of

IWalletQuery.conditional

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

IWalletQuery.id

#### Defined in

[WalletQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L19)

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

IWalletQuery.metadata

#### Defined in

[WalletQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L18)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[WalletQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L21)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IWalletQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L9)

___

### publicAddress

• **publicAddress**: `any`

#### Defined in

[WalletQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L17)

___

### uniqueId

• `Optional` **uniqueId**: `string`

#### Implementation of

IWalletQuery.uniqueId

#### Defined in

[WalletQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L20)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `chain` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `publicAddress` | `any` |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[WalletQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L6)

___

### createQuery

▸ **createQuery**(`ipq`): [`WalletQuery`](WalletQuery.WalletQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IWallet`](../interfaces/IWallet.IWallet.md) |

#### Returns

[`WalletQuery`](WalletQuery.WalletQuery.md)

#### Defined in

[WalletQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/WalletQuery.d.ts#L23)
