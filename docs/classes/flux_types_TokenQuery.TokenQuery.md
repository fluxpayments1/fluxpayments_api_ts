[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/TokenQuery](../modules/flux_types_TokenQuery.md) / TokenQuery

# Class: TokenQuery

[flux\_types/TokenQuery](../modules/flux_types_TokenQuery.md).TokenQuery

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`Token`](flux_types_Token.Token.md)\>

  ↳ **`TokenQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_TokenQuery.TokenQuery.md#constructor)

### Properties

- [additionalSearchOptions](flux_types_TokenQuery.TokenQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_TokenQuery.TokenQuery.md#attachedobject)
- [id](flux_types_TokenQuery.TokenQuery.md#id)
- [lookupPage](flux_types_TokenQuery.TokenQuery.md#lookuppage)
- [metadata](flux_types_TokenQuery.TokenQuery.md#metadata)
- [objectType](flux_types_TokenQuery.TokenQuery.md#objecttype)
- [pagination](flux_types_TokenQuery.TokenQuery.md#pagination)
- [token](flux_types_TokenQuery.TokenQuery.md#token)
- [uniqueId](flux_types_TokenQuery.TokenQuery.md#uniqueid)

### Methods

- [getToken](flux_types_TokenQuery.TokenQuery.md#gettoken)
- [parseToken](flux_types_TokenQuery.TokenQuery.md#parsetoken)
- [serialize](flux_types_TokenQuery.TokenQuery.md#serialize)
- [createQuery](flux_types_TokenQuery.TokenQuery.md#createquery)

## Constructors

### constructor

• **new TokenQuery**(`tokQ?`): [`TokenQuery`](flux_types_TokenQuery.TokenQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IToken`](../interfaces/flux_types_IToken.IToken.md) |

#### Returns

[`TokenQuery`](flux_types_TokenQuery.TokenQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L22)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Token`](flux_types_Token.Token.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Token`](flux_types_Token.Token.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Token`](flux_types_Token.Token.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L14)

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

[src/types/flux_types/TokenQuery.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L13)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L16)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### token

• **token**: `string`

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L12)

___

### uniqueId

• `Optional` **uniqueId**: `number`

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L15)

## Methods

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

The token associated with the

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L20)

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

[src/types/flux_types/TokenQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L21)

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

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`TokenQuery`](flux_types_TokenQuery.TokenQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IToken`](../interfaces/flux_types_IToken.IToken.md) |

#### Returns

[`TokenQuery`](flux_types_TokenQuery.TokenQuery.md)

#### Defined in

[src/types/flux_types/TokenQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/TokenQuery.d.ts#L23)
