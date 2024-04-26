[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/AddressQuery](../modules/flux_types_AddressQuery.md) / AddressQuery

# Class: AddressQuery

[flux\_types/AddressQuery](../modules/flux_types_AddressQuery.md).AddressQuery

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`Address`](flux_types_Address.Address.md)\>

  ↳ **`AddressQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_AddressQuery.AddressQuery.md#constructor)

### Properties

- [additionalSearchOptions](flux_types_AddressQuery.AddressQuery.md#additionalsearchoptions)
- [addressState](flux_types_AddressQuery.AddressQuery.md#addressstate)
- [attachedObject](flux_types_AddressQuery.AddressQuery.md#attachedobject)
- [city](flux_types_AddressQuery.AddressQuery.md#city)
- [country](flux_types_AddressQuery.AddressQuery.md#country)
- [id](flux_types_AddressQuery.AddressQuery.md#id)
- [lookupPage](flux_types_AddressQuery.AddressQuery.md#lookuppage)
- [metadata](flux_types_AddressQuery.AddressQuery.md#metadata)
- [objectType](flux_types_AddressQuery.AddressQuery.md#objecttype)
- [pagination](flux_types_AddressQuery.AddressQuery.md#pagination)
- [streetAddress](flux_types_AddressQuery.AddressQuery.md#streetaddress)
- [uniqueId](flux_types_AddressQuery.AddressQuery.md#uniqueid)
- [zipCode](flux_types_AddressQuery.AddressQuery.md#zipcode)

### Methods

- [serialize](flux_types_AddressQuery.AddressQuery.md#serialize)
- [createQuery](flux_types_AddressQuery.AddressQuery.md#createquery)

## Constructors

### constructor

• **new AddressQuery**(`addressQuery?`): [`AddressQuery`](flux_types_AddressQuery.AddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressQuery?` | [`IAddressQuery`](../modules/flux_types_IAddressQuery.md#iaddressquery) |

#### Returns

[`AddressQuery`](flux_types_AddressQuery.AddressQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L26)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### addressState

• **addressState**: `string`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L23)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Address`](flux_types_Address.Address.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Address`](flux_types_Address.Address.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Address`](flux_types_Address.Address.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### city

• **city**: `string`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L24)

___

### country

• **country**: `string`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L21)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L18)

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

[src/types/flux_types/AddressQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L25)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### streetAddress

• **streetAddress**: `string`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L20)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L17)

___

### zipCode

• **zipCode**: `string`

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L22)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `city` | `string` |
| `country` | `string` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md) |
| `streetAddress` | `string` |
| `uniqueId` | `string` |
| `zipCode` | `string` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`accQ?`): [`AddressQuery`](flux_types_AddressQuery.AddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAddressQuery`](../modules/flux_types_IAddressQuery.md#iaddressquery) |

#### Returns

[`AddressQuery`](flux_types_AddressQuery.AddressQuery.md)

#### Defined in

[src/types/flux_types/AddressQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AddressQuery.d.ts#L27)
