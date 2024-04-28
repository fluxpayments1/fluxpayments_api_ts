[fluxpayments](../README.md) / [Modules](../modules.md) / [ITransaction](../modules/ITransaction.md) / ITransaction

# Interface: ITransaction

[ITransaction](../modules/ITransaction.md).ITransaction

## Implemented by

- [`Transaction`](../classes/Transaction.Transaction.md)

## Table of contents

### Properties

- [account](ITransaction.ITransaction.md#account)
- [currency](ITransaction.ITransaction.md#currency)
- [inventoryOnlyOrder](ITransaction.ITransaction.md#inventoryonlyorder)
- [paymentMethod](ITransaction.ITransaction.md#paymentmethod)
- [products](ITransaction.ITransaction.md#products)
- [shippingAddress](ITransaction.ITransaction.md#shippingaddress)
- [taxRate](ITransaction.ITransaction.md#taxrate)
- [uniqueId](ITransaction.ITransaction.md#uniqueid)

## Properties

### account

• **account**: [`Account`](../classes/Account.Account.md)

#### Defined in

[ITransaction.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L6)

___

### currency

• **currency**: `string`

#### Defined in

[ITransaction.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L10)

___

### inventoryOnlyOrder

• `Optional` **inventoryOnlyOrder**: `boolean`

#### Defined in

[ITransaction.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L13)

___

### paymentMethod

• **paymentMethod**: [`PaymentMethod`](../classes/PaymentMethod.PaymentMethod.md)

#### Defined in

[ITransaction.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L7)

___

### products

• **products**: [`Product`](../classes/Product.Product.md) \| [`Product`](../classes/Product.Product.md)[]

#### Defined in

[ITransaction.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L12)

___

### shippingAddress

• **shippingAddress**: [`Address`](../classes/Address.Address.md)

#### Defined in

[ITransaction.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L11)

___

### taxRate

• `Optional` **taxRate**: `number`

#### Defined in

[ITransaction.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L9)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[ITransaction.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/c1b9534f08eb16f91e1af934a2305ffa69c7b824/src/types/flux_types/ITransaction.d.ts#L8)
