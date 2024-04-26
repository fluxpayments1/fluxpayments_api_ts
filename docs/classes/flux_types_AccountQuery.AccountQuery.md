[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/AccountQuery](../modules/flux_types_AccountQuery.md) / AccountQuery

# Class: AccountQuery

[flux\_types/AccountQuery](../modules/flux_types_AccountQuery.md).AccountQuery

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`Account`](flux_types_Account.Account.md)\>

  ↳ **`AccountQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_AccountQuery.AccountQuery.md#constructor)

### Properties

- [accountEmail](flux_types_AccountQuery.AccountQuery.md#accountemail)
- [accountUserType](flux_types_AccountQuery.AccountQuery.md#accountusertype)
- [additionalSearchOptions](flux_types_AccountQuery.AccountQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_AccountQuery.AccountQuery.md#attachedobject)
- [defaultPaymentMethodId](flux_types_AccountQuery.AccountQuery.md#defaultpaymentmethodid)
- [defaultPaymentMethodUniqueId](flux_types_AccountQuery.AccountQuery.md#defaultpaymentmethoduniqueid)
- [defaultShippingAddressId](flux_types_AccountQuery.AccountQuery.md#defaultshippingaddressid)
- [defaultShippingAddressUniqueId](flux_types_AccountQuery.AccountQuery.md#defaultshippingaddressuniqueid)
- [firstName](flux_types_AccountQuery.AccountQuery.md#firstname)
- [id](flux_types_AccountQuery.AccountQuery.md#id)
- [lastName](flux_types_AccountQuery.AccountQuery.md#lastname)
- [lookupPage](flux_types_AccountQuery.AccountQuery.md#lookuppage)
- [metadata](flux_types_AccountQuery.AccountQuery.md#metadata)
- [middleName](flux_types_AccountQuery.AccountQuery.md#middlename)
- [objectType](flux_types_AccountQuery.AccountQuery.md#objecttype)
- [pagination](flux_types_AccountQuery.AccountQuery.md#pagination)
- [uniqueId](flux_types_AccountQuery.AccountQuery.md#uniqueid)

### Methods

- [serialize](flux_types_AccountQuery.AccountQuery.md#serialize)
- [createQuery](flux_types_AccountQuery.AccountQuery.md#createquery)

## Constructors

### constructor

• **new AccountQuery**(`accQ?`): [`AccountQuery`](flux_types_AccountQuery.AccountQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountQuery`](../modules/flux_types_IAccountQuery.md#iaccountquery) |

#### Returns

[`AccountQuery`](flux_types_AccountQuery.AccountQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L36)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L26)

___

### accountUserType

• **accountUserType**: [`AccountUserType`](../enums/flux_types_AccountUserType.AccountUserType.md)

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L30)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Account`](flux_types_Account.Account.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Account`](flux_types_Account.Account.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Account`](flux_types_Account.Account.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### defaultPaymentMethodId

• **defaultPaymentMethodId**: `number`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L33)

___

### defaultPaymentMethodUniqueId

• **defaultPaymentMethodUniqueId**: `string`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L34)

___

### defaultShippingAddressId

• **defaultShippingAddressId**: `number`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L31)

___

### defaultShippingAddressUniqueId

• **defaultShippingAddressUniqueId**: `string`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L32)

___

### firstName

• **firstName**: `string`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L27)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L23)

___

### lastName

• **lastName**: `string`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L29)

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

[src/types/flux_types/AccountQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L25)

___

### middleName

• **middleName**: `string`

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L28)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L35)

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

[src/types/flux_types/AccountQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L24)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountEmail` | `string` |
| `accountUserType` | [`AccountUserType`](../enums/flux_types_AccountUserType.AccountUserType.md) |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
| `defaultPaymentMethodId` | `number` |
| `defaultPaymentMethodUniqueId` | `string` |
| `defaultShippingAddressId` | `number` |
| `defaultShippingAddressUniqueId` | `string` |
| `firstName` | `string` |
| `id` | `number` |
| `lastName` | `string` |
| `metadata` | `string` |
| `middleName` | `string` |
| `objectType` | `string` |
| `pagination` | [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md) |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L6)

___

### createQuery

▸ **createQuery**(`accQ?`): [`AccountQuery`](flux_types_AccountQuery.AccountQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountQuery`](../modules/flux_types_IAccountQuery.md#iaccountquery) |

#### Returns

[`AccountQuery`](flux_types_AccountQuery.AccountQuery.md)

#### Defined in

[src/types/flux_types/AccountQuery.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/AccountQuery.d.ts#L37)
