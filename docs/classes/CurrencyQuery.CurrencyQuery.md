[fluxpayments](../README.md) / [Modules](../modules.md) / [CurrencyQuery](../modules/CurrencyQuery.md) / CurrencyQuery

# Class: CurrencyQuery

[CurrencyQuery](../modules/CurrencyQuery.md).CurrencyQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Currency`](Currency.Currency.md)\>

  ↳ **`CurrencyQuery`**

## Implements

- [`ICurrencyQuery`](../modules/ICurrencyQuery.md#icurrencyquery)

## Table of contents

### Constructors

- [constructor](CurrencyQuery.CurrencyQuery.md#constructor)

### Properties

- [additionalSearchOptions](CurrencyQuery.CurrencyQuery.md#additionalsearchoptions)
- [attachedObject](CurrencyQuery.CurrencyQuery.md#attachedobject)
- [chain](CurrencyQuery.CurrencyQuery.md#chain)
- [conditional](CurrencyQuery.CurrencyQuery.md#conditional)
- [createdAt](CurrencyQuery.CurrencyQuery.md#createdat)
- [id](CurrencyQuery.CurrencyQuery.md#id)
- [lookupPage](CurrencyQuery.CurrencyQuery.md#lookuppage)
- [metadata](CurrencyQuery.CurrencyQuery.md#metadata)
- [mintAddress](CurrencyQuery.CurrencyQuery.md#mintaddress)
- [objectType](CurrencyQuery.CurrencyQuery.md#objecttype)
- [pagination](CurrencyQuery.CurrencyQuery.md#pagination)
- [shortName](CurrencyQuery.CurrencyQuery.md#shortname)
- [uniqueId](CurrencyQuery.CurrencyQuery.md#uniqueid)

### Methods

- [serialize](CurrencyQuery.CurrencyQuery.md#serialize)
- [createQuery](CurrencyQuery.CurrencyQuery.md#createquery)

## Constructors

### constructor

• **new CurrencyQuery**(`tokQ?`): [`CurrencyQuery`](CurrencyQuery.CurrencyQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`ICurrency`](../interfaces/ICurrency.ICurrency.md) |

#### Returns

[`CurrencyQuery`](CurrencyQuery.CurrencyQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[CurrencyQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L22)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

ICurrencyQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L10)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Currency`](Currency.Currency.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Currency`](Currency.Currency.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Currency`](Currency.Currency.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L7)

___

### chain

• **chain**: `string`

#### Implementation of

ICurrencyQuery.chain

#### Defined in

[CurrencyQuery.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L15)

___

### conditional

• **conditional**: ``"OR"`` \| ``"AND"``

#### Implementation of

ICurrencyQuery.conditional

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

ICurrencyQuery.id

#### Defined in

[CurrencyQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L18)

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

ICurrencyQuery.metadata

#### Defined in

[CurrencyQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L20)

___

### mintAddress

• **mintAddress**: `string`

#### Implementation of

ICurrencyQuery.mintAddress

#### Defined in

[CurrencyQuery.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L16)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[CurrencyQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L21)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

ICurrencyQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L9)

___

### shortName

• **shortName**: `string`

#### Implementation of

ICurrencyQuery.shortName

#### Defined in

[CurrencyQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L17)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

ICurrencyQuery.uniqueId

#### Defined in

[CurrencyQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L19)

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
| `mintAddress` | `string` |
| `objectType` | `string` |
| `shortName` | `string` |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[CurrencyQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L6)

___

### createQuery

▸ **createQuery**(`ipq`): [`CurrencyQuery`](CurrencyQuery.CurrencyQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`ICurrency`](../interfaces/ICurrency.ICurrency.md) |

#### Returns

[`CurrencyQuery`](CurrencyQuery.CurrencyQuery.md)

#### Defined in

[CurrencyQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/CurrencyQuery.d.ts#L23)
