[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/ProductQuery](../modules/flux_types_ProductQuery.md) / ProductQuery

# Class: ProductQuery

[flux\_types/ProductQuery](../modules/flux_types_ProductQuery.md).ProductQuery

This is an object that is used to query for products.

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`Product`](flux_types_Product.Product.md)\>

  ↳ **`ProductQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_ProductQuery.ProductQuery.md#constructor)

### Properties

- [additionalSearchOptions](flux_types_ProductQuery.ProductQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_ProductQuery.ProductQuery.md#attachedobject)
- [category](flux_types_ProductQuery.ProductQuery.md#category)
- [id](flux_types_ProductQuery.ProductQuery.md#id)
- [lookupPage](flux_types_ProductQuery.ProductQuery.md#lookuppage)
- [metadata](flux_types_ProductQuery.ProductQuery.md#metadata)
- [name](flux_types_ProductQuery.ProductQuery.md#name)
- [objectType](flux_types_ProductQuery.ProductQuery.md#objecttype)
- [pagination](flux_types_ProductQuery.ProductQuery.md#pagination)
- [subscriptionInterval](flux_types_ProductQuery.ProductQuery.md#subscriptioninterval)
- [type](flux_types_ProductQuery.ProductQuery.md#type)
- [uniqueId](flux_types_ProductQuery.ProductQuery.md#uniqueid)

### Methods

- [serialize](flux_types_ProductQuery.ProductQuery.md#serialize)
- [createQuery](flux_types_ProductQuery.ProductQuery.md#createquery)

## Constructors

### constructor

• **new ProductQuery**(`productQuery?`): [`ProductQuery`](flux_types_ProductQuery.ProductQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `productQuery?` | [`IProductQuery`](../modules/flux_types_IProductQuery.md#iproductquery) |

#### Returns

[`ProductQuery`](flux_types_ProductQuery.ProductQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L28)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Product`](flux_types_Product.Product.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Product`](flux_types_Product.Product.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Product`](flux_types_Product.Product.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### category

• `Optional` **category**: `string`

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L26)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L21)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[lookupPage](flux_types_BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L20)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L23)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L27)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### subscriptionInterval

• `Optional` **subscriptionInterval**: ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"``

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L25)

___

### type

• `Optional` **type**: ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"``

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L24)

___

### uniqueId

• `Optional` **uniqueId**: `number`

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L22)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `category` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `name` | `string` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md) |
| `subscriptionInterval` | ``"DAILY"`` \| ``"WEEKLY"`` \| ``"MONTHLY"`` \| ``"YEARLY"`` |
| `type` | ``"SUBSCRIPTION"`` \| ``"SERVICE"`` \| ``"PHYSICAL_PRODUCT"`` |
| `uniqueId` | `number` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`ipq`): [`ProductQuery`](flux_types_ProductQuery.ProductQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IProductQuery`](../modules/flux_types_IProductQuery.md#iproductquery) |

#### Returns

[`ProductQuery`](flux_types_ProductQuery.ProductQuery.md)

#### Defined in

[src/types/flux_types/ProductQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ProductQuery.d.ts#L29)
