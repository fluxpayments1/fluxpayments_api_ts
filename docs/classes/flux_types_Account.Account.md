[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/Account](../modules/flux_types_Account.md) / Account

# Class: Account

[flux\_types/Account](../modules/flux_types_Account.md).Account

## Hierarchy

- [`FluxType`](flux_types_FluxType.FluxType.md)

  ↳ **`Account`**

## Implements

- [`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)

## Table of contents

### Constructors

- [constructor](flux_types_Account.Account.md#constructor)

### Properties

- [accountEmail](flux_types_Account.Account.md#accountemail)
- [accountUserType](flux_types_Account.Account.md#accountusertype)
- [currency](flux_types_Account.Account.md#currency)
- [dataTableMetadata](flux_types_Account.Account.md#datatablemetadata)
- [defaultPaymentMethodId](flux_types_Account.Account.md#defaultpaymentmethodid)
- [defaultPaymentMethodUniqueId](flux_types_Account.Account.md#defaultpaymentmethoduniqueid)
- [defaultShippingAddressId](flux_types_Account.Account.md#defaultshippingaddressid)
- [defaultShippingAddressUniqueId](flux_types_Account.Account.md#defaultshippingaddressuniqueid)
- [firstName](flux_types_Account.Account.md#firstname)
- [id](flux_types_Account.Account.md#id)
- [lastName](flux_types_Account.Account.md#lastname)
- [metadata](flux_types_Account.Account.md#metadata)
- [middleName](flux_types_Account.Account.md#middlename)
- [obName](flux_types_Account.Account.md#obname)
- [obType](flux_types_Account.Account.md#obtype)
- [objectType](flux_types_Account.Account.md#objecttype)
- [uniqueId](flux_types_Account.Account.md#uniqueid)

### Methods

- [addAddress](flux_types_Account.Account.md#addaddress)
- [delete](flux_types_Account.Account.md#delete)
- [generateAccountSession](flux_types_Account.Account.md#generateaccountsession)
- [getAddressses](flux_types_Account.Account.md#getaddressses)
- [getDefaultPaymentMethod](flux_types_Account.Account.md#getdefaultpaymentmethod)
- [getDefaultShippingAddress](flux_types_Account.Account.md#getdefaultshippingaddress)
- [getId](flux_types_Account.Account.md#getid)
- [getObjectType](flux_types_Account.Account.md#getobjecttype)
- [merge](flux_types_Account.Account.md#merge)
- [persist](flux_types_Account.Account.md#persist)
- [refresh](flux_types_Account.Account.md#refresh)
- [removeAddress](flux_types_Account.Account.md#removeaddress)
- [serialize](flux_types_Account.Account.md#serialize)
- [setDefaultPaymentMethod](flux_types_Account.Account.md#setdefaultpaymentmethod)
- [setDefaultShippingAddress](flux_types_Account.Account.md#setdefaultshippingaddress)
- [setId](flux_types_Account.Account.md#setid)
- [createInstanceLazy](flux_types_Account.Account.md#createinstancelazy)
- [createInstanceSafe](flux_types_Account.Account.md#createinstancesafe)
- [createObjects](flux_types_Account.Account.md#createobjects)
- [createObjectsSafe](flux_types_Account.Account.md#createobjectssafe)
- [deleteObjects](flux_types_Account.Account.md#deleteobjects)
- [generateSession](flux_types_Account.Account.md#generatesession)
- [generateStatelessSession](flux_types_Account.Account.md#generatestatelesssession)
- [getBackendConn](flux_types_Account.Account.md#getbackendconn)
- [getObjectsById](flux_types_Account.Account.md#getobjectsbyid)
- [getObjectsByIdInternal](flux_types_Account.Account.md#getobjectsbyidinternal)
- [instantiateInstance](flux_types_Account.Account.md#instantiateinstance)
- [instantiateLazyInstance](flux_types_Account.Account.md#instantiatelazyinstance)
- [queryObjects](flux_types_Account.Account.md#queryobjects)
- [updateObjects](flux_types_Account.Account.md#updateobjects)

## Constructors

### constructor

• **new Account**(`account?`): [`Account`](flux_types_Account.Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account?` | `Partial`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\> |

#### Returns

[`Account`](flux_types_Account.Account.md)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[constructor](flux_types_FluxType.FluxType.md#constructor)

#### Defined in

[src/types/flux_types/Account.d.ts:92](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L92)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[accountEmail](../interfaces/flux_types_IAccount.IAccount.md#accountemail)

#### Defined in

[src/types/flux_types/Account.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L29)

___

### accountUserType

• **accountUserType**: [`AccountUserType`](../enums/flux_types_AccountUserType.AccountUserType.md)

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[accountUserType](../interfaces/flux_types_IAccount.IAccount.md#accountusertype)

#### Defined in

[src/types/flux_types/Account.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L33)

___

### currency

• **currency**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[currency](../interfaces/flux_types_IAccount.IAccount.md#currency)

#### Defined in

[src/types/flux_types/Account.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L25)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[dataTableMetadata](flux_types_FluxType.FluxType.md#datatablemetadata)

#### Defined in

[src/types/flux_types/FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L6)

___

### defaultPaymentMethodId

• `Private` **defaultPaymentMethodId**: `any`

#### Defined in

[src/types/flux_types/Account.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L36)

___

### defaultPaymentMethodUniqueId

• `Private` **defaultPaymentMethodUniqueId**: `any`

#### Defined in

[src/types/flux_types/Account.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L37)

___

### defaultShippingAddressId

• `Private` **defaultShippingAddressId**: `any`

#### Defined in

[src/types/flux_types/Account.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L34)

___

### defaultShippingAddressUniqueId

• `Private` **defaultShippingAddressUniqueId**: `any`

#### Defined in

[src/types/flux_types/Account.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L35)

___

### firstName

• **firstName**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[firstName](../interfaces/flux_types_IAccount.IAccount.md#firstname)

#### Defined in

[src/types/flux_types/Account.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L30)

___

### id

• **id**: `number`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[id](../interfaces/flux_types_IAccount.IAccount.md#id)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[id](flux_types_FluxType.FluxType.md#id)

#### Defined in

[src/types/flux_types/Account.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L26)

___

### lastName

• **lastName**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[lastName](../interfaces/flux_types_IAccount.IAccount.md#lastname)

#### Defined in

[src/types/flux_types/Account.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L32)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[metadata](../interfaces/flux_types_IAccount.IAccount.md#metadata)

#### Defined in

[src/types/flux_types/Account.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L28)

___

### middleName

• **middleName**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[middleName](../interfaces/flux_types_IAccount.IAccount.md#middlename)

#### Defined in

[src/types/flux_types/Account.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L31)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[obName](flux_types_FluxType.FluxType.md#obname)

#### Defined in

[src/types/flux_types/Account.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L8)

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

[src/types/flux_types/Account.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L38)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IAccount](../interfaces/flux_types_IAccount.IAccount.md).[uniqueId](../interfaces/flux_types_IAccount.IAccount.md#uniqueid)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[uniqueId](flux_types_FluxType.FluxType.md#uniqueid)

#### Defined in

[src/types/flux_types/Account.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L27)

## Methods

### addAddress

▸ **addAddress**(`address`): `Promise`\<`void`\>

Adds addresses to the current context.

Automatically merges the addresses into the
account, no need to call merge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](flux_types_Address.Address.md) \| [`Address`](flux_types_Address.Address.md)[] | An address or list of addresses |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/flux_types/Account.d.ts:56](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L56)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[delete](flux_types_FluxType.FluxType.md#delete)

#### Defined in

[src/types/flux_types/FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L20)

___

### generateAccountSession

▸ **generateAccountSession**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/flux_types/Account.d.ts:94](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L94)

___

### getAddressses

▸ **getAddressses**(): `Promise`\<[`Address`](flux_types_Address.Address.md)[]\>

'
Gets the addresses of the current context.

#### Returns

`Promise`\<[`Address`](flux_types_Address.Address.md)[]\>

Promise resolving to the addresses
of the current context.

#### Defined in

[src/types/flux_types/Account.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L46)

___

### getDefaultPaymentMethod

▸ **getDefaultPaymentMethod**(): `Promise`\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

#### Returns

`Promise`\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

#### Defined in

[src/types/flux_types/Account.d.ts:91](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L91)

___

### getDefaultShippingAddress

▸ **getDefaultShippingAddress**(): `Promise`\<[`Address`](flux_types_Address.Address.md)\>

Gets the default shipping address of the current
context. Returns undefined if there is no shipping
address

#### Returns

`Promise`\<[`Address`](flux_types_Address.Address.md)\>

A promise resolving to the default shipping address for the account

#### Defined in

[src/types/flux_types/Account.d.ts:89](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L89)

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

### removeAddress

▸ **removeAddress**(`address`): `Promise`\<[`Address`](flux_types_Address.Address.md)[]\>

Removes addresses from the current context.

This method DOES NOT delete the underlying addresses.
If you need to delete the address, call delete() on
the address object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](flux_types_Address.Address.md) \| [`Address`](flux_types_Address.Address.md)[] | An address or list of addresses which are already persisted / merged to the flux system. Returns the addresses that were passed for removal |

#### Returns

`Promise`\<[`Address`](flux_types_Address.Address.md)[]\>

#### Defined in

[src/types/flux_types/Account.d.ts:70](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L70)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountEmail` | `string` |
| `accountUserType` | [`AccountUserType`](../enums/flux_types_AccountUserType.AccountUserType.md) |
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

[FluxType](flux_types_FluxType.FluxType.md).[serialize](flux_types_FluxType.FluxType.md#serialize)

#### Defined in

[src/types/flux_types/Account.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L9)

___

### setDefaultPaymentMethod

▸ **setDefaultPaymentMethod**(`ob`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/flux_types/Account.d.ts:90](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L90)

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
| `ob` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`Address`](flux_types_Address.Address.md) |

#### Returns

`Promise`\<`void`\>

Promise that resolves to the updated account

#### Defined in

[src/types/flux_types/Account.d.ts:81](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L81)

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

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Account`](flux_types_Account.Account.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`Account`](flux_types_Account.Account.md)\>

#### Defined in

[src/types/flux_types/Account.d.ts:95](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L95)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`Account`](flux_types_Account.Account.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\> |

#### Returns

`Promise`\<[`Account`](flux_types_Account.Account.md)\>

#### Defined in

[src/types/flux_types/Account.d.ts:96](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L96)

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

### generateSession

▸ **generateSession**(`arg`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`IAccount`](../interfaces/flux_types_IAccount.IAccount.md) \| [`Account`](flux_types_Account.Account.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/flux_types/Account.d.ts:93](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Account.d.ts#L93)

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
