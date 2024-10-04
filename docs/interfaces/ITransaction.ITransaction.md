[fluxpayments](../README.md) / [Modules](../modules.md) / [ITransaction](../modules/ITransaction.md) / ITransaction

# Interface: ITransaction

[ITransaction](../modules/ITransaction.md).ITransaction

## Implemented by

- [`Transaction`](../classes/Transaction.Transaction.md)

## Table of contents

### Properties

- [account](ITransaction.ITransaction.md#account)
- [approvalStatus](ITransaction.ITransaction.md#approvalstatus)
- [chainNumber](ITransaction.ITransaction.md#chainnumber)
- [confidenceLevel](ITransaction.ITransaction.md#confidencelevel)
- [currency](ITransaction.ITransaction.md#currency)
- [currencyId](ITransaction.ITransaction.md#currencyid)
- [defaultCurrencyAmount](ITransaction.ITransaction.md#defaultcurrencyamount)
- [id](ITransaction.ITransaction.md#id)
- [inventoryOnlyOrder](ITransaction.ITransaction.md#inventoryonlyorder)
- [paymentLinkId](ITransaction.ITransaction.md#paymentlinkid)
- [paymentMethod](ITransaction.ITransaction.md#paymentmethod)
- [products](ITransaction.ITransaction.md#products)
- [shippingAddress](ITransaction.ITransaction.md#shippingaddress)
- [taxRate](ITransaction.ITransaction.md#taxrate)
- [taxRateId](ITransaction.ITransaction.md#taxrateid)
- [txnHash](ITransaction.ITransaction.md#txnhash)
- [uniqueId](ITransaction.ITransaction.md#uniqueid)

## Properties

### account

• **account**: [`Account`](../classes/Account.Account.md)

#### Defined in

[ITransaction.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L6)

___

### approvalStatus

• **approvalStatus**: `string`

#### Defined in

[ITransaction.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L17)

___

### chainNumber

• **chainNumber**: `number`

#### Defined in

[ITransaction.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L12)

___

### confidenceLevel

• **confidenceLevel**: `number`

#### Defined in

[ITransaction.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L15)

___

### currency

• **currency**: `string`

#### Defined in

[ITransaction.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L16)

___

### currencyId

• **currencyId**: `number`

#### Defined in

[ITransaction.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L19)

___

### defaultCurrencyAmount

• **defaultCurrencyAmount**: `number`

#### Defined in

[ITransaction.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L14)

___

### id

• **id**: `number`

#### Defined in

[ITransaction.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L8)

___

### inventoryOnlyOrder

• `Optional` **inventoryOnlyOrder**: `boolean`

#### Defined in

[ITransaction.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L22)

___

### paymentLinkId

• **paymentLinkId**: `number`

#### Defined in

[ITransaction.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L13)

___

### paymentMethod

• **paymentMethod**: [`PaymentMethod`](../classes/PaymentMethod.PaymentMethod.md)

#### Defined in

[ITransaction.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L7)

___

### products

• **products**: [`Product`](../classes/Product.Product.md) \| [`Product`](../classes/Product.Product.md)[]

#### Defined in

[ITransaction.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L21)

___

### shippingAddress

• **shippingAddress**: [`Address`](../classes/Address.Address.md)

#### Defined in

[ITransaction.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L20)

___

### taxRate

• `Optional` **taxRate**: `number`

#### Defined in

[ITransaction.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L10)

___

### taxRateId

• **taxRateId**: `number`

#### Defined in

[ITransaction.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L11)

___

### txnHash

• **txnHash**: `string`

#### Defined in

[ITransaction.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L18)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[ITransaction.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/ITransaction.d.ts#L9)
