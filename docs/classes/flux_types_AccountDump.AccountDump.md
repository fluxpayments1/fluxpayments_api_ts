[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/AccountDump](../modules/flux_types_AccountDump.md) / AccountDump

# Class: AccountDump

[flux\_types/AccountDump](../modules/flux_types_AccountDump.md).AccountDump

## Hierarchy

- [`FluxType`](flux_types_FluxType.FluxType.md)

  ↳ **`AccountDump`**

## Implements

- [`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)

## Table of contents

### Constructors

- [constructor](flux_types_AccountDump.AccountDump.md#constructor)

### Properties

- [accountEmail](flux_types_AccountDump.AccountDump.md#accountemail)
- [accountUserType](flux_types_AccountDump.AccountDump.md#accountusertype)
- [creationTime](flux_types_AccountDump.AccountDump.md#creationtime)
- [dataTableMetadata](flux_types_AccountDump.AccountDump.md#datatablemetadata)
- [dumpId](flux_types_AccountDump.AccountDump.md#dumpid)
- [firstName](flux_types_AccountDump.AccountDump.md#firstname)
- [id](flux_types_AccountDump.AccountDump.md#id)
- [lastName](flux_types_AccountDump.AccountDump.md#lastname)
- [metadata](flux_types_AccountDump.AccountDump.md#metadata)
- [middleName](flux_types_AccountDump.AccountDump.md#middlename)
- [obName](flux_types_AccountDump.AccountDump.md#obname)
- [obType](flux_types_AccountDump.AccountDump.md#obtype)
- [objectType](flux_types_AccountDump.AccountDump.md#objecttype)
- [uniqueId](flux_types_AccountDump.AccountDump.md#uniqueid)

### Methods

- [delete](flux_types_AccountDump.AccountDump.md#delete)
- [getId](flux_types_AccountDump.AccountDump.md#getid)
- [getInterface](flux_types_AccountDump.AccountDump.md#getinterface)
- [getObjectType](flux_types_AccountDump.AccountDump.md#getobjecttype)
- [merge](flux_types_AccountDump.AccountDump.md#merge)
- [persist](flux_types_AccountDump.AccountDump.md#persist)
- [refresh](flux_types_AccountDump.AccountDump.md#refresh)
- [serialize](flux_types_AccountDump.AccountDump.md#serialize)
- [setId](flux_types_AccountDump.AccountDump.md#setid)
- [createInstanceLazy](flux_types_AccountDump.AccountDump.md#createinstancelazy)
- [createInstanceSafe](flux_types_AccountDump.AccountDump.md#createinstancesafe)
- [createObjects](flux_types_AccountDump.AccountDump.md#createobjects)
- [createObjectsSafe](flux_types_AccountDump.AccountDump.md#createobjectssafe)
- [deleteObjects](flux_types_AccountDump.AccountDump.md#deleteobjects)
- [generateStatelessSession](flux_types_AccountDump.AccountDump.md#generatestatelesssession)
- [getBackendConn](flux_types_AccountDump.AccountDump.md#getbackendconn)
- [getObjectsById](flux_types_AccountDump.AccountDump.md#getobjectsbyid)
- [getObjectsByIdInternal](flux_types_AccountDump.AccountDump.md#getobjectsbyidinternal)
- [instantiateInstance](flux_types_AccountDump.AccountDump.md#instantiateinstance)
- [instantiateLazyInstance](flux_types_AccountDump.AccountDump.md#instantiatelazyinstance)
- [queryObjects](flux_types_AccountDump.AccountDump.md#queryobjects)
- [updateObjects](flux_types_AccountDump.AccountDump.md#updateobjects)

## Constructors

### constructor

• **new AccountDump**(`accDump?`): [`AccountDump`](flux_types_AccountDump.AccountDump.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accDump?` | `any` |

#### Returns

[`AccountDump`](flux_types_AccountDump.AccountDump.md)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[constructor](flux_types_FluxType.FluxType.md#constructor)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L18)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[accountEmail](../interfaces/flux_types_IAccount.IAccount.md#accountemail)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L14)

___

### accountUserType

• **accountUserType**: [`AccountUserType`](../enums/flux_types_AccountUserType.AccountUserType.md)

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[accountUserType](../interfaces/flux_types_IAccount.IAccount.md#accountusertype)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L15)

___

### creationTime

• **creationTime**: `Date`

#### Defined in

[src/types/flux_types/AccountDump.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L16)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[dataTableMetadata](flux_types_FluxType.FluxType.md#datatablemetadata)

#### Defined in

[src/types/flux_types/FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L6)

___

### dumpId

• **dumpId**: [`DumpId`](flux_types_DumpId.DumpId.md)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L9)

___

### firstName

• **firstName**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[firstName](../interfaces/flux_types_IAccount.IAccount.md#firstname)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L10)

___

### id

• **id**: `number`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[id](../interfaces/flux_types_IAccount.IAccount.md#id)

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[id](flux_types_FluxType.FluxType.md#id)

#### Defined in

[src/types/flux_types/FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L13)

___

### lastName

• **lastName**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[lastName](../interfaces/flux_types_IAccount.IAccount.md#lastname)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L12)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[metadata](../interfaces/flux_types_IAccount.IAccount.md#metadata)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L13)

___

### middleName

• **middleName**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[middleName](../interfaces/flux_types_IAccount.IAccount.md#middlename)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L11)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[obName](flux_types_FluxType.FluxType.md#obname)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L6)

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

[FluxType](flux_types_FluxType.FluxType.md).[obType](flux_types_FluxType.FluxType.md#obtype)

#### Defined in

[src/types/flux_types/FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[objectType](flux_types_FluxType.FluxType.md#objecttype)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L8)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[uniqueId](../interfaces/flux_types_IAccount.IAccount.md#uniqueid)

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[uniqueId](flux_types_FluxType.FluxType.md#uniqueid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L7)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[delete](flux_types_FluxType.FluxType.md#delete)

#### Defined in

[src/types/flux_types/FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getId](flux_types_FluxType.FluxType.md#getid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L14)

___

### getInterface

▸ **getInterface**(): [`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)

#### Returns

[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L17)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getObjectType](flux_types_FluxType.FluxType.md#getobjecttype)

#### Defined in

[src/types/flux_types/FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[merge](flux_types_FluxType.FluxType.md#merge)

#### Defined in

[src/types/flux_types/FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[persist](flux_types_FluxType.FluxType.md#persist)

#### Defined in

[src/types/flux_types/FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[refresh](flux_types_FluxType.FluxType.md#refresh)

#### Defined in

[src/types/flux_types/FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `void`

#### Returns

`void`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[serialize](flux_types_FluxType.FluxType.md#serialize)

#### Defined in

[src/types/flux_types/AccountDump.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L7)

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

[FluxType](flux_types_FluxType.FluxType.md).[setId](flux_types_FluxType.FluxType.md#setid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`AccountDump`](flux_types_AccountDump.AccountDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`AccountDump`](flux_types_AccountDump.AccountDump.md)\>

#### Defined in

[src/types/flux_types/AccountDump.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L19)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`AccountDump`](flux_types_AccountDump.AccountDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`AccountDump`](flux_types_AccountDump.AccountDump.md)\>

#### Defined in

[src/types/flux_types/AccountDump.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountDump.d.ts#L20)

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

[FluxType](flux_types_FluxType.FluxType.md).[createObjects](flux_types_FluxType.FluxType.md#createobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L41)

___

### createObjectsSafe

▸ **createObjectsSafe**\<`T`\>(`ob`): `Promise`\<`T`[]\>

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

[FluxType](flux_types_FluxType.FluxType.md).[createObjectsSafe](flux_types_FluxType.FluxType.md#createobjectssafe)

#### Defined in

[src/types/flux_types/FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L42)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[deleteObjects](flux_types_FluxType.FluxType.md#deleteobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType](flux_types_FluxType.FluxType.md).[generateStatelessSession](flux_types_FluxType.FluxType.md#generatestatelesssession)

#### Defined in

[src/types/flux_types/FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<[`Flux`](lib_Flux.Flux.md)\<`SecurityHandler`\>\>

#### Returns

`Promise`\<[`Flux`](lib_Flux.Flux.md)\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getBackendConn](flux_types_FluxType.FluxType.md#getbackendconn)

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

[FluxType](flux_types_FluxType.FluxType.md).[getObjectsById](flux_types_FluxType.FluxType.md#getobjectsbyid)

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

[FluxType](flux_types_FluxType.FluxType.md).[getObjectsByIdInternal](flux_types_FluxType.FluxType.md#getobjectsbyidinternal)

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

[FluxType](flux_types_FluxType.FluxType.md).[instantiateInstance](flux_types_FluxType.FluxType.md#instantiateinstance)

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

[FluxType](flux_types_FluxType.FluxType.md).[instantiateLazyInstance](flux_types_FluxType.FluxType.md#instantiatelazyinstance)

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

[FluxType](flux_types_FluxType.FluxType.md).[queryObjects](flux_types_FluxType.FluxType.md#queryobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType](flux_types_FluxType.FluxType.md).[updateObjects](flux_types_FluxType.FluxType.md#updateobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L40)
