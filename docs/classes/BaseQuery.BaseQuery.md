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

  ↳ [`InstallmentTransactionQuery`](InstallmentTransactionQuery.InstallmentTransactionQuery.md)

  ↳ [`OneTimePaymentLinkQuery`](OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

  ↳ [`PaymentMethodQuery`](PaymentMethodQuery.PaymentMethodQuery.md)

  ↳ [`ProductQuery`](ProductQuery.ProductQuery.md)

  ↳ [`RecurringTransactionQuery`](RecurringTransactionQuery.RecurringTransactionQuery.md)

  ↳ [`TokenQuery`](TokenQuery.TokenQuery.md)

  ↳ [`TransactionQuery`](TransactionQuery.TransactionQuery.md)

## Table of contents

### Constructors

- [constructor](BaseQuery.BaseQuery.md#constructor)

### Properties

- [additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)
- [attachedObject](BaseQuery.BaseQuery.md#attachedobject)
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

[BaseQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L5)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L8)

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

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L6)

___

### lookupPage

• **lookupPage**: `string`

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L9)

___

### objectType

• `Protected` `Abstract` **objectType**: `string`

#### Defined in

[BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L10)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L7)

## Methods

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

#### Defined in

[BaseQuery.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/987ae5d3b6ff69a53873e089a0a920a607fae793/src/types/flux_types/BaseQuery.d.ts#L11)
