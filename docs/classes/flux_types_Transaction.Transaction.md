[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/Transaction](../modules/flux_types_Transaction.md) / Transaction

# Class: Transaction

[flux\_types/Transaction](../modules/flux_types_Transaction.md).Transaction

## Hierarchy

- [`FluxType`](flux_types_FluxType.FluxType.md)

  ↳ **`Transaction`**

## Implements

- [`ITransaction`](../interfaces/flux_types_ITransaction.ITransaction.md)

## Table of contents

### Constructors

- [constructor](flux_types_Transaction.Transaction.md#constructor)

### Properties

- [account](flux_types_Transaction.Transaction.md#account)
- [accountDumpId](flux_types_Transaction.Transaction.md#accountdumpid)
- [accountId](flux_types_Transaction.Transaction.md#accountid)
- [accountUniqueId](flux_types_Transaction.Transaction.md#accountuniqueid)
- [currency](flux_types_Transaction.Transaction.md#currency)
- [dataTableMetadata](flux_types_Transaction.Transaction.md#datatablemetadata)
- [id](flux_types_Transaction.Transaction.md#id)
- [inventoryOnlyOrder](flux_types_Transaction.Transaction.md#inventoryonlyorder)
- [obName](flux_types_Transaction.Transaction.md#obname)
- [obType](flux_types_Transaction.Transaction.md#obtype)
- [objectType](flux_types_Transaction.Transaction.md#objecttype)
- [paymentMethod](flux_types_Transaction.Transaction.md#paymentmethod)
- [paymentMethodAddressDumpId](flux_types_Transaction.Transaction.md#paymentmethodaddressdumpid)
- [paymentMethodAddressId](flux_types_Transaction.Transaction.md#paymentmethodaddressid)
- [paymentMethodId](flux_types_Transaction.Transaction.md#paymentmethodid)
- [paymentMethodUniqueId](flux_types_Transaction.Transaction.md#paymentmethoduniqueid)
- [products](flux_types_Transaction.Transaction.md#products)
- [shippingAddress](flux_types_Transaction.Transaction.md#shippingaddress)
- [shippingAddressDumpId](flux_types_Transaction.Transaction.md#shippingaddressdumpid)
- [shippingAddressId](flux_types_Transaction.Transaction.md#shippingaddressid)
- [shippingAddressUniqueId](flux_types_Transaction.Transaction.md#shippingaddressuniqueid)
- [taxRate](flux_types_Transaction.Transaction.md#taxrate)
- [transactionStatus](flux_types_Transaction.Transaction.md#transactionstatus)
- [uniqueId](flux_types_Transaction.Transaction.md#uniqueid)

### Methods

- [delete](flux_types_Transaction.Transaction.md#delete)
- [getAccount](flux_types_Transaction.Transaction.md#getaccount)
- [getCurrentAccount](flux_types_Transaction.Transaction.md#getcurrentaccount)
- [getCurrentPaymentMethodAddress](flux_types_Transaction.Transaction.md#getcurrentpaymentmethodaddress)
- [getCurrentShippingAddress](flux_types_Transaction.Transaction.md#getcurrentshippingaddress)
- [getFluxProducts](flux_types_Transaction.Transaction.md#getfluxproducts)
- [getId](flux_types_Transaction.Transaction.md#getid)
- [getObjectType](flux_types_Transaction.Transaction.md#getobjecttype)
- [getPaymentMethod](flux_types_Transaction.Transaction.md#getpaymentmethod)
- [getPaymentMethodAddress](flux_types_Transaction.Transaction.md#getpaymentmethodaddress)
- [getProducts](flux_types_Transaction.Transaction.md#getproducts)
- [getShippingAddress](flux_types_Transaction.Transaction.md#getshippingaddress)
- [merge](flux_types_Transaction.Transaction.md#merge)
- [persist](flux_types_Transaction.Transaction.md#persist)
- [refresh](flux_types_Transaction.Transaction.md#refresh)
- [serialize](flux_types_Transaction.Transaction.md#serialize)
- [setId](flux_types_Transaction.Transaction.md#setid)
- [createInstanceLazy](flux_types_Transaction.Transaction.md#createinstancelazy)
- [createInstanceSafe](flux_types_Transaction.Transaction.md#createinstancesafe)
- [createObjects](flux_types_Transaction.Transaction.md#createobjects)
- [createObjectsSafe](flux_types_Transaction.Transaction.md#createobjectssafe)
- [deleteObjects](flux_types_Transaction.Transaction.md#deleteobjects)
- [generateStatelessSession](flux_types_Transaction.Transaction.md#generatestatelesssession)
- [getBackendConn](flux_types_Transaction.Transaction.md#getbackendconn)
- [getObjectsById](flux_types_Transaction.Transaction.md#getobjectsbyid)
- [getObjectsByIdInternal](flux_types_Transaction.Transaction.md#getobjectsbyidinternal)
- [instantiateInstance](flux_types_Transaction.Transaction.md#instantiateinstance)
- [instantiateLazyInstance](flux_types_Transaction.Transaction.md#instantiatelazyinstance)
- [queryObjects](flux_types_Transaction.Transaction.md#queryobjects)
- [updateObjects](flux_types_Transaction.Transaction.md#updateobjects)

## Constructors

### constructor

• **new Transaction**(`transaction?`): [`Transaction`](flux_types_Transaction.Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction?` | `Partial`\<[`ITransaction`](../interfaces/flux_types_ITransaction.ITransaction.md)\> |

#### Returns

[`Transaction`](flux_types_Transaction.Transaction.md)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[constructor](flux_types_FluxType.FluxType.md#constructor)

#### Defined in

[src/types/flux_types/Transaction.d.ts:105](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L105)

## Properties

### account

• **account**: [`Account`](flux_types_Account.Account.md)

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[account](../interfaces/flux_types_ITransaction.ITransaction.md#account)

#### Defined in

[src/types/flux_types/Transaction.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L15)

___

### accountDumpId

• **accountDumpId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L23)

___

### accountId

• **accountId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L21)

___

### accountUniqueId

• **accountUniqueId**: `string`

#### Defined in

[src/types/flux_types/Transaction.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L22)

___

### currency

• **currency**: `string`

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[currency](../interfaces/flux_types_ITransaction.ITransaction.md#currency)

#### Defined in

[src/types/flux_types/Transaction.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L28)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[dataTableMetadata](flux_types_FluxType.FluxType.md#datatablemetadata)

#### Defined in

[src/types/flux_types/FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[id](flux_types_FluxType.FluxType.md#id)

#### Defined in

[src/types/flux_types/FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L13)

___

### inventoryOnlyOrder

• **inventoryOnlyOrder**: `boolean`

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[inventoryOnlyOrder](../interfaces/flux_types_ITransaction.ITransaction.md#inventoryonlyorder)

#### Defined in

[src/types/flux_types/Transaction.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L14)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[obName](flux_types_FluxType.FluxType.md#obname)

#### Defined in

[src/types/flux_types/Transaction.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L11)

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

• **objectType**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[objectType](flux_types_FluxType.FluxType.md#objecttype)

#### Defined in

[src/types/flux_types/Transaction.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L32)

___

### paymentMethod

• **paymentMethod**: [`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[paymentMethod](../interfaces/flux_types_ITransaction.ITransaction.md#paymentmethod)

#### Defined in

[src/types/flux_types/Transaction.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L19)

___

### paymentMethodAddressDumpId

• **paymentMethodAddressDumpId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L17)

___

### paymentMethodAddressId

• **paymentMethodAddressId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L20)

___

### paymentMethodId

• **paymentMethodId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L24)

___

### paymentMethodUniqueId

• **paymentMethodUniqueId**: `string`

#### Defined in

[src/types/flux_types/Transaction.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L25)

___

### products

• **products**: [`Product`](flux_types_Product.Product.md)[]

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[products](../interfaces/flux_types_ITransaction.ITransaction.md#products)

#### Defined in

[src/types/flux_types/Transaction.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L33)

___

### shippingAddress

• **shippingAddress**: [`Address`](flux_types_Address.Address.md)

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[shippingAddress](../interfaces/flux_types_ITransaction.ITransaction.md#shippingaddress)

#### Defined in

[src/types/flux_types/Transaction.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L18)

___

### shippingAddressDumpId

• **shippingAddressDumpId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L16)

___

### shippingAddressId

• **shippingAddressId**: `number`

#### Defined in

[src/types/flux_types/Transaction.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L30)

___

### shippingAddressUniqueId

• **shippingAddressUniqueId**: `string`

#### Defined in

[src/types/flux_types/Transaction.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L31)

___

### taxRate

• **taxRate**: `number`

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[taxRate](../interfaces/flux_types_ITransaction.ITransaction.md#taxrate)

#### Defined in

[src/types/flux_types/Transaction.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L27)

___

### transactionStatus

• **transactionStatus**: `string`

#### Defined in

[src/types/flux_types/Transaction.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L29)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[ITransaction](../interfaces/flux_types_ITransaction.ITransaction.md).[uniqueId](../interfaces/flux_types_ITransaction.ITransaction.md#uniqueid)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[uniqueId](flux_types_FluxType.FluxType.md#uniqueid)

#### Defined in

[src/types/flux_types/Transaction.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L26)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[delete](flux_types_FluxType.FluxType.md#delete)

#### Defined in

[src/types/flux_types/FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L20)

___

### getAccount

▸ **getAccount**(): `Promise`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\>

Fetches the account that was used
at the time of purchase

#### Returns

`Promise`\<[`IAccount`](../interfaces/flux_types_IAccount.IAccount.md)\>

The account used at the time of the transaction

#### Defined in

[src/types/flux_types/Transaction.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L40)

___

### getCurrentAccount

▸ **getCurrentAccount**(): `Promise`\<[`Account`](flux_types_Account.Account.md)\>

Fetches the account as it exists in
the flux system currently. This may
not be the account used at the time
of purchase if it has been updated

#### Returns

`Promise`\<[`Account`](flux_types_Account.Account.md)\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L49)

___

### getCurrentPaymentMethodAddress

▸ **getCurrentPaymentMethodAddress**(): `Promise`\<[`Address`](flux_types_Address.Address.md)\>

Fetches the payment method address as it exists in
the flux system currently. This may
not be the payment method address used at the time
of purchase if it has been updated

#### Returns

`Promise`\<[`Address`](flux_types_Address.Address.md)\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:88](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L88)

___

### getCurrentShippingAddress

▸ **getCurrentShippingAddress**(): `Promise`\<[`Address`](flux_types_Address.Address.md)\>

Fetches the shipping address as it exists in
the flux system currently. This may
not be the shipping address used at the time
of purchase if it has been updated

#### Returns

`Promise`\<[`Address`](flux_types_Address.Address.md)\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:72](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L72)

___

### getFluxProducts

▸ **getFluxProducts**(): `Promise`\<[`Product`](flux_types_Product.Product.md)[]\>

Fetches the products as they exists in
the flux system currently. These may
not be the products used at the time
of purchase if they have been updated

#### Returns

`Promise`\<[`Product`](flux_types_Product.Product.md)[]\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:104](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L104)

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

### getPaymentMethod

▸ **getPaymentMethod**(): `Promise`\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

Fetches the payment method that was used
for the transaction.

#### Returns

`Promise`\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:55](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L55)

___

### getPaymentMethodAddress

▸ **getPaymentMethodAddress**(): `Promise`\<[`IAddress`](../interfaces/flux_types_IAddress.IAddress.md)\>

Fetches the payment method address that was used
at the time of purchase

#### Returns

`Promise`\<[`IAddress`](../interfaces/flux_types_IAddress.IAddress.md)\>

The payment method address used at the time of the transaction

#### Defined in

[src/types/flux_types/Transaction.d.ts:79](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L79)

___

### getProducts

▸ **getProducts**(): `Promise`\<[`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)[]\>

Fetches the products that were used
at the time of purchase

#### Returns

`Promise`\<[`IProduct`](../interfaces/flux_types_IProduct.IProduct.md)[]\>

The products used at the time of the transaction

#### Defined in

[src/types/flux_types/Transaction.d.ts:95](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L95)

___

### getShippingAddress

▸ **getShippingAddress**(): `Promise`\<[`IAddress`](../interfaces/flux_types_IAddress.IAddress.md)\>

Fetches the shipping address that was used
at the time of purchase

#### Returns

`Promise`\<[`IAddress`](../interfaces/flux_types_IAddress.IAddress.md)\>

The shipping address used at the time of the transaction

#### Defined in

[src/types/flux_types/Transaction.d.ts:62](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L62)

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

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `accountUniqueId` | `string` |
| `currency` | `string` |
| `inventoryOnlyOrder` | `boolean` |
| `objectType` | `string` |
| `paymentMethodId` | `number` |
| `paymentMethodUniqueId` | `string` |
| `shippingAddressId` | `number` |
| `shippingAddressUniqueId` | `string` |
| `taxRate` | `number` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[serialize](flux_types_FluxType.FluxType.md#serialize)

#### Defined in

[src/types/flux_types/Transaction.d.ts:106](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L106)

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

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Transaction`](flux_types_Transaction.Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`ITransaction`](../interfaces/flux_types_ITransaction.ITransaction.md)\> |

#### Returns

`Promise`\<[`Transaction`](flux_types_Transaction.Transaction.md)\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L12)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`Transaction`](flux_types_Transaction.Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`ITransaction`](../interfaces/flux_types_ITransaction.ITransaction.md)\> |

#### Returns

`Promise`\<[`Transaction`](flux_types_Transaction.Transaction.md)\>

#### Defined in

[src/types/flux_types/Transaction.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/Transaction.d.ts#L13)

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
