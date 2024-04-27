[fluxpayments](../README.md) / [Modules](../modules.md) / [AccountAddressQuery](../modules/AccountAddressQuery.md) / AccountAddressQuery

# Class: AccountAddressQuery

[AccountAddressQuery](../modules/AccountAddressQuery.md).AccountAddressQuery

This is an object that is used to query for products.

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`AccountAddress`](AccountAddress.AccountAddress.md)\>

  ↳ **`AccountAddressQuery`**

## Implements

- [`IAccountAddressQuery`](../modules/IAccountAddressQuery.md#iaccountaddressquery)

## Table of contents

### Constructors

- [constructor](AccountAddressQuery.AccountAddressQuery.md#constructor)

### Properties

- [accountId](AccountAddressQuery.AccountAddressQuery.md#accountid)
- [accountUniqueId](AccountAddressQuery.AccountAddressQuery.md#accountuniqueid)
- [additionalSearchOptions](AccountAddressQuery.AccountAddressQuery.md#additionalsearchoptions)
- [addressId](AccountAddressQuery.AccountAddressQuery.md#addressid)
- [addressUniqueId](AccountAddressQuery.AccountAddressQuery.md#addressuniqueid)
- [attachedObject](AccountAddressQuery.AccountAddressQuery.md#attachedobject)
- [id](AccountAddressQuery.AccountAddressQuery.md#id)
- [lookupPage](AccountAddressQuery.AccountAddressQuery.md#lookuppage)
- [objectType](AccountAddressQuery.AccountAddressQuery.md#objecttype)
- [pagination](AccountAddressQuery.AccountAddressQuery.md#pagination)
- [uniqueId](AccountAddressQuery.AccountAddressQuery.md#uniqueid)

### Methods

- [serialize](AccountAddressQuery.AccountAddressQuery.md#serialize)
- [createQuery](AccountAddressQuery.AccountAddressQuery.md#createquery)

## Constructors

### constructor

• **new AccountAddressQuery**(`accQ?`): [`AccountAddressQuery`](AccountAddressQuery.AccountAddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountAddressQuery`](../modules/IAccountAddressQuery.md#iaccountaddressquery) |

#### Returns

[`AccountAddressQuery`](AccountAddressQuery.AccountAddressQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[AccountAddressQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L26)

## Properties

### accountId

• **accountId**: `number`

#### Implementation of

IAccountAddressQuery.accountId

#### Defined in

[AccountAddressQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L22)

___

### accountUniqueId

• **accountUniqueId**: `string`

#### Implementation of

IAccountAddressQuery.accountUniqueId

#### Defined in

[AccountAddressQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L24)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IAccountAddressQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/BaseQuery.d.ts#L8)

___

### addressId

• **addressId**: `number`

#### Implementation of

IAccountAddressQuery.addressId

#### Defined in

[AccountAddressQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L23)

___

### addressUniqueId

• **addressUniqueId**: `string`

#### Implementation of

IAccountAddressQuery.addressUniqueId

#### Defined in

[AccountAddressQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L25)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`AccountAddress`](AccountAddress.AccountAddress.md)

#### Type declaration

• **new attachedObject**(`o?`): [`AccountAddress`](AccountAddress.AccountAddress.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`AccountAddress`](AccountAddress.AccountAddress.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/BaseQuery.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

IAccountAddressQuery.id

#### Defined in

[AccountAddressQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L20)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/BaseQuery.d.ts#L9)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[AccountAddressQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L21)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IAccountAddressQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/BaseQuery.d.ts#L7)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

IAccountAddressQuery.uniqueId

#### Defined in

[AccountAddressQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L19)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `accountUniqueId` | `string` |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `addressId` | `number` |
| `addressUniqueId` | `string` |
| `id` | `number` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](PaginationSupport.PaginationSupport.md) |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[AccountAddressQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L8)

___

### createQuery

▸ **createQuery**(`accQ?`): [`AccountAddressQuery`](AccountAddressQuery.AccountAddressQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountAddressQuery`](../modules/IAccountAddressQuery.md#iaccountaddressquery) |

#### Returns

[`AccountAddressQuery`](AccountAddressQuery.AccountAddressQuery.md)

#### Defined in

[AccountAddressQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/82e2d72e458e007dc21b647e0f5b217557c83ee3/src/types/flux_types/AccountAddressQuery.d.ts#L27)
