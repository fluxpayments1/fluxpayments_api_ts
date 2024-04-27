[fluxpayments](../README.md) / [Modules](../modules.md) / [Product](../modules/Product.md) / Product

# Class: Product

[Product](../modules/Product.md).Product

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`Product`**

## Implements

- [`IProduct`](../interfaces/IProduct.IProduct.md)

## Table of contents

### Constructors

- [constructor](Product.Product.md#constructor)

### Properties

- [category](Product.Product.md#category)
- [currency](Product.Product.md#currency)
- [dataTableMetadata](Product.Product.md#datatablemetadata)
- [description](Product.Product.md#description)
- [enableBackorderedProducts](Product.Product.md#enablebackorderedproducts)
- [enableInventoryManagement](Product.Product.md#enableinventorymanagement)
- [id](Product.Product.md#id)
- [imageUrl](Product.Product.md#imageurl)
- [inventoryCount](Product.Product.md#inventorycount)
- [metadata](Product.Product.md#metadata)
- [name](Product.Product.md#name)
- [obName](Product.Product.md#obname)
- [obType](Product.Product.md#obtype)
- [objectType](Product.Product.md#objecttype)
- [orderQuantity](Product.Product.md#orderquantity)
- [price](Product.Product.md#price)
- [sku](Product.Product.md#sku)
- [subscriptionInterval](Product.Product.md#subscriptioninterval)
- [type](Product.Product.md#type)
- [uniqueId](Product.Product.md#uniqueid)

### Methods

- [decrementInventoryCount](Product.Product.md#decrementinventorycount)
- [delete](Product.Product.md#delete)
- [getId](Product.Product.md#getid)
- [getObjectType](Product.Product.md#getobjecttype)
- [incrementInventoryCount](Product.Product.md#incrementinventorycount)
- [merge](Product.Product.md#merge)
- [persist](Product.Product.md#persist)
- [refresh](Product.Product.md#refresh)
- [serialize](Product.Product.md#serialize)
- [setId](Product.Product.md#setid)
- [createInstanceLazy](Product.Product.md#createinstancelazy)
- [createInstanceSafe](Product.Product.md#createinstancesafe)
- [createObjects](Product.Product.md#createobjects)
- [createObjectsSafe](Product.Product.md#createobjectssafe)
- [deleteObjects](Product.Product.md#deleteobjects)
- [generateStatelessSession](Product.Product.md#generatestatelesssession)
- [getBackendConn](Product.Product.md#getbackendconn)
- [getLinkedObjectsById](Product.Product.md#getlinkedobjectsbyid)
- [getObjectsById](Product.Product.md#getobjectsbyid)
- [getObjectsByIdInternal](Product.Product.md#getobjectsbyidinternal)
- [instantiateInstance](Product.Product.md#instantiateinstance)
- [instantiateLazyInstance](Product.Product.md#instantiatelazyinstance)
- [queryObjects](Product.Product.md#queryobjects)
- [updateObjects](Product.Product.md#updateobjects)

## Constructors

### constructor

• **new Product**(`prod?`): [`Product`](Product.Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prod?` | `Partial`\<[`IProduct`](../interfaces/IProduct.IProduct.md)\> |

#### Returns

[`Product`](Product.Product.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[Product.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L41)

## Properties

### category

• **category**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[category](../interfaces/IProduct.IProduct.md#category)

#### Defined in

[Product.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L37)

___

### currency

• **currency**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[currency](../interfaces/IProduct.IProduct.md#currency)

#### Defined in

[Product.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L24)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L6)

___

### description

• **description**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[description](../interfaces/IProduct.IProduct.md#description)

#### Defined in

[Product.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L30)

___

### enableBackorderedProducts

• **enableBackorderedProducts**: `boolean`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[enableBackorderedProducts](../interfaces/IProduct.IProduct.md#enablebackorderedproducts)

#### Defined in

[Product.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L39)

___

### enableInventoryManagement

• **enableInventoryManagement**: `boolean`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[enableInventoryManagement](../interfaces/IProduct.IProduct.md#enableinventorymanagement)

#### Defined in

[Product.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L38)

___

### id

• **id**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[id](../interfaces/IProduct.IProduct.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[Product.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L27)

___

### imageUrl

• **imageUrl**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[imageUrl](../interfaces/IProduct.IProduct.md#imageurl)

#### Defined in

[Product.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L36)

___

### inventoryCount

• **inventoryCount**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[inventoryCount](../interfaces/IProduct.IProduct.md#inventorycount)

#### Defined in

[Product.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L35)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[metadata](../interfaces/IProduct.IProduct.md#metadata)

#### Defined in

[Product.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L28)

___

### name

• **name**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[name](../interfaces/IProduct.IProduct.md#name)

#### Defined in

[Product.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L29)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[Product.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L4)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[Product.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L40)

___

### orderQuantity

• **orderQuantity**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[orderQuantity](../interfaces/IProduct.IProduct.md#orderquantity)

#### Defined in

[Product.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L25)

___

### price

• **price**: `number`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[price](../interfaces/IProduct.IProduct.md#price)

#### Defined in

[Product.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L31)

___

### sku

• **sku**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[sku](../interfaces/IProduct.IProduct.md#sku)

#### Defined in

[Product.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L32)

___

### subscriptionInterval

• **subscriptionInterval**: ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"``

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[subscriptionInterval](../interfaces/IProduct.IProduct.md#subscriptioninterval)

#### Defined in

[Product.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L34)

___

### type

• **type**: ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"``

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[type](../interfaces/IProduct.IProduct.md#type)

#### Defined in

[Product.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L33)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IProduct](../interfaces/IProduct.IProduct.md).[uniqueId](../interfaces/IProduct.IProduct.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[Product.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L26)

## Methods

### decrementInventoryCount

▸ **decrementInventoryCount**(`quantity`): `Promise`\<[`Product`](Product.Product.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quantity` | `number` |

#### Returns

`Promise`\<[`Product`](Product.Product.md)\>

#### Defined in

[Product.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L43)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L11)

___

### incrementInventoryCount

▸ **incrementInventoryCount**(`quantity`): `Promise`\<[`Product`](Product.Product.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quantity` | `number` |

#### Returns

`Promise`\<[`Product`](Product.Product.md)\>

#### Defined in

[Product.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L42)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `category` | `string` |
| `currency` | `string` |
| `description` | `string` |
| `enableBackorderedProducts` | `boolean` |
| `enableInventoryManagement` | `boolean` |
| `id` | `number` |
| `imageUrl` | `string` |
| `inventoryCount` | `number` |
| `metadata` | `string` |
| `name` | `string` |
| `objectType` | `string` |
| `orderQuantity` | `number` |
| `price` | `number` |
| `sku` | `string` |
| `subscriptionInterval` | ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"`` |
| `type` | ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"`` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[Product.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L5)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Product`](Product.Product.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IProduct`](../interfaces/IProduct.IProduct.md)\> |

#### Returns

`Promise`\<[`Product`](Product.Product.md)\>

#### Defined in

[Product.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L44)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`Product`](Product.Product.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IProduct`](../interfaces/IProduct.IProduct.md)\> |

#### Returns

`Promise`\<[`Product`](Product.Product.md)\>

#### Defined in

[Product.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/Product.d.ts#L45)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L43)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/f6a77327cdb29c423e341df6d3689b76b0e6cf53/src/types/flux_types/FluxType.d.ts#L41)
