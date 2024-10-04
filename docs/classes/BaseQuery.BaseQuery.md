[fluxpayments](../README.md) / [Modules](../modules.md) / [BaseQuery](../modules/BaseQuery.md) / BaseQuery

# Class: BaseQuery\<T\>

[BaseQuery](../modules/BaseQuery.md).BaseQuery

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

## Hierarchy

- **`BaseQuery`**

  ↳ [`AccountAddressQuery`](AccountAddressQuery.AccountAddressQuery.md)

  ↳ [`AccountQuery`](AccountQuery.AccountQuery.md)

  ↳ [`AddressQuery`](AddressQuery.AddressQuery.md)

  ↳ [`CurrencyQuery`](CurrencyQuery.CurrencyQuery.md)

  ↳ [`CustomerWalletQuery`](CustomerWalletQuery.CustomerWalletQuery.md)

  ↳ [`InstallmentTransactionQuery`](InstallmentTransactionQuery.InstallmentTransactionQuery.md)

  ↳ [`PaymentLinkQuery`](PaymentLinkQuery.PaymentLinkQuery.md)

  ↳ [`PaymentMethodQuery`](PaymentMethodQuery.PaymentMethodQuery.md)

  ↳ [`ProductQuery`](ProductQuery.ProductQuery.md)

  ↳ [`RecurringTransactionQuery`](RecurringTransactionQuery.RecurringTransactionQuery.md)

  ↳ [`TokenQuery`](TokenQuery.TokenQuery.md)

  ↳ [`TransactionQuery`](TransactionQuery.TransactionQuery.md)

  ↳ [`WalletQuery`](WalletQuery.WalletQuery.md)

## Table of contents

### Constructors

- [constructor](BaseQuery.BaseQuery.md#constructor)

### Properties

- [additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)
- [attachedObject](BaseQuery.BaseQuery.md#attachedobject)
- [conditional](BaseQuery.BaseQuery.md#conditional)
- [createdAt](BaseQuery.BaseQuery.md#createdat)
- [lookupPage](BaseQuery.BaseQuery.md#lookuppage)
- [objectType](BaseQuery.BaseQuery.md#objecttype)
- [pagination](BaseQuery.BaseQuery.md#pagination)

### Methods

- [serialize](BaseQuery.BaseQuery.md#serialize)

## Constructors

### constructor

• **new BaseQuery**\<`T`\>(`attObject`): [`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attObject` | (`o?`: `any`) => `T` |

#### Returns

[`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\>

#### Defined in

[BaseQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L5)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L10)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => `T`

#### Type declaration

• **new attachedObject**(`o?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

`T`

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L7)

___

### conditional

• **conditional**: ``"OR"`` \| ``"AND"``

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L6)

___

### createdAt

• **createdAt**: `number`

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L8)

___

### lookupPage

• **lookupPage**: `string`

#### Defined in

[BaseQuery.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L11)

___

### objectType

• `Protected` `Abstract` **objectType**: `string`

#### Defined in

[BaseQuery.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L12)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L9)

## Methods

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

#### Defined in

[BaseQuery.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/BaseQuery.d.ts#L13)
