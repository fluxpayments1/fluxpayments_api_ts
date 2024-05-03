[fluxpayments](../README.md) / [Modules](../modules.md) / [Transaction](../modules/Transaction.md) / Transaction

# Class: Transaction

[Transaction](../modules/Transaction.md).Transaction

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`Transaction`**

## Implements

- [`ITransaction`](../interfaces/ITransaction.ITransaction.md)

## Table of contents

### Constructors

- [constructor](Transaction.Transaction.md#constructor)

### Properties

- [account](Transaction.Transaction.md#account)
- [accountDumpId](Transaction.Transaction.md#accountdumpid)
- [accountId](Transaction.Transaction.md#accountid)
- [accountUniqueId](Transaction.Transaction.md#accountuniqueid)
- [currency](Transaction.Transaction.md#currency)
- [dataTableMetadata](Transaction.Transaction.md#datatablemetadata)
- [id](Transaction.Transaction.md#id)
- [inventoryOnlyOrder](Transaction.Transaction.md#inventoryonlyorder)
- [obName](Transaction.Transaction.md#obname)
- [obType](Transaction.Transaction.md#obtype)
- [objectType](Transaction.Transaction.md#objecttype)
- [paymentMethod](Transaction.Transaction.md#paymentmethod)
- [paymentMethodAddressDumpId](Transaction.Transaction.md#paymentmethodaddressdumpid)
- [paymentMethodAddressId](Transaction.Transaction.md#paymentmethodaddressid)
- [paymentMethodId](Transaction.Transaction.md#paymentmethodid)
- [paymentMethodUniqueId](Transaction.Transaction.md#paymentmethoduniqueid)
- [products](Transaction.Transaction.md#products)
- [shippingAddress](Transaction.Transaction.md#shippingaddress)
- [shippingAddressDumpId](Transaction.Transaction.md#shippingaddressdumpid)
- [shippingAddressId](Transaction.Transaction.md#shippingaddressid)
- [shippingAddressUniqueId](Transaction.Transaction.md#shippingaddressuniqueid)
- [taxRate](Transaction.Transaction.md#taxrate)
- [transactionStatus](Transaction.Transaction.md#transactionstatus)
- [uniqueId](Transaction.Transaction.md#uniqueid)

### Methods

- [delete](Transaction.Transaction.md#delete)
- [getAccount](Transaction.Transaction.md#getaccount)
- [getCurrentAccount](Transaction.Transaction.md#getcurrentaccount)
- [getCurrentPaymentMethod](Transaction.Transaction.md#getcurrentpaymentmethod)
- [getCurrentPaymentMethodAddress](Transaction.Transaction.md#getcurrentpaymentmethodaddress)
- [getCurrentProducts](Transaction.Transaction.md#getcurrentproducts)
- [getCurrentShippingAddress](Transaction.Transaction.md#getcurrentshippingaddress)
- [getId](Transaction.Transaction.md#getid)
- [getObjectType](Transaction.Transaction.md#getobjecttype)
- [getPaymentMethod](Transaction.Transaction.md#getpaymentmethod)
- [getPaymentMethodAddress](Transaction.Transaction.md#getpaymentmethodaddress)
- [getProducts](Transaction.Transaction.md#getproducts)
- [getShippingAddress](Transaction.Transaction.md#getshippingaddress)
- [merge](Transaction.Transaction.md#merge)
- [persist](Transaction.Transaction.md#persist)
- [refresh](Transaction.Transaction.md#refresh)
- [serialize](Transaction.Transaction.md#serialize)
- [setId](Transaction.Transaction.md#setid)
- [createInstanceLazy](Transaction.Transaction.md#createinstancelazy)
- [createInstanceSafe](Transaction.Transaction.md#createinstancesafe)
- [createObjects](Transaction.Transaction.md#createobjects)
- [createObjectsSafe](Transaction.Transaction.md#createobjectssafe)
- [deleteObjects](Transaction.Transaction.md#deleteobjects)
- [generateStatelessSession](Transaction.Transaction.md#generatestatelesssession)
- [getBackendConn](Transaction.Transaction.md#getbackendconn)
- [getLinkedObjectsById](Transaction.Transaction.md#getlinkedobjectsbyid)
- [getObjectsById](Transaction.Transaction.md#getobjectsbyid)
- [getObjectsByIdInternal](Transaction.Transaction.md#getobjectsbyidinternal)
- [instantiateInstance](Transaction.Transaction.md#instantiateinstance)
- [instantiateLazyInstance](Transaction.Transaction.md#instantiatelazyinstance)
- [queryObjects](Transaction.Transaction.md#queryobjects)
- [updateObjects](Transaction.Transaction.md#updateobjects)

## Constructors

### constructor

• **new Transaction**(`transaction?`): [`Transaction`](Transaction.Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction?` | `Partial`\<[`ITransaction`](../interfaces/ITransaction.ITransaction.md)\> |

#### Returns

[`Transaction`](Transaction.Transaction.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[Transaction.d.ts:114](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L114)

## Properties

### account

• **account**: [`Account`](Account.Account.md)

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[account](../interfaces/ITransaction.ITransaction.md#account)

#### Defined in

[Transaction.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L15)

___

### accountDumpId

• **accountDumpId**: `number`

#### Defined in

[Transaction.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L23)

___

### accountId

• **accountId**: `number`

#### Defined in

[Transaction.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L21)

___

### accountUniqueId

• **accountUniqueId**: `string`

#### Defined in

[Transaction.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L22)

___

### currency

• **currency**: `string`

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[currency](../interfaces/ITransaction.ITransaction.md#currency)

#### Defined in

[Transaction.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L28)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Inherited from

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L13)

___

### inventoryOnlyOrder

• **inventoryOnlyOrder**: `boolean`

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[inventoryOnlyOrder](../interfaces/ITransaction.ITransaction.md#inventoryonlyorder)

#### Defined in

[Transaction.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L14)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[Transaction.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L11)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[Transaction.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L32)

___

### paymentMethod

• **paymentMethod**: [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[paymentMethod](../interfaces/ITransaction.ITransaction.md#paymentmethod)

#### Defined in

[Transaction.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L19)

___

### paymentMethodAddressDumpId

• **paymentMethodAddressDumpId**: `number`

#### Defined in

[Transaction.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L17)

___

### paymentMethodAddressId

• **paymentMethodAddressId**: `number`

#### Defined in

[Transaction.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L20)

___

### paymentMethodId

• **paymentMethodId**: `number`

#### Defined in

[Transaction.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L24)

___

### paymentMethodUniqueId

• **paymentMethodUniqueId**: `string`

#### Defined in

[Transaction.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L25)

___

### products

• **products**: [`Product`](Product.Product.md)[]

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[products](../interfaces/ITransaction.ITransaction.md#products)

#### Defined in

[Transaction.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L33)

___

### shippingAddress

• **shippingAddress**: [`Address`](Address.Address.md)

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[shippingAddress](../interfaces/ITransaction.ITransaction.md#shippingaddress)

#### Defined in

[Transaction.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L18)

___

### shippingAddressDumpId

• **shippingAddressDumpId**: `number`

#### Defined in

[Transaction.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L16)

___

### shippingAddressId

• **shippingAddressId**: `number`

#### Defined in

[Transaction.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L30)

___

### shippingAddressUniqueId

• **shippingAddressUniqueId**: `string`

#### Defined in

[Transaction.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L31)

___

### taxRate

• **taxRate**: `number`

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[taxRate](../interfaces/ITransaction.ITransaction.md#taxrate)

#### Defined in

[Transaction.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L27)

___

### transactionStatus

• **transactionStatus**: `string`

#### Defined in

[Transaction.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L29)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[ITransaction](../interfaces/ITransaction.ITransaction.md).[uniqueId](../interfaces/ITransaction.ITransaction.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[Transaction.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L26)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L20)

___

### getAccount

▸ **getAccount**(): `Promise`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\>

Fetches the account that was used
at the time of purchase

#### Returns

`Promise`\<[`IAccount`](../interfaces/IAccount.IAccount.md)\>

The account used at the time of the transaction

#### Defined in

[Transaction.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L40)

___

### getCurrentAccount

▸ **getCurrentAccount**(): `Promise`\<[`Account`](Account.Account.md)\>

Fetches the account as it exists in
the flux system currently. This may
not be the account used at the time
of purchase if it has been updated

#### Returns

`Promise`\<[`Account`](Account.Account.md)\>

Account as it exists currently

#### Defined in

[Transaction.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L49)

___

### getCurrentPaymentMethod

▸ **getCurrentPaymentMethod**(): `Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

Fetches the payment method

#### Returns

`Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

Payment method as it currently exists in the system

#### Defined in

[Transaction.d.ts:64](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L64)

___

### getCurrentPaymentMethodAddress

▸ **getCurrentPaymentMethodAddress**(): `Promise`\<[`Address`](Address.Address.md)\>

Fetches the payment method address as it exists in
the flux system currently. This may
not be the payment method address used at the time
of purchase if it has been updated...

#### Returns

`Promise`\<[`Address`](Address.Address.md)\>

Current address as it exists in the system

#### Defined in

[Transaction.d.ts:97](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L97)

___

### getCurrentProducts

▸ **getCurrentProducts**(): `Promise`\<[`Product`](Product.Product.md)[]\>

Fetches the products as they exists in
the flux system currently. These may
not be the products used at the time
of purchase if they have been updated

#### Returns

`Promise`\<[`Product`](Product.Product.md)[]\>

Gets the products as they currently exist in the system

#### Defined in

[Transaction.d.ts:113](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L113)

___

### getCurrentShippingAddress

▸ **getCurrentShippingAddress**(): `Promise`\<[`Address`](Address.Address.md)\>

Fetches the shipping address as it exists in
the flux system currently. This may
not be the shipping address used at the time
of purchase if it has been updated

#### Returns

`Promise`\<[`Address`](Address.Address.md)\>

#### Defined in

[Transaction.d.ts:81](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L81)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L11)

___

### getPaymentMethod

▸ **getPaymentMethod**(): `Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

Fetches the payment method that was used
for the transaction.

#### Returns

`Promise`\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

Payment method at time of the purchase

#### Defined in

[Transaction.d.ts:57](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L57)

___

### getPaymentMethodAddress

▸ **getPaymentMethodAddress**(): `Promise`\<[`IAddress`](../interfaces/IAddress.IAddress.md)\>

Fetches the payment method address that was used
at the time of purchase

#### Returns

`Promise`\<[`IAddress`](../interfaces/IAddress.IAddress.md)\>

The payment method address used at the time of the transaction

#### Defined in

[Transaction.d.ts:88](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L88)

___

### getProducts

▸ **getProducts**(): `Promise`\<[`IProduct`](../interfaces/IProduct.IProduct.md)[]\>

Fetches the products that were used
at the time of purchase

#### Returns

`Promise`\<[`IProduct`](../interfaces/IProduct.IProduct.md)[]\>

The products used at the time of the transaction

#### Defined in

[Transaction.d.ts:104](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L104)

___

### getShippingAddress

▸ **getShippingAddress**(): `Promise`\<[`IAddress`](../interfaces/IAddress.IAddress.md)\>

Fetches the shipping address that was used
at the time of purchase

#### Returns

`Promise`\<[`IAddress`](../interfaces/IAddress.IAddress.md)\>

The shipping address used at the time of the transaction

#### Defined in

[Transaction.d.ts:71](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L71)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `Object`

Serializes this object into one readable by
the system.

#### Returns

`Object`

Object

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `accountUniqueId` | `string` |
| `currency` | `string` |
| `inventoryOnlyOrder` | `boolean` |
| `objectType` | `string` |
| `paymentMethodId` | `number` |
| `paymentMethodUniqueId` | `string` |
| `products` | [`Product`](Product.Product.md)[] |
| `shippingAddressId` | `number` |
| `shippingAddressUniqueId` | `string` |
| `taxRate` | `number` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[Transaction.d.ts:122](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L122)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`Transaction`](Transaction.Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`ITransaction`](../interfaces/ITransaction.ITransaction.md)\> |

#### Returns

`Promise`\<[`Transaction`](Transaction.Transaction.md)\>

#### Defined in

[Transaction.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L12)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`Transaction`](Transaction.Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`ITransaction`](../interfaces/ITransaction.ITransaction.md)\> |

#### Returns

`Promise`\<[`Transaction`](Transaction.Transaction.md)\>

#### Defined in

[Transaction.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/Transaction.d.ts#L13)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L43)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`, `cfs?`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[deleteObjects](FluxType.FluxType.md#deleteobjects)

#### Defined in

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L39)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[updateObjects](FluxType.FluxType.md#updateobjects)

#### Defined in

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/58a6e5901c1007e9a07c203e87e64d4abad5e111/src/types/flux_types/FluxType.d.ts#L41)
