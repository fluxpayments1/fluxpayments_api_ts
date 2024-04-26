[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/ProductDump](../modules/flux_types_ProductDump.md) / ProductDump

# Class: ProductDump

[flux\_types/ProductDump](../modules/flux_types_ProductDump.md).ProductDump

## Hierarchy

- [`FluxType`](flux_types_FluxType.FluxType.md)

  ↳ **`ProductDump`**

## Implements

- [`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)

## Table of contents

### Constructors

- [constructor](flux_types_ProductDump.ProductDump.md#constructor)

### Properties

- [category](flux_types_ProductDump.ProductDump.md#category)
- [dataTableMetadata](flux_types_ProductDump.ProductDump.md#datatablemetadata)
- [description](flux_types_ProductDump.ProductDump.md#description)
- [dumpId](flux_types_ProductDump.ProductDump.md#dumpid)
- [enableBackorderedProducts](flux_types_ProductDump.ProductDump.md#enablebackorderedproducts)
- [enableInventoryManagement](flux_types_ProductDump.ProductDump.md#enableinventorymanagement)
- [id](flux_types_ProductDump.ProductDump.md#id)
- [imageUrl](flux_types_ProductDump.ProductDump.md#imageurl)
- [inventoryCount](flux_types_ProductDump.ProductDump.md#inventorycount)
- [metadata](flux_types_ProductDump.ProductDump.md#metadata)
- [name](flux_types_ProductDump.ProductDump.md#name)
- [obName](flux_types_ProductDump.ProductDump.md#obname)
- [obType](flux_types_ProductDump.ProductDump.md#obtype)
- [objectType](flux_types_ProductDump.ProductDump.md#objecttype)
- [orderQuantity](flux_types_ProductDump.ProductDump.md#orderquantity)
- [price](flux_types_ProductDump.ProductDump.md#price)
- [sku](flux_types_ProductDump.ProductDump.md#sku)
- [subscriptionInterval](flux_types_ProductDump.ProductDump.md#subscriptioninterval)
- [type](flux_types_ProductDump.ProductDump.md#type)
- [uniqueId](flux_types_ProductDump.ProductDump.md#uniqueid)

### Methods

- [delete](flux_types_ProductDump.ProductDump.md#delete)
- [getId](flux_types_ProductDump.ProductDump.md#getid)
- [getInterface](flux_types_ProductDump.ProductDump.md#getinterface)
- [getObjectType](flux_types_ProductDump.ProductDump.md#getobjecttype)
- [merge](flux_types_ProductDump.ProductDump.md#merge)
- [persist](flux_types_ProductDump.ProductDump.md#persist)
- [refresh](flux_types_ProductDump.ProductDump.md#refresh)
- [serialize](flux_types_ProductDump.ProductDump.md#serialize)
- [setId](flux_types_ProductDump.ProductDump.md#setid)
- [createInstanceLazy](flux_types_ProductDump.ProductDump.md#createinstancelazy)
- [createInstanceSafe](flux_types_ProductDump.ProductDump.md#createinstancesafe)
- [createObjects](flux_types_ProductDump.ProductDump.md#createobjects)
- [createObjectsSafe](flux_types_ProductDump.ProductDump.md#createobjectssafe)
- [deleteObjects](flux_types_ProductDump.ProductDump.md#deleteobjects)
- [generateStatelessSession](flux_types_ProductDump.ProductDump.md#generatestatelesssession)
- [getBackendConn](flux_types_ProductDump.ProductDump.md#getbackendconn)
- [getObjectsById](flux_types_ProductDump.ProductDump.md#getobjectsbyid)
- [getObjectsByIdInternal](flux_types_ProductDump.ProductDump.md#getobjectsbyidinternal)
- [instantiateInstance](flux_types_ProductDump.ProductDump.md#instantiateinstance)
- [instantiateLazyInstance](flux_types_ProductDump.ProductDump.md#instantiatelazyinstance)
- [queryObjects](flux_types_ProductDump.ProductDump.md#queryobjects)
- [updateObjects](flux_types_ProductDump.ProductDump.md#updateobjects)

## Constructors

### constructor

• **new ProductDump**(`prodDump?`): [`ProductDump`](flux_types_ProductDump.ProductDump.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prodDump?` | `any` |

#### Returns

[`ProductDump`](flux_types_ProductDump.ProductDump.md)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[constructor](flux_types_FluxType.FluxType.md#constructor)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L23)

## Properties

### category

• **category**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[category](../interfaces/flux_types_IProduct.IProduct.md#category)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L18)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[dataTableMetadata](flux_types_FluxType.FluxType.md#datatablemetadata)

#### Defined in

[src/types/flux_types/FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L6)

___

### description

• **description**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[description](../interfaces/flux_types_IProduct.IProduct.md#description)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L11)

___

### dumpId

• **dumpId**: [`DumpId`](flux_types_DumpId.DumpId.md)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L8)

___

### enableBackorderedProducts

• **enableBackorderedProducts**: `boolean`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[enableBackorderedProducts](../interfaces/flux_types_IProduct.IProduct.md#enablebackorderedproducts)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L19)

___

### enableInventoryManagement

• **enableInventoryManagement**: `boolean`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[enableInventoryManagement](../interfaces/flux_types_IProduct.IProduct.md#enableinventorymanagement)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L20)

___

### id

• **id**: `number`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[id](../interfaces/flux_types_IProduct.IProduct.md#id)

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[id](flux_types_FluxType.FluxType.md#id)

#### Defined in

[src/types/flux_types/FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L13)

___

### imageUrl

• **imageUrl**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[imageUrl](../interfaces/flux_types_IProduct.IProduct.md#imageurl)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L17)

___

### inventoryCount

• **inventoryCount**: `number`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[inventoryCount](../interfaces/flux_types_IProduct.IProduct.md#inventorycount)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L16)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[metadata](../interfaces/flux_types_IProduct.IProduct.md#metadata)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L9)

___

### name

• **name**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[name](../interfaces/flux_types_IProduct.IProduct.md#name)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L10)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[obName](flux_types_FluxType.FluxType.md#obname)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L5)

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

[src/types/flux_types/ProductDump.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L6)

___

### orderQuantity

• **orderQuantity**: `number`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[orderQuantity](../interfaces/flux_types_IProduct.IProduct.md#orderquantity)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L21)

___

### price

• **price**: `number`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[price](../interfaces/flux_types_IProduct.IProduct.md#price)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L12)

___

### sku

• **sku**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[sku](../interfaces/flux_types_IProduct.IProduct.md#sku)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L13)

___

### subscriptionInterval

• **subscriptionInterval**: ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"``

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[subscriptionInterval](../interfaces/flux_types_IProduct.IProduct.md#subscriptioninterval)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L15)

___

### type

• **type**: ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"``

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[type](../interfaces/flux_types_IProduct.IProduct.md#type)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L14)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IProduct](../interfaces/flux_types_IProduct.IProduct.md).[uniqueId](../interfaces/flux_types_IProduct.IProduct.md#uniqueid)

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

▸ **getInterface**(): [`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)

#### Returns

[`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)

#### Defined in

[src/types/flux_types/ProductDump.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L22)

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

[src/types/flux_types/ProductDump.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L7)

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

▸ **createInstanceLazy**(`acc`): `Promise`\<[`ProductDump`](flux_types_ProductDump.ProductDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)\> |

#### Returns

`Promise`\<[`ProductDump`](flux_types_ProductDump.ProductDump.md)\>

#### Defined in

[src/types/flux_types/ProductDump.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L24)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`ProductDump`](flux_types_ProductDump.ProductDump.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)\> |

#### Returns

`Promise`\<[`ProductDump`](flux_types_ProductDump.ProductDump.md)\>

#### Defined in

[src/types/flux_types/ProductDump.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductDump.d.ts#L25)

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
