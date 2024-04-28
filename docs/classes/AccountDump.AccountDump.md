[fluxpayments](../README.md) / [Modules](../modules.md) / [AccountDump](../modules/AccountDump.md) / AccountDump

# Class: AccountDump

[AccountDump](../modules/AccountDump.md).AccountDump

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`AccountDump`**

## Implements

- [`IAccount`](../interfaces/IAccount.IAccount.md)

## Table of contents

### Constructors

- [constructor](AccountDump.AccountDump.md#constructor)

### Properties

- [accountEmail](AccountDump.AccountDump.md#accountemail)
- [accountUserType](AccountDump.AccountDump.md#accountusertype)
- [creationTime](AccountDump.AccountDump.md#creationtime)
- [dataTableMetadata](AccountDump.AccountDump.md#datatablemetadata)
- [dumpId](AccountDump.AccountDump.md#dumpid)
- [firstName](AccountDump.AccountDump.md#firstname)
- [id](AccountDump.AccountDump.md#id)
- [lastName](AccountDump.AccountDump.md#lastname)
- [metadata](AccountDump.AccountDump.md#metadata)
- [middleName](AccountDump.AccountDump.md#middlename)
- [obName](AccountDump.AccountDump.md#obname)
- [obType](AccountDump.AccountDump.md#obtype)
- [objectType](AccountDump.AccountDump.md#objecttype)
- [uniqueId](AccountDump.AccountDump.md#uniqueid)

### Methods

- [delete](AccountDump.AccountDump.md#delete)
- [getId](AccountDump.AccountDump.md#getid)
- [getInterface](AccountDump.AccountDump.md#getinterface)
- [getObjectType](AccountDump.AccountDump.md#getobjecttype)
- [merge](AccountDump.AccountDump.md#merge)
- [persist](AccountDump.AccountDump.md#persist)
- [refresh](AccountDump.AccountDump.md#refresh)
- [serialize](AccountDump.AccountDump.md#serialize)
- [setId](AccountDump.AccountDump.md#setid)
- [createInstanceLazy](AccountDump.AccountDump.md#createinstancelazy)
- [createInstanceSafe](AccountDump.AccountDump.md#createinstancesafe)
- [createObjects](AccountDump.AccountDump.md#createobjects)
- [createObjectsSafe](AccountDump.AccountDump.md#createobjectssafe)
- [deleteObjects](AccountDump.AccountDump.md#deleteobjects)
- [generateStatelessSession](AccountDump.AccountDump.md#generatestatelesssession)
- [getBackendConn](AccountDump.AccountDump.md#getbackendconn)
- [getLinkedObjectsById](AccountDump.AccountDump.md#getlinkedobjectsbyid)
- [getObjectsById](AccountDump.AccountDump.md#getobjectsbyid)
- [getObjectsByIdInternal](AccountDump.AccountDump.md#getobjectsbyidinternal)
- [instantiateInstance](AccountDump.AccountDump.md#instantiateinstance)
- [instantiateLazyInstance](AccountDump.AccountDump.md#instantiatelazyinstance)
- [queryObjects](AccountDump.AccountDump.md#queryobjects)
- [updateObjects](AccountDump.AccountDump.md#updateobjects)

## Constructors

### constructor

• **new AccountDump**(`accDump?`): [`AccountDump`](AccountDump.AccountDump.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accDump?` | `any` |

#### Returns

[`AccountDump`](AccountDump.AccountDump.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[AccountDump.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L18)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[accountEmail](../interfaces/IAccount.IAccount.md#accountemail)

#### Defined in

[AccountDump.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L14)

___

### accountUserType

• **accountUserType**: [`AccountUserType`](../enums/AccountUserType.AccountUserType.md)

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[accountUserType](../interfaces/IAccount.IAccount.md#accountusertype)

#### Defined in

[AccountDump.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L15)

___

### creationTime

• **creationTime**: `Date`

#### Defined in

[AccountDump.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L16)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L6)

___

### dumpId

• **dumpId**: [`DumpId`](DumpId.DumpId.md)

#### Defined in

[AccountDump.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L9)

___

### firstName

• **firstName**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[firstName](../interfaces/IAccount.IAccount.md#firstname)

#### Defined in

[AccountDump.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L10)

___

### id

• **id**: `number`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[id](../interfaces/IAccount.IAccount.md#id)

#### Inherited from

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L13)

___

### lastName

• **lastName**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[lastName](../interfaces/IAccount.IAccount.md#lastname)

#### Defined in

[AccountDump.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L12)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[metadata](../interfaces/IAccount.IAccount.md#metadata)

#### Defined in

[AccountDump.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L13)

___

### middleName

• **middleName**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[middleName](../interfaces/IAccount.IAccount.md#middlename)

#### Defined in

[AccountDump.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L11)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[AccountDump.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L6)

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

[AccountDump.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L8)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[uniqueId](../interfaces/IAccount.IAccount.md#uniqueid)

#### Inherited from

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L7)

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

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L14)

___

### getInterface

▸ **getInterface**(): [`IAccount`](../interfaces/IAccount.IAccount.md)

#### Returns

[`IAccount`](../interfaces/IAccount.IAccount.md)

#### Defined in

[AccountDump.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L17)

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

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/FluxType.d.ts#L21)

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

▸ **serialize**(): `void`

#### Returns

`void`

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[AccountDump.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L7)

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

▸ **createInstanceLazy**(`acc`): `Promise`\<[`AccountDump`](AccountDump.AccountDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`AccountDump`](AccountDump.AccountDump.md)\>

#### Defined in

[AccountDump.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L19)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`AccountDump`](AccountDump.AccountDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`AccountDump`](AccountDump.AccountDump.md)\>

#### Defined in

[AccountDump.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/3394152158dd43f18588d9c384fec29555be592f/src/types/flux_types/AccountDump.d.ts#L20)

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
