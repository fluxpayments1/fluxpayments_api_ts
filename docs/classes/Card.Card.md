[fluxpayments](../README.md) / [Modules](../modules.md) / [Card](../modules/Card.md) / Card

# Class: Card

[Card](../modules/Card.md).Card

## Hierarchy

- [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

  ↳ **`Card`**

## Implements

- [`ICard`](../interfaces/ICard.ICard.md)

## Table of contents

### Constructors

- [constructor](Card.Card.md#constructor)

### Properties

- [accountSession](Card.Card.md#accountsession)
- [activeStatus](Card.Card.md#activestatus)
- [address](Card.Card.md#address)
- [addressId](Card.Card.md#addressid)
- [cardNumber](Card.Card.md#cardnumber)
- [cvv](Card.Card.md#cvv)
- [dataTableMetadata](Card.Card.md#datatablemetadata)
- [email](Card.Card.md#email)
- [expMonth](Card.Card.md#expmonth)
- [expYear](Card.Card.md#expyear)
- [firstName](Card.Card.md#firstname)
- [id](Card.Card.md#id)
- [lastFour](Card.Card.md#lastfour)
- [lastName](Card.Card.md#lastname)
- [metadata](Card.Card.md#metadata)
- [obName](Card.Card.md#obname)
- [obType](Card.Card.md#obtype)
- [objectType](Card.Card.md#objecttype)
- [objecttype](Card.Card.md#objecttype-1)
- [payType](Card.Card.md#paytype)
- [token](Card.Card.md#token)
- [uniqueId](Card.Card.md#uniqueid)
- [version](Card.Card.md#version)

### Methods

- [delete](Card.Card.md#delete)
- [getId](Card.Card.md#getid)
- [getObjectType](Card.Card.md#getobjecttype)
- [merge](Card.Card.md#merge)
- [persist](Card.Card.md#persist)
- [refresh](Card.Card.md#refresh)
- [serialize](Card.Card.md#serialize)
- [setId](Card.Card.md#setid)
- [createInstanceLazy](Card.Card.md#createinstancelazy)
- [createInstanceSafe](Card.Card.md#createinstancesafe)
- [createInstanceSafeDbCall](Card.Card.md#createinstancesafedbcall)
- [createObjects](Card.Card.md#createobjects)
- [createObjectsSafe](Card.Card.md#createobjectssafe)
- [deleteObjects](Card.Card.md#deleteobjects)
- [generateStatelessSession](Card.Card.md#generatestatelesssession)
- [getBackendConn](Card.Card.md#getbackendconn)
- [getLinkedObjectsById](Card.Card.md#getlinkedobjectsbyid)
- [getObjectsById](Card.Card.md#getobjectsbyid)
- [getObjectsByIdInternal](Card.Card.md#getobjectsbyidinternal)
- [instantiateInstance](Card.Card.md#instantiateinstance)
- [instantiateLazyInstance](Card.Card.md#instantiatelazyinstance)
- [queryObjects](Card.Card.md#queryobjects)
- [updateObjects](Card.Card.md#updateobjects)

## Constructors

### constructor

• **new Card**(`c`): [`Card`](Card.Card.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Partial`\<[`ICard`](../interfaces/ICard.ICard.md)\> |

#### Returns

[`Card`](Card.Card.md)

#### Overrides

[PaymentMethod](PaymentMethod.PaymentMethod.md).[constructor](PaymentMethod.PaymentMethod.md#constructor)

#### Defined in

[Card.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L8)

## Properties

### accountSession

• **accountSession**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[accountSession](../interfaces/ICard.ICard.md#accountsession)

#### Overrides

[PaymentMethod](PaymentMethod.PaymentMethod.md).[accountSession](PaymentMethod.PaymentMethod.md#accountsession)

#### Defined in

[Card.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L9)

___

### activeStatus

• **activeStatus**: `any`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[activeStatus](PaymentMethod.PaymentMethod.md#activestatus)

#### Defined in

[PaymentMethod.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L25)

___

### address

• **address**: [`Address`](Address.Address.md)

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[address](../interfaces/ICard.ICard.md#address)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[address](PaymentMethod.PaymentMethod.md#address)

#### Defined in

[PaymentMethod.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L21)

___

### addressId

• **addressId**: `number`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[addressId](../interfaces/ICard.ICard.md#addressid)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[addressId](PaymentMethod.PaymentMethod.md#addressid)

#### Defined in

[PaymentMethod.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L30)

___

### cardNumber

• **cardNumber**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[cardNumber](../interfaces/ICard.ICard.md#cardnumber)

#### Defined in

[Card.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L13)

___

### cvv

• **cvv**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[cvv](../interfaces/ICard.ICard.md#cvv)

#### Defined in

[Card.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L14)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[dataTableMetadata](PaymentMethod.PaymentMethod.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L6)

___

### email

• **email**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[email](PaymentMethod.PaymentMethod.md#email)

#### Defined in

[PaymentMethod.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L28)

___

### expMonth

• **expMonth**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[expMonth](../interfaces/ICard.ICard.md#expmonth)

#### Defined in

[Card.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L11)

___

### expYear

• **expYear**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[expYear](../interfaces/ICard.ICard.md#expyear)

#### Defined in

[Card.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L12)

___

### firstName

• **firstName**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[firstName](../interfaces/ICard.ICard.md#firstname)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[firstName](PaymentMethod.PaymentMethod.md#firstname)

#### Defined in

[PaymentMethod.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L31)

___

### id

• **id**: `number`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[id](../interfaces/ICard.ICard.md#id)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[id](PaymentMethod.PaymentMethod.md#id)

#### Defined in

[PaymentMethod.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L22)

___

### lastFour

• `Optional` **lastFour**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[lastFour](../interfaces/ICard.ICard.md#lastfour)

#### Defined in

[Card.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L10)

___

### lastName

• **lastName**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[lastName](../interfaces/ICard.ICard.md#lastname)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[lastName](PaymentMethod.PaymentMethod.md#lastname)

#### Defined in

[PaymentMethod.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L32)

___

### metadata

• **metadata**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[metadata](../interfaces/ICard.ICard.md#metadata)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[metadata](PaymentMethod.PaymentMethod.md#metadata)

#### Defined in

[PaymentMethod.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L24)

___

### obName

• **obName**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[obName](PaymentMethod.PaymentMethod.md#obname)

#### Defined in

[PaymentMethod.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L9)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[obType](PaymentMethod.PaymentMethod.md#obtype)

#### Defined in

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[objectType](PaymentMethod.PaymentMethod.md#objecttype)

#### Defined in

[PaymentMethod.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L38)

___

### objecttype

• **objecttype**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[objecttype](PaymentMethod.PaymentMethod.md#objecttype-1)

#### Defined in

[PaymentMethod.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L33)

___

### payType

• **payType**: `any`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[payType](../interfaces/ICard.ICard.md#paytype)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[payType](PaymentMethod.PaymentMethod.md#paytype)

#### Defined in

[PaymentMethod.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L29)

___

### token

• **token**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[token](PaymentMethod.PaymentMethod.md#token)

#### Defined in

[PaymentMethod.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L26)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[ICard](../interfaces/ICard.ICard.md).[uniqueId](../interfaces/ICard.ICard.md#uniqueid)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[uniqueId](PaymentMethod.PaymentMethod.md#uniqueid)

#### Defined in

[PaymentMethod.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L23)

___

### version

• **version**: `number`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[version](PaymentMethod.PaymentMethod.md#version)

#### Defined in

[PaymentMethod.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L27)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[delete](PaymentMethod.PaymentMethod.md#delete)

#### Defined in

[PaymentMethod.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L43)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getId](PaymentMethod.PaymentMethod.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getObjectType](PaymentMethod.PaymentMethod.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[merge](PaymentMethod.PaymentMethod.md#merge)

#### Defined in

[PaymentMethod.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L44)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[persist](PaymentMethod.PaymentMethod.md#persist)

#### Defined in

[PaymentMethod.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L45)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[refresh](PaymentMethod.PaymentMethod.md#refresh)

#### Defined in

[PaymentMethod.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L46)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](Address.Address.md) |
| `aesNonce` | `any` |
| `encAesKey` | `any` |
| `encSensitiveData` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `payType` | `any` |
| `uniqueId` | `string` |

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[serialize](PaymentMethod.PaymentMethod.md#serialize)

#### Defined in

[PaymentMethod.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L10)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[setId](PaymentMethod.PaymentMethod.md#setid)

#### Defined in

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Card`](Card.Card.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`ICard`](../interfaces/ICard.ICard.md)\> |

#### Returns

`Promise`\<[`Card`](Card.Card.md)\>

#### Defined in

[Card.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L15)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

Will not create a card if working outside of the browser,
will just load the card if it exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`ICard`](../interfaces/ICard.ICard.md)\> |

#### Returns

`Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

#### Defined in

[Card.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L24)

___

### createInstanceSafeDbCall

▸ **createInstanceSafeDbCall**(`inst`, `pt`): `Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inst` | [`PaymentMethod`](PaymentMethod.PaymentMethod.md) |
| `pt` | `any` |

#### Returns

`Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[createInstanceSafeDbCall](PaymentMethod.PaymentMethod.md#createinstancesafedbcall)

#### Defined in

[PaymentMethod.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L39)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[createObjects](PaymentMethod.PaymentMethod.md#createobjects)

#### Defined in

[PaymentMethod.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L42)

___

### createObjectsSafe

▸ **createObjectsSafe**\<`T`\>(`ob`, `secHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[createObjectsSafe](PaymentMethod.PaymentMethod.md#createobjectssafe)

#### Defined in

[PaymentMethod.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L49)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`, `cfs?`, `accountSession?`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |
| `accountSession?` | `string` |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[deleteObjects](PaymentMethod.PaymentMethod.md#deleteobjects)

#### Defined in

[PaymentMethod.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L48)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[generateStatelessSession](PaymentMethod.PaymentMethod.md#generatestatelesssession)

#### Defined in

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getBackendConn](PaymentMethod.PaymentMethod.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L18)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getLinkedObjectsById](PaymentMethod.PaymentMethod.md#getlinkedobjectsbyid)

#### Defined in

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L38)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getObjectsById](PaymentMethod.PaymentMethod.md#getobjectsbyid)

#### Defined in

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L37)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getObjectsByIdInternal](PaymentMethod.PaymentMethod.md#getobjectsbyidinternal)

#### Defined in

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L36)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[instantiateInstance](PaymentMethod.PaymentMethod.md#instantiateinstance)

#### Defined in

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L17)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[instantiateLazyInstance](PaymentMethod.PaymentMethod.md#instantiatelazyinstance)

#### Defined in

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/FluxType.d.ts#L16)

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

#### Overrides

[PaymentMethod](PaymentMethod.PaymentMethod.md).[queryObjects](PaymentMethod.PaymentMethod.md#queryobjects)

#### Defined in

[Card.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/Card.d.ts#L25)

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

[PaymentMethod](PaymentMethod.PaymentMethod.md).[updateObjects](PaymentMethod.PaymentMethod.md#updateobjects)

#### Defined in

[PaymentMethod.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/4dc7a34cf10d0920c69ffb59b45306f855a1a6d5/src/types/flux_types/PaymentMethod.d.ts#L41)
