[fluxpayments](../README.md) / [Modules](../modules.md) / [AddressQuery](../modules/AddressQuery.md) / AddressQuery

# Class: AddressQuery

[AddressQuery](../modules/AddressQuery.md).AddressQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Address`](Address.Address.md)\>

  ↳ **`AddressQuery`**

## Table of contents

### Constructors

- [constructor](AddressQuery.AddressQuery.md#constructor)

### Properties

- [additionalSearchOptions](AddressQuery.AddressQuery.md#additionalsearchoptions)
- [addressState](AddressQuery.AddressQuery.md#addressstate)
- [attachedObject](AddressQuery.AddressQuery.md#attachedobject)
- [city](AddressQuery.AddressQuery.md#city)
- [country](AddressQuery.AddressQuery.md#country)
- [id](AddressQuery.AddressQuery.md#id)
- [lookupPage](AddressQuery.AddressQuery.md#lookuppage)
- [metadata](AddressQuery.AddressQuery.md#metadata)
- [objectType](AddressQuery.AddressQuery.md#objecttype)
- [pagination](AddressQuery.AddressQuery.md#pagination)
- [streetAddress](AddressQuery.AddressQuery.md#streetaddress)
- [uniqueId](AddressQuery.AddressQuery.md#uniqueid)
- [zipCode](AddressQuery.AddressQuery.md#zipcode)

### Methods

- [serialize](AddressQuery.AddressQuery.md#serialize)
- [createQuery](AddressQuery.AddressQuery.md#createquery)

## Constructors

### constructor

• **new AddressQuery**(`addressQuery?`): [`AddressQuery`](AddressQuery.AddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressQuery?` | [`IAddressQuery`](../modules/IAddressQuery.md#iaddressquery) |

#### Returns

[`AddressQuery`](AddressQuery.AddressQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[AddressQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L26)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/BaseQuery.d.ts#L8)

___

### addressState

• **addressState**: `string`

#### Defined in

[AddressQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L23)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Address`](Address.Address.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Address`](Address.Address.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Address`](Address.Address.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/BaseQuery.d.ts#L6)

___

### city

• **city**: `string`

#### Defined in

[AddressQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L24)

___

### country

• **country**: `string`

#### Defined in

[AddressQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L21)

___

### id

• **id**: `number`

#### Defined in

[AddressQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L18)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Defined in

[AddressQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[AddressQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L25)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/BaseQuery.d.ts#L7)

___

### streetAddress

• **streetAddress**: `string`

#### Defined in

[AddressQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L20)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[AddressQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L17)

___

### zipCode

• **zipCode**: `string`

#### Defined in

[AddressQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L22)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `city` | `string` |
| `country` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](PaginationSupport.PaginationSupport.md) |
| `streetAddress` | `string` |
| `uniqueId` | `string` |
| `zipCode` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[AddressQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`accQ?`): [`AddressQuery`](AddressQuery.AddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAddressQuery`](../modules/IAddressQuery.md#iaddressquery) |

#### Returns

[`AddressQuery`](AddressQuery.AddressQuery.md)

#### Defined in

[AddressQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c54a119feb98af50fd12f7dd7996b859433d96e6/src/types/flux_types/AddressQuery.d.ts#L27)