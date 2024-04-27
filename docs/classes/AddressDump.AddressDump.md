[fluxpayments](../README.md) / [Modules](../modules.md) / [AddressDump](../modules/AddressDump.md) / AddressDump

# Class: AddressDump

[AddressDump](../modules/AddressDump.md).AddressDump

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`AddressDump`**

## Implements

- [`IAddress`](../interfaces/IAddress.IAddress.md)

## Table of contents

### Constructors

- [constructor](AddressDump.AddressDump.md#constructor)

### Properties

- [addressState](AddressDump.AddressDump.md#addressstate)
- [city](AddressDump.AddressDump.md#city)
- [country](AddressDump.AddressDump.md#country)
- [dataTableMetadata](AddressDump.AddressDump.md#datatablemetadata)
- [dumpId](AddressDump.AddressDump.md#dumpid)
- [id](AddressDump.AddressDump.md#id)
- [metadata](AddressDump.AddressDump.md#metadata)
- [obName](AddressDump.AddressDump.md#obname)
- [obType](AddressDump.AddressDump.md#obtype)
- [objectType](AddressDump.AddressDump.md#objecttype)
- [streetAddress](AddressDump.AddressDump.md#streetaddress)
- [uniqueId](AddressDump.AddressDump.md#uniqueid)
- [zipCode](AddressDump.AddressDump.md#zipcode)

### Methods

- [delete](AddressDump.AddressDump.md#delete)
- [getId](AddressDump.AddressDump.md#getid)
- [getInterface](AddressDump.AddressDump.md#getinterface)
- [getObjectType](AddressDump.AddressDump.md#getobjecttype)
- [merge](AddressDump.AddressDump.md#merge)
- [persist](AddressDump.AddressDump.md#persist)
- [refresh](AddressDump.AddressDump.md#refresh)
- [serialize](AddressDump.AddressDump.md#serialize)
- [setId](AddressDump.AddressDump.md#setid)
- [createInstanceLazy](AddressDump.AddressDump.md#createinstancelazy)
- [createInstanceSafe](AddressDump.AddressDump.md#createinstancesafe)
- [createObjects](AddressDump.AddressDump.md#createobjects)
- [createObjectsSafe](AddressDump.AddressDump.md#createobjectssafe)
- [deleteObjects](AddressDump.AddressDump.md#deleteobjects)
- [generateStatelessSession](AddressDump.AddressDump.md#generatestatelesssession)
- [getBackendConn](AddressDump.AddressDump.md#getbackendconn)
- [getLinkedObjectsById](AddressDump.AddressDump.md#getlinkedobjectsbyid)
- [getObjectsById](AddressDump.AddressDump.md#getobjectsbyid)
- [getObjectsByIdInternal](AddressDump.AddressDump.md#getobjectsbyidinternal)
- [instantiateInstance](AddressDump.AddressDump.md#instantiateinstance)
- [instantiateLazyInstance](AddressDump.AddressDump.md#instantiatelazyinstance)
- [queryObjects](AddressDump.AddressDump.md#queryobjects)
- [updateObjects](AddressDump.AddressDump.md#updateobjects)

## Constructors

### constructor

• **new AddressDump**(`addDump?`): [`AddressDump`](AddressDump.AddressDump.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addDump?` | `any` |

#### Returns

[`AddressDump`](AddressDump.AddressDump.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[AddressDump.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L16)

## Properties

### addressState

• **addressState**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[addressState](../interfaces/IAddress.IAddress.md#addressstate)

#### Defined in

[AddressDump.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L13)

___

### city

• **city**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[city](../interfaces/IAddress.IAddress.md#city)

#### Defined in

[AddressDump.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L14)

___

### country

• **country**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[country](../interfaces/IAddress.IAddress.md#country)

#### Defined in

[AddressDump.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L11)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L6)

___

### dumpId

• **dumpId**: [`DumpId`](DumpId.DumpId.md)

#### Defined in

[AddressDump.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L8)

___

### id

• **id**: `number`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[id](../interfaces/IAddress.IAddress.md#id)

#### Inherited from

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L13)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[metadata](../interfaces/IAddress.IAddress.md#metadata)

#### Defined in

[AddressDump.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L9)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[AddressDump.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L6)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[AddressDump.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L7)

___

### streetAddress

• **streetAddress**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[streetAddress](../interfaces/IAddress.IAddress.md#streetaddress)

#### Defined in

[AddressDump.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L10)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[uniqueId](../interfaces/IAddress.IAddress.md#uniqueid)

#### Inherited from

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L7)

___

### zipCode

• **zipCode**: `string`

#### Implementation of

[IAddress](../interfaces/IAddress.IAddress.md).[zipCode](../interfaces/IAddress.IAddress.md#zipcode)

#### Defined in

[AddressDump.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L12)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L14)

___

### getInterface

▸ **getInterface**(): [`IAddress`](../interfaces/IAddress.IAddress.md)

#### Returns

[`IAddress`](../interfaces/IAddress.IAddress.md)

#### Defined in

[AddressDump.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L15)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `void`

#### Returns

`void`

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[AddressDump.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L5)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`AddressDump`](AddressDump.AddressDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAddress`](../interfaces/IAddress.IAddress.md)\> |

#### Returns

`Promise`\<[`AddressDump`](AddressDump.AddressDump.md)\>

#### Defined in

[AddressDump.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L17)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`AddressDump`](AddressDump.AddressDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAddress`](../interfaces/IAddress.IAddress.md)\> |

#### Returns

`Promise`\<[`AddressDump`](AddressDump.AddressDump.md)\>

#### Defined in

[AddressDump.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/AddressDump.d.ts#L18)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L43)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType](FluxType.FluxType.md).[queryObjects](FluxType.FluxType.md#queryobjects)

#### Defined in

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f14432fd6aadb07b43e1c06e160a95112711319f/src/types/flux_types/FluxType.d.ts#L41)
