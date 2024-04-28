[fluxpayments](../README.md) / [Modules](../modules.md) / [BankAccount](../modules/BankAccount.md) / BankAccount

# Class: BankAccount

[BankAccount](../modules/BankAccount.md).BankAccount

## Hierarchy

- [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

  ↳ **`BankAccount`**

## Implements

- [`IBankAccount`](../interfaces/IBankAccount.IBankAccount.md)

## Table of contents

### Constructors

- [constructor](BankAccount.BankAccount.md#constructor)

### Properties

- [accountNumber](BankAccount.BankAccount.md#accountnumber)
- [accountSession](BankAccount.BankAccount.md#accountsession)
- [activeStatus](BankAccount.BankAccount.md#activestatus)
- [address](BankAccount.BankAccount.md#address)
- [addressId](BankAccount.BankAccount.md#addressid)
- [bankBrand](BankAccount.BankAccount.md#bankbrand)
- [bankName](BankAccount.BankAccount.md#bankname)
- [dataTableMetadata](BankAccount.BankAccount.md#datatablemetadata)
- [email](BankAccount.BankAccount.md#email)
- [firstName](BankAccount.BankAccount.md#firstname)
- [id](BankAccount.BankAccount.md#id)
- [lastFour](BankAccount.BankAccount.md#lastfour)
- [lastName](BankAccount.BankAccount.md#lastname)
- [metadata](BankAccount.BankAccount.md#metadata)
- [obName](BankAccount.BankAccount.md#obname)
- [obType](BankAccount.BankAccount.md#obtype)
- [objectType](BankAccount.BankAccount.md#objecttype)
- [objecttype](BankAccount.BankAccount.md#objecttype-1)
- [payType](BankAccount.BankAccount.md#paytype)
- [routingNumber](BankAccount.BankAccount.md#routingnumber)
- [token](BankAccount.BankAccount.md#token)
- [uniqueId](BankAccount.BankAccount.md#uniqueid)
- [version](BankAccount.BankAccount.md#version)

### Methods

- [delete](BankAccount.BankAccount.md#delete)
- [getId](BankAccount.BankAccount.md#getid)
- [getObjectType](BankAccount.BankAccount.md#getobjecttype)
- [merge](BankAccount.BankAccount.md#merge)
- [persist](BankAccount.BankAccount.md#persist)
- [refresh](BankAccount.BankAccount.md#refresh)
- [serialize](BankAccount.BankAccount.md#serialize)
- [setId](BankAccount.BankAccount.md#setid)
- [createInstanceSafeDbCall](BankAccount.BankAccount.md#createinstancesafedbcall)
- [createObjects](BankAccount.BankAccount.md#createobjects)
- [createObjectsSafe](BankAccount.BankAccount.md#createobjectssafe)
- [deleteObjects](BankAccount.BankAccount.md#deleteobjects)
- [generateStatelessSession](BankAccount.BankAccount.md#generatestatelesssession)
- [getBackendConn](BankAccount.BankAccount.md#getbackendconn)
- [getLinkedObjectsById](BankAccount.BankAccount.md#getlinkedobjectsbyid)
- [getObjectsById](BankAccount.BankAccount.md#getobjectsbyid)
- [getObjectsByIdInternal](BankAccount.BankAccount.md#getobjectsbyidinternal)
- [instantiateInstance](BankAccount.BankAccount.md#instantiateinstance)
- [instantiateLazyInstance](BankAccount.BankAccount.md#instantiatelazyinstance)
- [queryObjects](BankAccount.BankAccount.md#queryobjects)
- [updateObjects](BankAccount.BankAccount.md#updateobjects)

## Constructors

### constructor

• **new BankAccount**(`c`): [`BankAccount`](BankAccount.BankAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Partial`\<[`IBankAccount`](../interfaces/IBankAccount.IBankAccount.md)\> |

#### Returns

[`BankAccount`](BankAccount.BankAccount.md)

#### Overrides

[PaymentMethod](PaymentMethod.PaymentMethod.md).[constructor](PaymentMethod.PaymentMethod.md#constructor)

#### Defined in

[BankAccount.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/BankAccount.d.ts#L4)

## Properties

### accountNumber

• **accountNumber**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[accountNumber](../interfaces/IBankAccount.IBankAccount.md#accountnumber)

#### Defined in

[BankAccount.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/BankAccount.d.ts#L9)

___

### accountSession

• **accountSession**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[accountSession](PaymentMethod.PaymentMethod.md#accountsession)

#### Defined in

[PaymentMethod.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L33)

___

### activeStatus

• **activeStatus**: `any`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[activeStatus](PaymentMethod.PaymentMethod.md#activestatus)

#### Defined in

[PaymentMethod.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L24)

___

### address

• **address**: [`Address`](Address.Address.md)

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[address](../interfaces/IBankAccount.IBankAccount.md#address)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[address](PaymentMethod.PaymentMethod.md#address)

#### Defined in

[PaymentMethod.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L20)

___

### addressId

• **addressId**: `number`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[addressId](PaymentMethod.PaymentMethod.md#addressid)

#### Defined in

[PaymentMethod.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L29)

___

### bankBrand

• **bankBrand**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[bankBrand](../interfaces/IBankAccount.IBankAccount.md#bankbrand)

#### Defined in

[BankAccount.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/BankAccount.d.ts#L8)

___

### bankName

• **bankName**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[bankName](../interfaces/IBankAccount.IBankAccount.md#bankname)

#### Defined in

[BankAccount.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/BankAccount.d.ts#L6)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[dataTableMetadata](PaymentMethod.PaymentMethod.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L6)

___

### email

• **email**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[email](PaymentMethod.PaymentMethod.md#email)

#### Defined in

[PaymentMethod.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L27)

___

### firstName

• **firstName**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[firstName](PaymentMethod.PaymentMethod.md#firstname)

#### Defined in

[PaymentMethod.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L30)

___

### id

• **id**: `number`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[id](../interfaces/IBankAccount.IBankAccount.md#id)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[id](PaymentMethod.PaymentMethod.md#id)

#### Defined in

[PaymentMethod.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L21)

___

### lastFour

• **lastFour**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[lastFour](../interfaces/IBankAccount.IBankAccount.md#lastfour)

#### Defined in

[BankAccount.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/BankAccount.d.ts#L5)

___

### lastName

• **lastName**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[lastName](PaymentMethod.PaymentMethod.md#lastname)

#### Defined in

[PaymentMethod.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L31)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[metadata](../interfaces/IBankAccount.IBankAccount.md#metadata)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[metadata](PaymentMethod.PaymentMethod.md#metadata)

#### Defined in

[PaymentMethod.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L23)

___

### obName

• **obName**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[obName](PaymentMethod.PaymentMethod.md#obname)

#### Defined in

[PaymentMethod.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L8)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[objectType](PaymentMethod.PaymentMethod.md#objecttype)

#### Defined in

[PaymentMethod.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L37)

___

### objecttype

• **objecttype**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[objecttype](PaymentMethod.PaymentMethod.md#objecttype-1)

#### Defined in

[PaymentMethod.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L32)

___

### payType

• **payType**: `any`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[payType](PaymentMethod.PaymentMethod.md#paytype)

#### Defined in

[PaymentMethod.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L28)

___

### routingNumber

• **routingNumber**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[routingNumber](../interfaces/IBankAccount.IBankAccount.md#routingnumber)

#### Defined in

[BankAccount.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/BankAccount.d.ts#L7)

___

### token

• **token**: `string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[token](PaymentMethod.PaymentMethod.md#token)

#### Defined in

[PaymentMethod.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L25)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IBankAccount](../interfaces/IBankAccount.IBankAccount.md).[uniqueId](../interfaces/IBankAccount.IBankAccount.md#uniqueid)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[uniqueId](PaymentMethod.PaymentMethod.md#uniqueid)

#### Defined in

[PaymentMethod.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L22)

___

### version

• **version**: `number`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[version](PaymentMethod.PaymentMethod.md#version)

#### Defined in

[PaymentMethod.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L26)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[delete](PaymentMethod.PaymentMethod.md#delete)

#### Defined in

[PaymentMethod.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L42)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getId](PaymentMethod.PaymentMethod.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getObjectType](PaymentMethod.PaymentMethod.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[merge](PaymentMethod.PaymentMethod.md#merge)

#### Defined in

[PaymentMethod.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L43)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[persist](PaymentMethod.PaymentMethod.md#persist)

#### Defined in

[PaymentMethod.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L44)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[refresh](PaymentMethod.PaymentMethod.md#refresh)

#### Defined in

[PaymentMethod.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L45)

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

[PaymentMethod.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L9)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L15)

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

[PaymentMethod.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L38)

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

[PaymentMethod.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L41)

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

[PaymentMethod.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L48)

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

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[deleteObjects](PaymentMethod.PaymentMethod.md#deleteobjects)

#### Defined in

[PaymentMethod.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L47)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[getBackendConn](PaymentMethod.PaymentMethod.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/FluxType.d.ts#L16)

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

#### Inherited from

[PaymentMethod](PaymentMethod.PaymentMethod.md).[queryObjects](PaymentMethod.PaymentMethod.md#queryobjects)

#### Defined in

[PaymentMethod.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L46)

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

[PaymentMethod.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/b8ae582bf9abf4cb5dbb0ed3371ea2fe28a341f9/src/types/flux_types/PaymentMethod.d.ts#L40)
