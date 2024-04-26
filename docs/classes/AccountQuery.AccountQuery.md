[fluxpayments](../README.md) / [Modules](../modules.md) / [AccountQuery](../modules/AccountQuery.md) / AccountQuery

# Class: AccountQuery

[AccountQuery](../modules/AccountQuery.md).AccountQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`Account`](Account.Account.md)\>

  ↳ **`AccountQuery`**

## Implements

- [`IAccountQuery`](../modules/IAccountQuery.md#iaccountquery)

## Table of contents

### Constructors

- [constructor](AccountQuery.AccountQuery.md#constructor)

### Properties

- [accountEmail](AccountQuery.AccountQuery.md#accountemail)
- [accountUserType](AccountQuery.AccountQuery.md#accountusertype)
- [additionalSearchOptions](AccountQuery.AccountQuery.md#additionalsearchoptions)
- [attachedObject](AccountQuery.AccountQuery.md#attachedobject)
- [defaultPaymentMethodId](AccountQuery.AccountQuery.md#defaultpaymentmethodid)
- [defaultPaymentMethodUniqueId](AccountQuery.AccountQuery.md#defaultpaymentmethoduniqueid)
- [defaultShippingAddressId](AccountQuery.AccountQuery.md#defaultshippingaddressid)
- [defaultShippingAddressUniqueId](AccountQuery.AccountQuery.md#defaultshippingaddressuniqueid)
- [firstName](AccountQuery.AccountQuery.md#firstname)
- [id](AccountQuery.AccountQuery.md#id)
- [lastName](AccountQuery.AccountQuery.md#lastname)
- [lookupPage](AccountQuery.AccountQuery.md#lookuppage)
- [metadata](AccountQuery.AccountQuery.md#metadata)
- [middleName](AccountQuery.AccountQuery.md#middlename)
- [objectType](AccountQuery.AccountQuery.md#objecttype)
- [pagination](AccountQuery.AccountQuery.md#pagination)
- [uniqueId](AccountQuery.AccountQuery.md#uniqueid)

### Methods

- [serialize](AccountQuery.AccountQuery.md#serialize)
- [createQuery](AccountQuery.AccountQuery.md#createquery)

## Constructors

### constructor

• **new AccountQuery**(`accQ?`): [`AccountQuery`](AccountQuery.AccountQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountQuery`](../modules/IAccountQuery.md#iaccountquery) |

#### Returns

[`AccountQuery`](AccountQuery.AccountQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[AccountQuery.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L36)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Implementation of

IAccountQuery.accountEmail

#### Defined in

[AccountQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L26)

___

### accountUserType

• **accountUserType**: [`AccountUserType`](../enums/AccountUserType.AccountUserType.md)

#### Implementation of

IAccountQuery.accountUserType

#### Defined in

[AccountQuery.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L30)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IAccountQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L8)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`Account`](Account.Account.md)

#### Type declaration

• **new attachedObject**(`o?`): [`Account`](Account.Account.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`Account`](Account.Account.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L6)

___

### defaultPaymentMethodId

• **defaultPaymentMethodId**: `number`

#### Defined in

[AccountQuery.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L33)

___

### defaultPaymentMethodUniqueId

• **defaultPaymentMethodUniqueId**: `string`

#### Defined in

[AccountQuery.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L34)

___

### defaultShippingAddressId

• **defaultShippingAddressId**: `number`

#### Defined in

[AccountQuery.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L31)

___

### defaultShippingAddressUniqueId

• **defaultShippingAddressUniqueId**: `string`

#### Defined in

[AccountQuery.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L32)

___

### firstName

• **firstName**: `string`

#### Implementation of

IAccountQuery.firstName

#### Defined in

[AccountQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L27)

___

### id

• **id**: `number`

#### Implementation of

IAccountQuery.id

#### Defined in

[AccountQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L23)

___

### lastName

• **lastName**: `string`

#### Implementation of

IAccountQuery.lastName

#### Defined in

[AccountQuery.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L29)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Implementation of

IAccountQuery.metadata

#### Defined in

[AccountQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L25)

___

### middleName

• **middleName**: `string`

#### Implementation of

IAccountQuery.middleName

#### Defined in

[AccountQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L28)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[AccountQuery.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L35)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IAccountQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L7)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

IAccountQuery.uniqueId

#### Defined in

[AccountQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L24)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountEmail` | `string` |
| `accountUserType` | [`AccountUserType`](../enums/AccountUserType.AccountUserType.md) |
| `additionalSearchOptions` | [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[] |
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
| `pagination` | [`PaginationSupport`](PaginationSupport.PaginationSupport.md) |
| `uniqueId` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[AccountQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L6)

___

### createQuery

▸ **createQuery**(`accQ?`): [`AccountQuery`](AccountQuery.AccountQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accQ?` | [`IAccountQuery`](../modules/IAccountQuery.md#iaccountquery) |

#### Returns

[`AccountQuery`](AccountQuery.AccountQuery.md)

#### Defined in

[AccountQuery.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/AccountQuery.d.ts#L37)
