[fluxpayments](../README.md) / [Modules](../modules.md) / [PaymentMethod](../modules/PaymentMethod.md) / PaymentMethod

# Class: PaymentMethod

[PaymentMethod](../modules/PaymentMethod.md).PaymentMethod

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`PaymentMethod`**

  ↳↳ [`Card`](Card.Card.md)

## Implements

- [`IPaymentMethod`](../modules/IPaymentMethod.md#ipaymentmethod)

## Table of contents

### Constructors

- [constructor](PaymentMethod.PaymentMethod.md#constructor)

### Properties

- [accountSession](PaymentMethod.PaymentMethod.md#accountsession)
- [activeStatus](PaymentMethod.PaymentMethod.md#activestatus)
- [address](PaymentMethod.PaymentMethod.md#address)
- [addressId](PaymentMethod.PaymentMethod.md#addressid)
- [dataTableMetadata](PaymentMethod.PaymentMethod.md#datatablemetadata)
- [email](PaymentMethod.PaymentMethod.md#email)
- [firstName](PaymentMethod.PaymentMethod.md#firstname)
- [id](PaymentMethod.PaymentMethod.md#id)
- [lastName](PaymentMethod.PaymentMethod.md#lastname)
- [metadata](PaymentMethod.PaymentMethod.md#metadata)
- [obName](PaymentMethod.PaymentMethod.md#obname)
- [obType](PaymentMethod.PaymentMethod.md#obtype)
- [objectType](PaymentMethod.PaymentMethod.md#objecttype)
- [objecttype](PaymentMethod.PaymentMethod.md#objecttype-1)
- [payType](PaymentMethod.PaymentMethod.md#paytype)
- [token](PaymentMethod.PaymentMethod.md#token)
- [uniqueId](PaymentMethod.PaymentMethod.md#uniqueid)
- [version](PaymentMethod.PaymentMethod.md#version)

### Methods

- [delete](PaymentMethod.PaymentMethod.md#delete)
- [getId](PaymentMethod.PaymentMethod.md#getid)
- [getObjectType](PaymentMethod.PaymentMethod.md#getobjecttype)
- [merge](PaymentMethod.PaymentMethod.md#merge)
- [persist](PaymentMethod.PaymentMethod.md#persist)
- [refresh](PaymentMethod.PaymentMethod.md#refresh)
- [serialize](PaymentMethod.PaymentMethod.md#serialize)
- [setId](PaymentMethod.PaymentMethod.md#setid)
- [createInstanceSafeDbCall](PaymentMethod.PaymentMethod.md#createinstancesafedbcall)
- [createObjects](PaymentMethod.PaymentMethod.md#createobjects)
- [createObjectsSafe](PaymentMethod.PaymentMethod.md#createobjectssafe)
- [deleteObjects](PaymentMethod.PaymentMethod.md#deleteobjects)
- [generateStatelessSession](PaymentMethod.PaymentMethod.md#generatestatelesssession)
- [getBackendConn](PaymentMethod.PaymentMethod.md#getbackendconn)
- [getLinkedObjectsById](PaymentMethod.PaymentMethod.md#getlinkedobjectsbyid)
- [getObjectsById](PaymentMethod.PaymentMethod.md#getobjectsbyid)
- [getObjectsByIdInternal](PaymentMethod.PaymentMethod.md#getobjectsbyidinternal)
- [instantiateInstance](PaymentMethod.PaymentMethod.md#instantiateinstance)
- [instantiateLazyInstance](PaymentMethod.PaymentMethod.md#instantiatelazyinstance)
- [queryObjects](PaymentMethod.PaymentMethod.md#queryobjects)
- [updateObjects](PaymentMethod.PaymentMethod.md#updateobjects)

## Constructors

### constructor

• **new PaymentMethod**(`c?`): [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c?` | `Partial`\<[`IPaymentMethod`](../modules/IPaymentMethod.md#ipaymentmethod)\> |

#### Returns

[`PaymentMethod`](PaymentMethod.PaymentMethod.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[PaymentMethod.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L39)

## Properties

### accountSession

• **accountSession**: `string`

#### Implementation of

IPaymentMethod.accountSession

#### Defined in

[PaymentMethod.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L33)

___

### activeStatus

• **activeStatus**: `any`

#### Defined in

[PaymentMethod.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L24)

___

### address

• **address**: [`Address`](Address.Address.md)

#### Implementation of

IPaymentMethod.address

#### Defined in

[PaymentMethod.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L20)

___

### addressId

• **addressId**: `number`

#### Defined in

[PaymentMethod.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L29)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L6)

___

### email

• **email**: `string`

#### Defined in

[PaymentMethod.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L27)

___

### firstName

• **firstName**: `string`

#### Implementation of

IPaymentMethod.firstName

#### Defined in

[PaymentMethod.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L30)

___

### id

• **id**: `number`

#### Implementation of

IPaymentMethod.id

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[PaymentMethod.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L21)

___

### lastName

• **lastName**: `string`

#### Implementation of

IPaymentMethod.lastName

#### Defined in

[PaymentMethod.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L31)

___

### metadata

• **metadata**: `string`

#### Implementation of

IPaymentMethod.metadata

#### Defined in

[PaymentMethod.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L23)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[PaymentMethod.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L8)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[PaymentMethod.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L37)

___

### objecttype

• **objecttype**: `string`

#### Defined in

[PaymentMethod.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L32)

___

### payType

• **payType**: `any`

#### Defined in

[PaymentMethod.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L28)

___

### token

• **token**: `string`

#### Defined in

[PaymentMethod.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L25)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

IPaymentMethod.uniqueId

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[PaymentMethod.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L22)

___

### version

• **version**: `number`

#### Defined in

[PaymentMethod.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L26)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[PaymentMethod.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L42)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[PaymentMethod.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L43)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[PaymentMethod.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L44)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[PaymentMethod.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L45)

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

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[PaymentMethod.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L9)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L15)

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

#### Defined in

[PaymentMethod.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L38)

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

#### Overrides

[FluxType](FluxType.FluxType.md).[createObjects](FluxType.FluxType.md#createobjects)

#### Defined in

[PaymentMethod.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L41)

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

#### Overrides

[FluxType](FluxType.FluxType.md).[createObjectsSafe](FluxType.FluxType.md#createobjectssafe)

#### Defined in

[PaymentMethod.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L48)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`, `accountSession?`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |
| `accountSession?` | `string` |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Overrides

[FluxType](FluxType.FluxType.md).[deleteObjects](FluxType.FluxType.md#deleteobjects)

#### Defined in

[PaymentMethod.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L47)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/FluxType.d.ts#L16)

___

### queryObjects

▸ **queryObjects**\<`T`, `U`\>(`q`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |

#### Returns

`Promise`\<`T`[]\>

#### Overrides

[FluxType](FluxType.FluxType.md).[queryObjects](FluxType.FluxType.md#queryobjects)

#### Defined in

[PaymentMethod.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L46)

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

#### Overrides

[FluxType](FluxType.FluxType.md).[updateObjects](FluxType.FluxType.md#updateobjects)

#### Defined in

[PaymentMethod.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/599bd3f3cae86693db79abb83dbec9a4bdcf6afb/src/types/flux_types/PaymentMethod.d.ts#L40)
