[fluxpayments](../README.md) / [Modules](../modules.md) / [ProductDump](../modules/ProductDump.md) / ProductDump

# Class: ProductDump

[ProductDump](../modules/ProductDump.md).ProductDump

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`ProductDump`**

## Implements

- [`IProduct`](../interfaces/IProduct.IProduct.md)

## Table of contents

### Constructors

- [constructor](ProductDump.ProductDump.md#constructor)

### Properties

- [category](ProductDump.ProductDump.md#category)
- [dataTableMetadata](ProductDump.ProductDump.md#datatablemetadata)
- [description](ProductDump.ProductDump.md#description)
- [dumpId](ProductDump.ProductDump.md#dumpid)
- [enableBackorderedProducts](ProductDump.ProductDump.md#enablebackorderedproducts)
- [enableInventoryManagement](ProductDump.ProductDump.md#enableinventorymanagement)
- [id](ProductDump.ProductDump.md#id)
- [imageUrl](ProductDump.ProductDump.md#imageurl)
- [inventoryCount](ProductDump.ProductDump.md#inventorycount)
- [metadata](ProductDump.ProductDump.md#metadata)
- [name](ProductDump.ProductDump.md#name)
- [obName](ProductDump.ProductDump.md#obname)
- [obType](ProductDump.ProductDump.md#obtype)
- [objectType](ProductDump.ProductDump.md#objecttype)
- [orderQuantity](ProductDump.ProductDump.md#orderquantity)
- [price](ProductDump.ProductDump.md#price)
- [sku](ProductDump.ProductDump.md#sku)
- [subscriptionInterval](ProductDump.ProductDump.md#subscriptioninterval)
- [type](ProductDump.ProductDump.md#type)
- [uniqueId](ProductDump.ProductDump.md#uniqueid)

### Methods

- [delete](ProductDump.ProductDump.md#delete)
- [getId](ProductDump.ProductDump.md#getid)
- [getInterface](ProductDump.ProductDump.md#getinterface)
- [getObjectType](ProductDump.ProductDump.md#getobjecttype)
- [merge](ProductDump.ProductDump.md#merge)
- [persist](ProductDump.ProductDump.md#persist)
- [refresh](ProductDump.ProductDump.md#refresh)
- [serialize](ProductDump.ProductDump.md#serialize)
- [setId](ProductDump.ProductDump.md#setid)
- [createInstanceLazy](ProductDump.ProductDump.md#createinstancelazy)
- [createInstanceSafe](ProductDump.ProductDump.md#createinstancesafe)
- [createObjects](ProductDump.ProductDump.md#createobjects)
- [createObjectsSafe](ProductDump.ProductDump.md#createobjectssafe)
- [deleteObjects](ProductDump.ProductDump.md#deleteobjects)
- [generateStatelessSession](ProductDump.ProductDump.md#generatestatelesssession)
- [getBackendConn](ProductDump.ProductDump.md#getbackendconn)
- [getObjectsById](ProductDump.ProductDump.md#getobjectsbyid)
- [getObjectsByIdInternal](ProductDump.ProductDump.md#getobjectsbyidinternal)
- [instantiateInstance](ProductDump.ProductDump.md#instantiateinstance)
- [instantiateLazyInstance](ProductDump.ProductDump.md#instantiatelazyinstance)
- [queryObjects](ProductDump.ProductDump.md#queryobjects)
- [updateObjects](ProductDump.ProductDump.md#updateobjects)

## Constructors

### constructor

• **new ProductDump**(`prodDump?`): [`ProductDump`](ProductDump.ProductDump.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prodDump?` | `any` |

#### Returns

[`ProductDump`](ProductDump.ProductDump.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[ProductDump.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L23)

## Properties

### category

• **category**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[category](../interfaces/IProduct.IProduct.md#category)

#### Defined in

[ProductDump.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L18)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L6)

___

### description

• **description**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[description](../interfaces/IProduct.IProduct.md#description)

#### Defined in

[ProductDump.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L11)

___

### dumpId

• **dumpId**: [`DumpId`](DumpId.DumpId.md)

#### Defined in

[ProductDump.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L8)

___

### enableBackorderedProducts

• **enableBackorderedProducts**: `boolean`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[enableBackorderedProducts](../interfaces/IProduct.IProduct.md#enablebackorderedproducts)

#### Defined in

[ProductDump.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L19)

___

### enableInventoryManagement

• **enableInventoryManagement**: `boolean`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[enableInventoryManagement](../interfaces/IProduct.IProduct.md#enableinventorymanagement)

#### Defined in

[ProductDump.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L20)

___

### id

• **id**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[id](../interfaces/IProduct.IProduct.md#id)

#### Inherited from

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L13)

___

### imageUrl

• **imageUrl**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[imageUrl](../interfaces/IProduct.IProduct.md#imageurl)

#### Defined in

[ProductDump.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L17)

___

### inventoryCount

• **inventoryCount**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[inventoryCount](../interfaces/IProduct.IProduct.md#inventorycount)

#### Defined in

[ProductDump.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L16)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[metadata](../interfaces/IProduct.IProduct.md#metadata)

#### Defined in

[ProductDump.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L9)

___

### name

• **name**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[name](../interfaces/IProduct.IProduct.md#name)

#### Defined in

[ProductDump.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L10)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[ProductDump.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L5)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[ProductDump.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L6)

___

### orderQuantity

• **orderQuantity**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[orderQuantity](../interfaces/IProduct.IProduct.md#orderquantity)

#### Defined in

[ProductDump.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L21)

___

### price

• **price**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[price](../interfaces/IProduct.IProduct.md#price)

#### Defined in

[ProductDump.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L12)

___

### sku

• **sku**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[sku](../interfaces/IProduct.IProduct.md#sku)

#### Defined in

[ProductDump.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L13)

___

### subscriptionInterval

• **subscriptionInterval**: ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"``

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[subscriptionInterval](../interfaces/IProduct.IProduct.md#subscriptioninterval)

#### Defined in

[ProductDump.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L15)

___

### type

• **type**: ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"``

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[type](../interfaces/IProduct.IProduct.md#type)

#### Defined in

[ProductDump.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L14)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[uniqueId](../interfaces/IProduct.IProduct.md#uniqueid)

#### Inherited from

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L7)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L14)

___

### getInterface

▸ **getInterface**(): [`IProduct`](../interfaces/IProduct.IProduct.md)

#### Returns

[`IProduct`](../interfaces/IProduct.IProduct.md)

#### Defined in

[ProductDump.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L22)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `void`

#### Returns

`void`

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[ProductDump.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L7)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`ProductDump`](ProductDump.ProductDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IProduct`](../interfaces/IProduct.IProduct.md)\> |

#### Returns

`Promise`\<[`ProductDump`](ProductDump.ProductDump.md)\>

#### Defined in

[ProductDump.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L24)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`ProductDump`](ProductDump.ProductDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IProduct`](../interfaces/IProduct.IProduct.md)\> |

#### Returns

`Promise`\<[`ProductDump`](ProductDump.ProductDump.md)\>

#### Defined in

[ProductDump.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/ProductDump.d.ts#L25)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L41)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f399fd88ef4597c94780821c6c36c026357f27e7/src/types/flux_types/FluxType.d.ts#L40)
