[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/BaseQuery](../modules/flux_types_BaseQuery.md) / BaseQuery

# Class: BaseQuery\<T\>

[flux\_types/BaseQuery](../modules/flux_types_BaseQuery.md).BaseQuery

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

## Hierarchy

- **`BaseQuery`**

  ↳ [`AccountAddressQuery`](flux_types_AccountAddressQuery.AccountAddressQuery.md)

  ↳ [`AccountQuery`](flux_types_AccountQuery.AccountQuery.md)

  ↳ [`AddressQuery`](flux_types_AddressQuery.AddressQuery.md)

  ↳ [`InstallmentTransactionQuery`](flux_types_InstallmentTransactionQuery.InstallmentTransactionQuery.md)

  ↳ [`OneTimePaymentLinkQuery`](flux_types_OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)

  ↳ [`PaymentMethodQuery`](flux_types_PaymentMethodQuery.PaymentMethodQuery.md)

  ↳ [`ProductQuery`](flux_types_ProductQuery.ProductQuery.md)

  ↳ [`RecurringTransactionQuery`](flux_types_RecurringTransactionQuery.RecurringTransactionQuery.md)

  ↳ [`TokenQuery`](flux_types_TokenQuery.TokenQuery.md)

  ↳ [`TransactionQuery`](flux_types_TransactionQuery.TransactionQuery.md)

## Table of contents

### Constructors

- [constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

### Properties

- [additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)
- [attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)
- [lookupPage](flux_types_BaseQuery.BaseQuery.md#lookuppage)
- [objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)
- [pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

### Methods

- [serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

## Constructors

### constructor

• **new BaseQuery**\<`T`\>(`attObject`): [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attObject` | (`o?`: `any`) => `T` |

#### Returns

[`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<`T`\>

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L5)

## Properties

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

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

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### lookupPage

• **lookupPage**: `string`

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L9)

___

### objectType

• `Protected` `Abstract` **objectType**: `string`

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L10)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

## Methods

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L11)
