[fluxpayments](../README.md) / [Modules](../modules.md) / [TokenQuery](../modules/TokenQuery.md) / TokenQuery

# Class: TokenQuery

[TokenQuery](../modules/TokenQuery.md).TokenQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Token`](Token.Token.md)\>

  ↳ **`TokenQuery`**

## Table of contents

### Constructors

- [constructor](TokenQuery.TokenQuery.md#constructor)

### Properties

- [additionalSearchOptions](TokenQuery.TokenQuery.md#additionalsearchoptions)
- [attachedObject](TokenQuery.TokenQuery.md#attachedobject)
- [id](TokenQuery.TokenQuery.md#id)
- [lookupPage](TokenQuery.TokenQuery.md#lookuppage)
- [metadata](TokenQuery.TokenQuery.md#metadata)
- [objectType](TokenQuery.TokenQuery.md#objecttype)
- [pagination](TokenQuery.TokenQuery.md#pagination)
- [token](TokenQuery.TokenQuery.md#token)
- [uniqueId](TokenQuery.TokenQuery.md#uniqueid)

### Methods

- [getToken](TokenQuery.TokenQuery.md#gettoken)
- [parseToken](TokenQuery.TokenQuery.md#parsetoken)
- [serialize](TokenQuery.TokenQuery.md#serialize)
- [createQuery](TokenQuery.TokenQuery.md#createquery)

## Constructors

### constructor

• **new TokenQuery**(`tokQ?`): [`TokenQuery`](TokenQuery.TokenQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IToken`](../interfaces/IToken.IToken.md) |

#### Returns

[`TokenQuery`](TokenQuery.TokenQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[TokenQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L22)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Token`](Token.Token.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Token`](Token.Token.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Token`](Token.Token.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[TokenQuery.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L14)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Defined in

[TokenQuery.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L13)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[TokenQuery.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L16)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/BaseQuery.d.ts#L7)

___

### token

• **token**: `string`

#### Defined in

[TokenQuery.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L12)

___

### uniqueId

• `Optional` **uniqueId**: `number`

#### Defined in

[TokenQuery.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L15)

## Methods

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

The token associated with the

#### Defined in

[TokenQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L20)

___

### parseToken

▸ **parseToken**(`tokenString`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenString` | `string` |

#### Returns

`number`

#### Defined in

[TokenQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L21)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `token` | `string` |
| `uniqueId` | `number` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[TokenQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`TokenQuery`](TokenQuery.TokenQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IToken`](../interfaces/IToken.IToken.md) |

#### Returns

[`TokenQuery`](TokenQuery.TokenQuery.md)

#### Defined in

[TokenQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/27b2feeae7bc40678b3662555d9d94a5f4ec75da/src/types/flux_types/TokenQuery.d.ts#L23)
