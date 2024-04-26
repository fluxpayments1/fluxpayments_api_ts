[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/ITransaction](../modules/flux_types_ITransaction.md) / ITransaction

# Interface: ITransaction

[flux\_types/ITransaction](../modules/flux_types_ITransaction.md).ITransaction

## Implemented by

- [`Transaction`](../classes/flux_types_Transaction.Transaction.md)

## Table of contents

### Properties

- [account](flux_types_ITransaction.ITransaction.md#account)
- [currency](flux_types_ITransaction.ITransaction.md#currency)
- [inventoryOnlyOrder](flux_types_ITransaction.ITransaction.md#inventoryonlyorder)
- [paymentMethod](flux_types_ITransaction.ITransaction.md#paymentmethod)
- [products](flux_types_ITransaction.ITransaction.md#products)
- [shippingAddress](flux_types_ITransaction.ITransaction.md#shippingaddress)
- [taxRate](flux_types_ITransaction.ITransaction.md#taxrate)
- [uniqueId](flux_types_ITransaction.ITransaction.md#uniqueid)

## Properties

### account

• **account**: [`Account`](../classes/flux_types_Account.Account.md)

#### Defined in

[src/types/flux_types/ITransaction.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L6)

___

### currency

• **currency**: `string`

#### Defined in

[src/types/flux_types/ITransaction.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L10)

___

### inventoryOnlyOrder

• `Optional` **inventoryOnlyOrder**: `boolean`

#### Defined in

[src/types/flux_types/ITransaction.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L13)

___

### paymentMethod

• **paymentMethod**: [`PaymentMethod`](../classes/flux_types_PaymentMethod.PaymentMethod.md)

#### Defined in

[src/types/flux_types/ITransaction.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L7)

___

### products

• **products**: [`Product`](../classes/flux_types_Product.Product.md) \| [`Product`](../classes/flux_types_Product.Product.md)[]

#### Defined in

[src/types/flux_types/ITransaction.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L12)

___

### shippingAddress

• **shippingAddress**: [`Address`](../classes/flux_types_Address.Address.md)

#### Defined in

[src/types/flux_types/ITransaction.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L11)

___

### taxRate

• `Optional` **taxRate**: `number`

#### Defined in

[src/types/flux_types/ITransaction.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L9)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[src/types/flux_types/ITransaction.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/ITransaction.d.ts#L8)
