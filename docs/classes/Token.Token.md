[fluxpayments](../README.md) / [Modules](../modules.md) / [Token](../modules/Token.md) / Token

# Class: Token

[Token](../modules/Token.md).Token

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`Token`**

## Implements

- [`IToken`](../interfaces/IToken.IToken.md)

## Table of contents

### Constructors

- [constructor](Token.Token.md#constructor)

### Properties

- [currency](Token.Token.md#currency)
- [dataTableMetadata](Token.Token.md#datatablemetadata)
- [id](Token.Token.md#id)
- [metadata](Token.Token.md#metadata)
- [obName](Token.Token.md#obname)
- [obType](Token.Token.md#obtype)
- [objectType](Token.Token.md#objecttype)
- [payload](Token.Token.md#payload)
- [token](Token.Token.md#token)
- [uniqueId](Token.Token.md#uniqueid)

### Methods

- [delete](Token.Token.md#delete)
- [getDecryptedPayload](Token.Token.md#getdecryptedpayload)
- [getId](Token.Token.md#getid)
- [getObjectType](Token.Token.md#getobjecttype)
- [getToken](Token.Token.md#gettoken)
- [merge](Token.Token.md#merge)
- [parseToken](Token.Token.md#parsetoken)
- [persist](Token.Token.md#persist)
- [refresh](Token.Token.md#refresh)
- [serialize](Token.Token.md#serialize)
- [setDecryptedPayload](Token.Token.md#setdecryptedpayload)
- [setId](Token.Token.md#setid)
- [createInstanceLazy](Token.Token.md#createinstancelazy)
- [createInstanceSafe](Token.Token.md#createinstancesafe)
- [createObjects](Token.Token.md#createobjects)
- [createObjectsSafe](Token.Token.md#createobjectssafe)
- [deleteObjects](Token.Token.md#deleteobjects)
- [generateStatelessSession](Token.Token.md#generatestatelesssession)
- [getBackendConn](Token.Token.md#getbackendconn)
- [getLinkedObjectsById](Token.Token.md#getlinkedobjectsbyid)
- [getObjectsById](Token.Token.md#getobjectsbyid)
- [getObjectsByIdInternal](Token.Token.md#getobjectsbyidinternal)
- [instantiateInstance](Token.Token.md#instantiateinstance)
- [instantiateLazyInstance](Token.Token.md#instantiatelazyinstance)
- [queryObjects](Token.Token.md#queryobjects)
- [updateObjects](Token.Token.md#updateobjects)

## Constructors

### constructor

• **new Token**(`token?`): [`Token`](Token.Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `Partial`\<[`IToken`](../interfaces/IToken.IToken.md)\> |

#### Returns

[`Token`](Token.Token.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[Token.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L33)

## Properties

### currency

• **currency**: `string`

#### Defined in

[Token.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L14)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

[IToken](../interfaces/IToken.IToken.md).[id](../interfaces/IToken.IToken.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[Token.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L15)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IToken](../interfaces/IToken.IToken.md).[metadata](../interfaces/IToken.IToken.md#metadata)

#### Defined in

[Token.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L17)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[Token.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L4)

___

### obType

• **obType**: (`o?`: `any`) => `this`

#### Type declaration

• **new obType**(`o?`): `this`

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

`this`

#### Inherited from

[FluxType](FluxType.FluxType.md).[obType](FluxType.FluxType.md#obtype)

#### Defined in

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[Token.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L18)

___

### payload

• **payload**: `string`

#### Implementation of

[IToken](../interfaces/IToken.IToken.md).[payload](../interfaces/IToken.IToken.md#payload)

#### Defined in

[Token.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L12)

___

### token

• **token**: `string`

#### Implementation of

[IToken](../interfaces/IToken.IToken.md).[token](../interfaces/IToken.IToken.md#token)

#### Defined in

[Token.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L13)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IToken](../interfaces/IToken.IToken.md).[uniqueId](../interfaces/IToken.IToken.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[Token.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L16)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L20)

___

### getDecryptedPayload

▸ **getDecryptedPayload**(): `string`

Get the decrypted payload

#### Returns

`string`

The encrypted payload, be careful with this
It return the raw decrypted payload.

#### Defined in

[Token.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L26)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L11)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

The token associated with the

#### Defined in

[Token.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L31)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L21)

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

[Token.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L32)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L35)

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
| `payload` | `string` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[Token.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L5)

___

### setDecryptedPayload

▸ **setDecryptedPayload**(`payload`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Token.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L27)

___

### setId

▸ **setId**(`fi`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) |

#### Returns

`void`

#### Inherited from

[FluxType](FluxType.FluxType.md).[setId](FluxType.FluxType.md#setid)

#### Defined in

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Token`](Token.Token.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IToken`](../interfaces/IToken.IToken.md)\> |

#### Returns

`Promise`\<[`Token`](Token.Token.md)\>

#### Defined in

[Token.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L34)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`Token`](Token.Token.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IToken`](../interfaces/IToken.IToken.md)\> |

#### Returns

`Promise`\<[`Token`](Token.Token.md)\>

#### Defined in

[Token.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/Token.d.ts#L35)

___

### createObjects

▸ **createObjects**\<`T`\>(`ob`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjects](FluxType.FluxType.md#createobjects)

#### Defined in

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L42)

___

### createObjectsSafe

▸ **createObjectsSafe**\<`T`\>(`ob`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjectsSafe](FluxType.FluxType.md#createobjectssafe)

#### Defined in

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L43)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[deleteObjects](FluxType.FluxType.md#deleteobjects)

#### Defined in

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L40)

___

### generateStatelessSession

▸ **generateStatelessSession**(): `Promise`\<`any`\>

Used for account free or stateless payments.
Creating a payment method with a stateless
token will store the payment method in our
system and return a token. You can then pass
this token for one time use into a transaction
object.

#### Returns

`Promise`\<`any`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[generateStatelessSession](FluxType.FluxType.md#generatestatelesssession)

#### Defined in

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L18)

___

### getLinkedObjectsById

▸ **getLinkedObjectsById**\<`T`, `U`\>(`this`, `returnType`, `fi`): `Promise`\<`U`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `returnType` | (`o?`: `any`) => `U` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<`U`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getLinkedObjectsById](FluxType.FluxType.md#getlinkedobjectsbyid)

#### Defined in

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L38)

___

### getObjectsById

▸ **getObjectsById**\<`T`\>(`this`, `fi`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectsById](FluxType.FluxType.md#getobjectsbyid)

#### Defined in

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L37)

___

### getObjectsByIdInternal

▸ **getObjectsByIdInternal**\<`T`\>(`fi`, `obType`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | (`o?`: `any`) => `T` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectsByIdInternal](FluxType.FluxType.md#getobjectsbyidinternal)

#### Defined in

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L36)

___

### instantiateInstance

▸ **instantiateInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[instantiateInstance](FluxType.FluxType.md#instantiateinstance)

#### Defined in

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L17)

___

### instantiateLazyInstance

▸ **instantiateLazyInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[instantiateLazyInstance](FluxType.FluxType.md#instantiatelazyinstance)

#### Defined in

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L16)

___

### queryObjects

▸ **queryObjects**\<`T`, `U`\>(`q`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[queryObjects](FluxType.FluxType.md#queryobjects)

#### Defined in

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L39)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[updateObjects](FluxType.FluxType.md#updateobjects)

#### Defined in

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L41)
