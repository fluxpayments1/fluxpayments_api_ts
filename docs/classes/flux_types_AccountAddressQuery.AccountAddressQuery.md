[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/AccountAddressQuery](../modules/flux_types_AccountAddressQuery.md) / AccountAddressQuery

# Class: AccountAddressQuery

[flux\_types/AccountAddressQuery](../modules/flux_types_AccountAddressQuery.md).AccountAddressQuery

This is an object that is used to query for products.

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`AccountAddress`](flux_types_AccountAddress.AccountAddress.md)\>

  ↳ **`AccountAddressQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_AccountAddressQuery.AccountAddressQuery.md#constructor)

### Properties

- [accountId](flux_types_AccountAddressQuery.AccountAddressQuery.md#accountid)
- [accountUniqueId](flux_types_AccountAddressQuery.AccountAddressQuery.md#accountuniqueid)
- [additionalSearchOptions](flux_types_AccountAddressQuery.AccountAddressQuery.md#additionalsearchoptions)
- [addressId](flux_types_AccountAddressQuery.AccountAddressQuery.md#addressid)
- [addressUniqueId](flux_types_AccountAddressQuery.AccountAddressQuery.md#addressuniqueid)
- [attachedObject](flux_types_AccountAddressQuery.AccountAddressQuery.md#attachedobject)
- [id](flux_types_AccountAddressQuery.AccountAddressQuery.md#id)
- [lookupPage](flux_types_AccountAddressQuery.AccountAddressQuery.md#lookuppage)
- [objectType](flux_types_AccountAddressQuery.AccountAddressQuery.md#objecttype)
- [pagination](flux_types_AccountAddressQuery.AccountAddressQuery.md#pagination)
- [uniqueId](flux_types_AccountAddressQuery.AccountAddressQuery.md#uniqueid)

### Methods

- [serialize](flux_types_AccountAddressQuery.AccountAddressQuery.md#serialize)
- [createQuery](flux_types_AccountAddressQuery.AccountAddressQuery.md#createquery)

## Constructors

### constructor

• **new AccountAddressQuery**(`accQ?`): [`AccountAddressQuery`](flux_types_AccountAddressQuery.AccountAddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountAddressQuery`](../modules/flux_types_IAccountAddressQuery.md#iaccountaddressquery) |

#### Returns

[`AccountAddressQuery`](flux_types_AccountAddressQuery.AccountAddressQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L26)

## Properties

### accountId

• **accountId**: `number`

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L22)

___

### accountUniqueId

• **accountUniqueId**: `string`

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L24)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### addressId

• **addressId**: `number`

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L23)

___

### addressUniqueId

• **addressUniqueId**: `string`

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L25)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`AccountAddress`](flux_types_AccountAddress.AccountAddress.md)

#### Type declaration

• **new attachedObject**(`o?`): [`AccountAddress`](flux_types_AccountAddress.AccountAddress.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`AccountAddress`](flux_types_AccountAddress.AccountAddress.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L20)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[lookupPage](flux_types_BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L9)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L21)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L19)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `accountUniqueId` | `string` |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `addressId` | `number` |
| `addressUniqueId` | `string` |
| `id` | `number` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md) |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`accQ?`): [`AccountAddressQuery`](flux_types_AccountAddressQuery.AccountAddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountAddressQuery`](../modules/flux_types_IAccountAddressQuery.md#iaccountaddressquery) |

#### Returns

[`AccountAddressQuery`](flux_types_AccountAddressQuery.AccountAddressQuery.md)

#### Defined in

[src/types/flux_types/AccountAddressQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountAddressQuery.d.ts#L27)
