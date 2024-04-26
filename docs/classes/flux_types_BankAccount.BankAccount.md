[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/BankAccount](../modules/flux_types_BankAccount.md) / BankAccount

# Class: BankAccount

[flux\_types/BankAccount](../modules/flux_types_BankAccount.md).BankAccount

## Hierarchy

- [`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)

  ↳ **`BankAccount`**

## Implements

- [`IBankAccount`](../interfaces/flux_types_IBankAccount.IBankAccount.md)

## Table of contents

### Constructors

- [constructor](flux_types_BankAccount.BankAccount.md#constructor)

### Properties

- [accountNumber](flux_types_BankAccount.BankAccount.md#accountnumber)
- [accountSession](flux_types_BankAccount.BankAccount.md#accountsession)
- [activeStatus](flux_types_BankAccount.BankAccount.md#activestatus)
- [address](flux_types_BankAccount.BankAccount.md#address)
- [addressId](flux_types_BankAccount.BankAccount.md#addressid)
- [bankBrand](flux_types_BankAccount.BankAccount.md#bankbrand)
- [bankName](flux_types_BankAccount.BankAccount.md#bankname)
- [dataTableMetadata](flux_types_BankAccount.BankAccount.md#datatablemetadata)
- [email](flux_types_BankAccount.BankAccount.md#email)
- [firstName](flux_types_BankAccount.BankAccount.md#firstname)
- [id](flux_types_BankAccount.BankAccount.md#id)
- [lastFour](flux_types_BankAccount.BankAccount.md#lastfour)
- [lastName](flux_types_BankAccount.BankAccount.md#lastname)
- [metadata](flux_types_BankAccount.BankAccount.md#metadata)
- [obName](flux_types_BankAccount.BankAccount.md#obname)
- [obType](flux_types_BankAccount.BankAccount.md#obtype)
- [objectType](flux_types_BankAccount.BankAccount.md#objecttype)
- [objecttype](flux_types_BankAccount.BankAccount.md#objecttype-1)
- [payType](flux_types_BankAccount.BankAccount.md#paytype)
- [routingNumber](flux_types_BankAccount.BankAccount.md#routingnumber)
- [token](flux_types_BankAccount.BankAccount.md#token)
- [uniqueId](flux_types_BankAccount.BankAccount.md#uniqueid)
- [version](flux_types_BankAccount.BankAccount.md#version)

### Methods

- [delete](flux_types_BankAccount.BankAccount.md#delete)
- [getId](flux_types_BankAccount.BankAccount.md#getid)
- [getObjectType](flux_types_BankAccount.BankAccount.md#getobjecttype)
- [merge](flux_types_BankAccount.BankAccount.md#merge)
- [persist](flux_types_BankAccount.BankAccount.md#persist)
- [refresh](flux_types_BankAccount.BankAccount.md#refresh)
- [serialize](flux_types_BankAccount.BankAccount.md#serialize)
- [setId](flux_types_BankAccount.BankAccount.md#setid)
- [createInstanceSafeDbCall](flux_types_BankAccount.BankAccount.md#createinstancesafedbcall)
- [createObjects](flux_types_BankAccount.BankAccount.md#createobjects)
- [createObjectsSafe](flux_types_BankAccount.BankAccount.md#createobjectssafe)
- [deleteObjects](flux_types_BankAccount.BankAccount.md#deleteobjects)
- [generateStatelessSession](flux_types_BankAccount.BankAccount.md#generatestatelesssession)
- [getBackendConn](flux_types_BankAccount.BankAccount.md#getbackendconn)
- [getObjectsById](flux_types_BankAccount.BankAccount.md#getobjectsbyid)
- [getObjectsByIdInternal](flux_types_BankAccount.BankAccount.md#getobjectsbyidinternal)
- [instantiateInstance](flux_types_BankAccount.BankAccount.md#instantiateinstance)
- [instantiateLazyInstance](flux_types_BankAccount.BankAccount.md#instantiatelazyinstance)
- [queryObjects](flux_types_BankAccount.BankAccount.md#queryobjects)
- [updateObjects](flux_types_BankAccount.BankAccount.md#updateobjects)

## Constructors

### constructor

• **new BankAccount**(`c`): [`BankAccount`](flux_types_BankAccount.BankAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Partial`\<[`IBankAccount`](../interfaces/flux_types_IBankAccount.IBankAccount.md)\> |

#### Returns

[`BankAccount`](flux_types_BankAccount.BankAccount.md)

#### Overrides

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[constructor](flux_types_PaymentMethod.PaymentMethod.md#constructor)

#### Defined in

[src/types/flux_types/BankAccount.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BankAccount.d.ts#L4)

## Properties

### accountNumber

• **accountNumber**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[accountNumber](../interfaces/flux_types_IBankAccount.IBankAccount.md#accountnumber)

#### Defined in

[src/types/flux_types/BankAccount.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BankAccount.d.ts#L9)

___

### accountSession

• **accountSession**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[accountSession](flux_types_PaymentMethod.PaymentMethod.md#accountsession)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L33)

___

### activeStatus

• **activeStatus**: `any`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[activeStatus](flux_types_PaymentMethod.PaymentMethod.md#activestatus)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L24)

___

### address

• **address**: [`Address`](flux_types_Address.Address.md)

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[address](../interfaces/flux_types_IBankAccount.IBankAccount.md#address)

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[address](flux_types_PaymentMethod.PaymentMethod.md#address)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L20)

___

### addressId

• **addressId**: `number`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[addressId](flux_types_PaymentMethod.PaymentMethod.md#addressid)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L29)

___

### bankBrand

• **bankBrand**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[bankBrand](../interfaces/flux_types_IBankAccount.IBankAccount.md#bankbrand)

#### Defined in

[src/types/flux_types/BankAccount.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BankAccount.d.ts#L8)

___

### bankName

• **bankName**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[bankName](../interfaces/flux_types_IBankAccount.IBankAccount.md#bankname)

#### Defined in

[src/types/flux_types/BankAccount.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BankAccount.d.ts#L6)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[dataTableMetadata](flux_types_PaymentMethod.PaymentMethod.md#datatablemetadata)

#### Defined in

[src/types/flux_types/FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L6)

___

### email

• **email**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[email](flux_types_PaymentMethod.PaymentMethod.md#email)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L27)

___

### firstName

• **firstName**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[firstName](flux_types_PaymentMethod.PaymentMethod.md#firstname)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L30)

___

### id

• **id**: `number`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[id](../interfaces/flux_types_IBankAccount.IBankAccount.md#id)

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[id](flux_types_PaymentMethod.PaymentMethod.md#id)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L21)

___

### lastFour

• **lastFour**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[lastFour](../interfaces/flux_types_IBankAccount.IBankAccount.md#lastfour)

#### Defined in

[src/types/flux_types/BankAccount.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BankAccount.d.ts#L5)

___

### lastName

• **lastName**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[lastName](flux_types_PaymentMethod.PaymentMethod.md#lastname)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L31)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[metadata](../interfaces/flux_types_IBankAccount.IBankAccount.md#metadata)

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[metadata](flux_types_PaymentMethod.PaymentMethod.md#metadata)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L23)

___

### obName

• **obName**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[obName](flux_types_PaymentMethod.PaymentMethod.md#obname)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L8)

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

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[obType](flux_types_PaymentMethod.PaymentMethod.md#obtype)

#### Defined in

[src/types/flux_types/FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[objectType](flux_types_PaymentMethod.PaymentMethod.md#objecttype)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L37)

___

### objecttype

• **objecttype**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[objecttype](flux_types_PaymentMethod.PaymentMethod.md#objecttype-1)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L32)

___

### payType

• **payType**: `any`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[payType](flux_types_PaymentMethod.PaymentMethod.md#paytype)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L28)

___

### routingNumber

• **routingNumber**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[routingNumber](../interfaces/flux_types_IBankAccount.IBankAccount.md#routingnumber)

#### Defined in

[src/types/flux_types/BankAccount.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BankAccount.d.ts#L7)

___

### token

• **token**: `string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[token](flux_types_PaymentMethod.PaymentMethod.md#token)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L25)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IBankAccount](../interfaces/flux_types_IBankAccount.IBankAccount.md).[uniqueId](../interfaces/flux_types_IBankAccount.IBankAccount.md#uniqueid)

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[uniqueId](flux_types_PaymentMethod.PaymentMethod.md#uniqueid)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L22)

___

### version

• **version**: `number`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[version](flux_types_PaymentMethod.PaymentMethod.md#version)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L26)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[delete](flux_types_PaymentMethod.PaymentMethod.md#delete)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L42)

___

### getId

▸ **getId**(): [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[getId](flux_types_PaymentMethod.PaymentMethod.md#getid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[getObjectType](flux_types_PaymentMethod.PaymentMethod.md#getobjecttype)

#### Defined in

[src/types/flux_types/FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[merge](flux_types_PaymentMethod.PaymentMethod.md#merge)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L43)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[persist](flux_types_PaymentMethod.PaymentMethod.md#persist)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L44)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[refresh](flux_types_PaymentMethod.PaymentMethod.md#refresh)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L45)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](flux_types_Address.Address.md) |
| `aesNonce` | `any` |
| `encAesKey` | `any` |
| `encSensitiveData` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `payType` | `any` |
| `uniqueId` | `string` |

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[serialize](flux_types_PaymentMethod.PaymentMethod.md#serialize)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L9)

___

### setId

▸ **setId**(`fi`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) |

#### Returns

`void`

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[setId](flux_types_PaymentMethod.PaymentMethod.md#setid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceSafeDbCall

▸ **createInstanceSafeDbCall**(`inst`, `pt`): `Promise`\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inst` | [`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md) |
| `pt` | `any` |

#### Returns

`Promise`\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[createInstanceSafeDbCall](flux_types_PaymentMethod.PaymentMethod.md#createinstancesafedbcall)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L38)

___

### createObjects

▸ **createObjects**\<`T`\>(`ob`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[createObjects](flux_types_PaymentMethod.PaymentMethod.md#createobjects)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L41)

___

### createObjectsSafe

▸ **createObjectsSafe**\<`T`\>(`ob`, `secHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[createObjectsSafe](flux_types_PaymentMethod.PaymentMethod.md#createobjectssafe)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L48)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`, `accountSession?`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |
| `accountSession?` | `string` |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[deleteObjects](flux_types_PaymentMethod.PaymentMethod.md#deleteobjects)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L47)

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

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[generateStatelessSession](flux_types_PaymentMethod.PaymentMethod.md#generatestatelesssession)

#### Defined in

[src/types/flux_types/FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<[`Flux`](lib_Flux.Flux.md)\<`SecurityHandler`\>\>

#### Returns

`Promise`\<[`Flux`](lib_Flux.Flux.md)\<`SecurityHandler`\>\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[getBackendConn](flux_types_PaymentMethod.PaymentMethod.md#getbackendconn)

#### Defined in

[src/types/flux_types/FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L18)

___

### getObjectsById

▸ **getObjectsById**\<`T`\>(`this`, `fi`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[getObjectsById](flux_types_PaymentMethod.PaymentMethod.md#getobjectsbyid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L37)

___

### getObjectsByIdInternal

▸ **getObjectsByIdInternal**\<`T`\>(`fi`, `obType`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | (`o?`: `any`) => `T` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[getObjectsByIdInternal](flux_types_PaymentMethod.PaymentMethod.md#getobjectsbyidinternal)

#### Defined in

[src/types/flux_types/FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L36)

___

### instantiateInstance

▸ **instantiateInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[instantiateInstance](flux_types_PaymentMethod.PaymentMethod.md#instantiateinstance)

#### Defined in

[src/types/flux_types/FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L17)

___

### instantiateLazyInstance

▸ **instantiateLazyInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[instantiateLazyInstance](flux_types_PaymentMethod.PaymentMethod.md#instantiatelazyinstance)

#### Defined in

[src/types/flux_types/FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L16)

___

### queryObjects

▸ **queryObjects**\<`T`, `U`\>(`q`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[queryObjects](flux_types_PaymentMethod.PaymentMethod.md#queryobjects)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L46)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[PaymentMethod](flux_types_PaymentMethod.PaymentMethod.md).[updateObjects](flux_types_PaymentMethod.PaymentMethod.md#updateobjects)

#### Defined in

[src/types/flux_types/PaymentMethod.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethod.d.ts#L40)
