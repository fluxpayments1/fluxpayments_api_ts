[fluxpayments](../README.md) / [Modules](../modules.md) / [AccountAddress](../modules/AccountAddress.md) / AccountAddress

# Class: AccountAddress

[AccountAddress](../modules/AccountAddress.md).AccountAddress

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`AccountAddress`**

## Implements

- [`IAccountAddress`](../interfaces/IAccountAddress.IAccountAddress.md)

## Table of contents

### Constructors

- [constructor](AccountAddress.AccountAddress.md#constructor)

### Properties

- [accountId](AccountAddress.AccountAddress.md#accountid)
- [accountUniqueId](AccountAddress.AccountAddress.md#accountuniqueid)
- [addressId](AccountAddress.AccountAddress.md#addressid)
- [addressUniqueId](AccountAddress.AccountAddress.md#addressuniqueid)
- [dataTableMetadata](AccountAddress.AccountAddress.md#datatablemetadata)
- [id](AccountAddress.AccountAddress.md#id)
- [metadata](AccountAddress.AccountAddress.md#metadata)
- [obName](AccountAddress.AccountAddress.md#obname)
- [obType](AccountAddress.AccountAddress.md#obtype)
- [objectType](AccountAddress.AccountAddress.md#objecttype)
- [uniqueId](AccountAddress.AccountAddress.md#uniqueid)

### Methods

- [delete](AccountAddress.AccountAddress.md#delete)
- [getId](AccountAddress.AccountAddress.md#getid)
- [getObjectType](AccountAddress.AccountAddress.md#getobjecttype)
- [merge](AccountAddress.AccountAddress.md#merge)
- [persist](AccountAddress.AccountAddress.md#persist)
- [refresh](AccountAddress.AccountAddress.md#refresh)
- [serialize](AccountAddress.AccountAddress.md#serialize)
- [setId](AccountAddress.AccountAddress.md#setid)
- [createInstanceLazy](AccountAddress.AccountAddress.md#createinstancelazy)
- [createInstanceSafe](AccountAddress.AccountAddress.md#createinstancesafe)
- [createObjects](AccountAddress.AccountAddress.md#createobjects)
- [createObjectsSafe](AccountAddress.AccountAddress.md#createobjectssafe)
- [deleteObjects](AccountAddress.AccountAddress.md#deleteobjects)
- [generateStatelessSession](AccountAddress.AccountAddress.md#generatestatelesssession)
- [getBackendConn](AccountAddress.AccountAddress.md#getbackendconn)
- [getLinkedObjectsById](AccountAddress.AccountAddress.md#getlinkedobjectsbyid)
- [getObjectsById](AccountAddress.AccountAddress.md#getobjectsbyid)
- [getObjectsByIdInternal](AccountAddress.AccountAddress.md#getobjectsbyidinternal)
- [instantiateInstance](AccountAddress.AccountAddress.md#instantiateinstance)
- [instantiateLazyInstance](AccountAddress.AccountAddress.md#instantiatelazyinstance)
- [queryObjects](AccountAddress.AccountAddress.md#queryobjects)
- [updateObjects](AccountAddress.AccountAddress.md#updateobjects)

## Constructors

### constructor

• **new AccountAddress**(`add?`): [`AccountAddress`](AccountAddress.AccountAddress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `add?` | `Partial`\<[`IAccountAddress`](../interfaces/IAccountAddress.IAccountAddress.md)\> |

#### Returns

[`AccountAddress`](AccountAddress.AccountAddress.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[AccountAddress.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L23)

## Properties

### accountId

• **accountId**: `number`

#### Implementation of

[IAccountAddress](../interfaces/IAccountAddress.IAccountAddress.md).[accountId](../interfaces/IAccountAddress.IAccountAddress.md#accountid)

#### Defined in

[AccountAddress.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L18)

___

### accountUniqueId

• **accountUniqueId**: `string`

#### Implementation of

[IAccountAddress](../interfaces/IAccountAddress.IAccountAddress.md).[accountUniqueId](../interfaces/IAccountAddress.IAccountAddress.md#accountuniqueid)

#### Defined in

[AccountAddress.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L19)

___

### addressId

• **addressId**: `number`

#### Implementation of

[IAccountAddress](../interfaces/IAccountAddress.IAccountAddress.md).[addressId](../interfaces/IAccountAddress.IAccountAddress.md#addressid)

#### Defined in

[AccountAddress.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L20)

___

### addressUniqueId

• **addressUniqueId**: `string`

#### Implementation of

[IAccountAddress](../interfaces/IAccountAddress.IAccountAddress.md).[addressUniqueId](../interfaces/IAccountAddress.IAccountAddress.md#addressuniqueid)

#### Defined in

[AccountAddress.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L21)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

[IAccountAddress](../interfaces/IAccountAddress.IAccountAddress.md).[id](../interfaces/IAccountAddress.IAccountAddress.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[AccountAddress.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L16)

___

### metadata

• **metadata**: `string`

#### Defined in

[AccountAddress.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L17)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[AccountAddress.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L4)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[AccountAddress.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L22)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IAccountAddress](../interfaces/IAccountAddress.IAccountAddress.md).[uniqueId](../interfaces/IAccountAddress.IAccountAddress.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[AccountAddress.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L15)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `accountUniqueId` | `string` |
| `addressId` | `number` |
| `addressUniqueId` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[AccountAddress.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L5)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`AccountAddress`](AccountAddress.AccountAddress.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccountAddress`](../interfaces/IAccountAddress.IAccountAddress.md)\> |

#### Returns

`Promise`\<[`AccountAddress`](AccountAddress.AccountAddress.md)\>

#### Defined in

[AccountAddress.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L24)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`AccountAddress`](AccountAddress.AccountAddress.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccountAddress`](../interfaces/IAccountAddress.IAccountAddress.md)\> |

#### Returns

`Promise`\<[`AccountAddress`](AccountAddress.AccountAddress.md)\>

#### Defined in

[AccountAddress.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/AccountAddress.d.ts#L25)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L43)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/d75ed234762a2079e483ac83f4ba3e96f36d2f8b/src/types/flux_types/FluxType.d.ts#L41)
