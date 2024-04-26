[fluxpayments](../README.md) / [Modules](../modules.md) / [ProductQuery](../modules/ProductQuery.md) / ProductQuery

# Class: ProductQuery

[ProductQuery](../modules/ProductQuery.md).ProductQuery

This is an object that is used to query for products.

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Product`](Product.Product.md)\>

  ↳ **`ProductQuery`**

## Implements

- [`IProductQuery`](../modules/IProductQuery.md#iproductquery)

## Table of contents

### Constructors

- [constructor](ProductQuery.ProductQuery.md#constructor)

### Properties

- [additionalSearchOptions](ProductQuery.ProductQuery.md#additionalsearchoptions)
- [attachedObject](ProductQuery.ProductQuery.md#attachedobject)
- [category](ProductQuery.ProductQuery.md#category)
- [id](ProductQuery.ProductQuery.md#id)
- [lookupPage](ProductQuery.ProductQuery.md#lookuppage)
- [metadata](ProductQuery.ProductQuery.md#metadata)
- [name](ProductQuery.ProductQuery.md#name)
- [objectType](ProductQuery.ProductQuery.md#objecttype)
- [pagination](ProductQuery.ProductQuery.md#pagination)
- [subscriptionInterval](ProductQuery.ProductQuery.md#subscriptioninterval)
- [type](ProductQuery.ProductQuery.md#type)
- [uniqueId](ProductQuery.ProductQuery.md#uniqueid)

### Methods

- [serialize](ProductQuery.ProductQuery.md#serialize)
- [createQuery](ProductQuery.ProductQuery.md#createquery)

## Constructors

### constructor

• **new ProductQuery**(`productQuery?`): [`ProductQuery`](ProductQuery.ProductQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `productQuery?` | [`IProductQuery`](../modules/IProductQuery.md#iproductquery) |

#### Returns

[`ProductQuery`](ProductQuery.ProductQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[ProductQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L28)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IProductQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Product`](Product.Product.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Product`](Product.Product.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Product`](Product.Product.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/BaseQuery.d.ts#L6)

___

### category

• `Optional` **category**: `string`

#### Implementation of

IProductQuery.category

#### Defined in

[ProductQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L26)

___

### id

• **id**: `number`

#### Implementation of

IProductQuery.id

#### Defined in

[ProductQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L21)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Implementation of

IProductQuery.metadata

#### Defined in

[ProductQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L20)

___

### name

• `Optional` **name**: `string`

#### Implementation of

IProductQuery.name

#### Defined in

[ProductQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L23)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[ProductQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L27)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IProductQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/BaseQuery.d.ts#L7)

___

### subscriptionInterval

• `Optional` **subscriptionInterval**: ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"``

#### Implementation of

IProductQuery.subscriptionInterval

#### Defined in

[ProductQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L25)

___

### type

• `Optional` **type**: ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"``

#### Implementation of

IProductQuery.type

#### Defined in

[ProductQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L24)

___

### uniqueId

• `Optional` **uniqueId**: `string`

#### Implementation of

IProductQuery.uniqueId

#### Defined in

[ProductQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L22)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `category` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `name` | `string` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](PaginationSupport.PaginationSupport.md) |
| `subscriptionInterval` | ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"`` |
| `type` | ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"`` |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[ProductQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`ipq`): [`ProductQuery`](ProductQuery.ProductQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IProductQuery`](../modules/IProductQuery.md#iproductquery) |

#### Returns

[`ProductQuery`](ProductQuery.ProductQuery.md)

#### Defined in

[ProductQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/efcba18692b7f92bba6ef1c13f0a3de2d9e4339c/src/types/flux_types/ProductQuery.d.ts#L29)
