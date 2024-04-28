[fluxpayments](../README.md) / [Modules](../modules.md) / [Account](../modules/Account.md) / Account

# Class: Account

[Account](../modules/Account.md).Account

Class for managing accounts
stored in the flux system.
Use:
```typescript
import { flux } from "fluxpayments/lib";
import { Account } from "fluxpayments/flux_types";
await flux (
  "public_key",
  "private_key",
  "username",
  "password"
);
let firstAccount : Account = await Account.createInstanceSafe({
    accountUserType: AccountUserType.CUSTOMER,
    uniqueId: "TESTACCOUNT"
});
```

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`Account`**

## Implements

- [`IAccount`](../interfaces/IAccount.IAccount.md)

## Table of contents

### Constructors

- [constructor](Account.Account.md#constructor)

### Properties

- [accountEmail](Account.Account.md#accountemail)
- [accountUserType](Account.Account.md#accountusertype)
- [currency](Account.Account.md#currency)
- [dataTableMetadata](Account.Account.md#datatablemetadata)
- [firstName](Account.Account.md#firstname)
- [id](Account.Account.md#id)
- [lastName](Account.Account.md#lastname)
- [metadata](Account.Account.md#metadata)
- [middleName](Account.Account.md#middlename)
- [obName](Account.Account.md#obname)
- [obType](Account.Account.md#obtype)
- [objectType](Account.Account.md#objecttype)
- [uniqueId](Account.Account.md#uniqueid)

### Methods

- [addAddress](Account.Account.md#addaddress)
- [delete](Account.Account.md#delete)
- [generateAccountSession](Account.Account.md#generateaccountsession)
- [getAddresses](Account.Account.md#getaddresses)
- [getDefaultPaymentMethod](Account.Account.md#getdefaultpaymentmethod)
- [getDefaultShippingAddress](Account.Account.md#getdefaultshippingaddress)
- [getId](Account.Account.md#getid)
- [getInstallmentTransactions](Account.Account.md#getinstallmenttransactions)
- [getObjectType](Account.Account.md#getobjecttype)
- [getPaymentMethods](Account.Account.md#getpaymentmethods)
- [getPurchasedProducts](Account.Account.md#getpurchasedproducts)
- [getRecurringTransactions](Account.Account.md#getrecurringtransactions)
- [getTransactions](Account.Account.md#gettransactions)
- [merge](Account.Account.md#merge)
- [persist](Account.Account.md#persist)
- [refresh](Account.Account.md#refresh)
- [removeAddress](Account.Account.md#removeaddress)
- [serialize](Account.Account.md#serialize)
- [setDefaultPaymentMethod](Account.Account.md#setdefaultpaymentmethod)
- [setDefaultShippingAddress](Account.Account.md#setdefaultshippingaddress)
- [setId](Account.Account.md#setid)
- [createInstanceLazy](Account.Account.md#createinstancelazy)
- [createInstanceSafe](Account.Account.md#createinstancesafe)
- [createObjects](Account.Account.md#createobjects)
- [createObjectsSafe](Account.Account.md#createobjectssafe)
- [deleteObjects](Account.Account.md#deleteobjects)
- [generateSession](Account.Account.md#generatesession)
- [generateStatelessSession](Account.Account.md#generatestatelesssession)
- [getBackendConn](Account.Account.md#getbackendconn)
- [getLinkedObjectsById](Account.Account.md#getlinkedobjectsbyid)
- [getObjectsById](Account.Account.md#getobjectsbyid)
- [getObjectsByIdInternal](Account.Account.md#getobjectsbyidinternal)
- [instantiateInstance](Account.Account.md#instantiateinstance)
- [instantiateLazyInstance](Account.Account.md#instantiatelazyinstance)
- [queryObjects](Account.Account.md#queryobjects)
- [updateObjects](Account.Account.md#updateobjects)

## Constructors

### constructor

• **new Account**(`account?`): [`Account`](Account.Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account?` | `Partial`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\> |

#### Returns

[`Account`](Account.Account.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[Account.d.ts:119](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L119)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[accountEmail](../interfaces/IAccount.IAccount.md#accountemail)

#### Defined in

[Account.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L48)

___

### accountUserType

• **accountUserType**: [`AccountUserType`](../enums/AccountUserType.AccountUserType.md)

Describes the type of the account

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[accountUserType](../interfaces/IAccount.IAccount.md#accountusertype)

#### Defined in

[Account.d.ts:55](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L55)

___

### currency

• **currency**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[currency](../interfaces/IAccount.IAccount.md#currency)

#### Defined in

[Account.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L44)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L6)

___

### firstName

• **firstName**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[firstName](../interfaces/IAccount.IAccount.md#firstname)

#### Defined in

[Account.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L49)

___

### id

• **id**: `number`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[id](../interfaces/IAccount.IAccount.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[Account.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L45)

___

### lastName

• **lastName**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[lastName](../interfaces/IAccount.IAccount.md#lastname)

#### Defined in

[Account.d.ts:51](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L51)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[metadata](../interfaces/IAccount.IAccount.md#metadata)

#### Defined in

[Account.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L47)

___

### middleName

• **middleName**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[middleName](../interfaces/IAccount.IAccount.md#middlename)

#### Defined in

[Account.d.ts:50](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L50)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[Account.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L27)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[Account.d.ts:60](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L60)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IAccount](../interfaces/IAccount.IAccount.md).[uniqueId](../interfaces/IAccount.IAccount.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[Account.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L46)

## Methods

### addAddress

▸ **addAddress**(`address`): `Promise`\<`void`\>

Adds addresses to the current context.

Automatically merges the addresses into the
account, no need to call merge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.Address.md) \| [`Address`](Address.Address.md)[] | An address or list of addresses |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:78](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L78)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L20)

___

### generateAccountSession

▸ **generateAccountSession**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Account.d.ts:121](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L121)

___

### getAddresses

▸ **getAddresses**(): `Promise`\<[`Address`](Address.Address.md)[]\>

'
Gets the addresses of the current context.

#### Returns

`Promise`\<[`Address`](Address.Address.md)[]\>

Promise resolving to the addresses
of the current context.

#### Defined in

[Account.d.ts:68](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L68)

___

### getDefaultPaymentMethod

▸ **getDefaultPaymentMethod**(): `Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

#### Returns

`Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

#### Defined in

[Account.d.ts:118](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L118)

___

### getDefaultShippingAddress

▸ **getDefaultShippingAddress**(): `Promise`\<[`Address`](Address.Address.md)\>

Gets the default shipping address of the current
context. Returns undefined if there is no shipping
address

#### Returns

`Promise`\<[`Address`](Address.Address.md)\>

A promise resolving to the default shipping address for the account

#### Defined in

[Account.d.ts:116](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L116)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L14)

___

### getInstallmentTransactions

▸ **getInstallmentTransactions**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:81](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L81)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L11)

___

### getPaymentMethods

▸ **getPaymentMethods**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:82](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L82)

___

### getPurchasedProducts

▸ **getPurchasedProducts**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:79](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L79)

___

### getRecurringTransactions

▸ **getRecurringTransactions**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:80](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L80)

___

### getTransactions

▸ **getTransactions**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:83](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L83)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L35)

___

### removeAddress

▸ **removeAddress**(`address`): `Promise`\<[`Address`](Address.Address.md)[]\>

Removes addresses from the current context.

This method DOES NOT delete the underlying addresses.
If you need to delete the address, call delete() on
the address object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.Address.md) \| [`Address`](Address.Address.md)[] | An address or list of addresses which are already persisted / merged to the flux system. Returns the addresses that were passed for removal |

#### Returns

`Promise`\<[`Address`](Address.Address.md)[]\>

#### Defined in

[Account.d.ts:97](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L97)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountEmail` | `string` |
| `accountUserType` | [`AccountUserType`](../enums/AccountUserType.AccountUserType.md) |
| `currency` | `string` |
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
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[Account.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L28)

___

### setDefaultPaymentMethod

▸ **setDefaultPaymentMethod**(`ob`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`PaymentMethod`](PaymentMethod.PaymentMethod.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Account.d.ts:117](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L117)

___

### setDefaultShippingAddress

▸ **setDefaultShippingAddress**(`ob`): `Promise`\<`void`\>

Sets the Default shipping address of the
current context.

Automatically merges the changes into the
account, no need to call merge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`Address`](Address.Address.md) |

#### Returns

`Promise`\<`void`\>

Promise that resolves to the updated account

#### Defined in

[Account.d.ts:108](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L108)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Account`](Account.Account.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`Account`](Account.Account.md)\>

#### Defined in

[Account.d.ts:122](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L122)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`Account`](Account.Account.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`Account`](Account.Account.md)\>

#### Defined in

[Account.d.ts:123](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L123)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L43)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L40)

___

### generateSession

▸ **generateSession**(`arg`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`IAccount`](../interfaces/IAccount.IAccount.md) \| [`Account`](Account.Account.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Account.d.ts:120](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/Account.d.ts#L120)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L16)

___

### queryObjects

▸ **queryObjects**\<`T`, `U`\>(`q`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[queryObjects](FluxType.FluxType.md#queryobjects)

#### Defined in

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/8b9bde6dc6ac051a0793d52f79c70d7a64483cf0/src/types/flux_types/FluxType.d.ts#L41)
