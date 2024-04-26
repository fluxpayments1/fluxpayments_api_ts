[fluxpayments](../README.md) / [Modules](../modules.md) / [PaymentMethodQuery](../modules/PaymentMethodQuery.md) / PaymentMethodQuery

# Class: PaymentMethodQuery

[PaymentMethodQuery](../modules/PaymentMethodQuery.md).PaymentMethodQuery

## Hierarchy

- [`BaseQuery`](BaseQuery.BaseQuery.md)\<[`PaymentMethod`](PaymentMethod.PaymentMethod.md)\>

  ↳ **`PaymentMethodQuery`**

## Implements

- [`IPaymentMethodQuery`](../modules/IPaymentMethodQuery.md#ipaymentmethodquery)

## Table of contents

### Constructors

- [constructor](PaymentMethodQuery.PaymentMethodQuery.md#constructor)

### Properties

- [activeStatus](PaymentMethodQuery.PaymentMethodQuery.md#activestatus)
- [additionalSearchOptions](PaymentMethodQuery.PaymentMethodQuery.md#additionalsearchoptions)
- [addressId](PaymentMethodQuery.PaymentMethodQuery.md#addressid)
- [attachedObject](PaymentMethodQuery.PaymentMethodQuery.md#attachedobject)
- [firstName](PaymentMethodQuery.PaymentMethodQuery.md#firstname)
- [id](PaymentMethodQuery.PaymentMethodQuery.md#id)
- [lastName](PaymentMethodQuery.PaymentMethodQuery.md#lastname)
- [lookupPage](PaymentMethodQuery.PaymentMethodQuery.md#lookuppage)
- [metadata](PaymentMethodQuery.PaymentMethodQuery.md#metadata)
- [objectType](PaymentMethodQuery.PaymentMethodQuery.md#objecttype)
- [pagination](PaymentMethodQuery.PaymentMethodQuery.md#pagination)
- [payType](PaymentMethodQuery.PaymentMethodQuery.md#paytype)
- [token](PaymentMethodQuery.PaymentMethodQuery.md#token)
- [uniqueid](PaymentMethodQuery.PaymentMethodQuery.md#uniqueid)

### Methods

- [serialize](PaymentMethodQuery.PaymentMethodQuery.md#serialize)
- [createQuery](PaymentMethodQuery.PaymentMethodQuery.md#createquery)

## Constructors

### constructor

• **new PaymentMethodQuery**(`tokQ?`): [`PaymentMethodQuery`](PaymentMethodQuery.PaymentMethodQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IPaymentMethodQuery`](../modules/IPaymentMethodQuery.md#ipaymentmethodquery) |

#### Returns

[`PaymentMethodQuery`](PaymentMethodQuery.PaymentMethodQuery.md)

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[constructor](BaseQuery.BaseQuery.md#constructor)

#### Defined in

[PaymentMethodQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L27)

## Properties

### activeStatus

• **activeStatus**: `any`

#### Defined in

[PaymentMethodQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L20)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Implementation of

IPaymentMethodQuery.additionalSearchOptions

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[additionalSearchOptions](BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/BaseQuery.d.ts#L8)

___

### addressId

• **addressId**: `number`

#### Defined in

[PaymentMethodQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L23)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

#### Type declaration

• **new attachedObject**(`o?`): [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`PaymentMethod`](PaymentMethod.PaymentMethod.md)

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[attachedObject](BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/BaseQuery.d.ts#L6)

___

### firstName

• **firstName**: `string`

#### Implementation of

IPaymentMethodQuery.firstName

#### Defined in

[PaymentMethodQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L24)

___

### id

• **id**: `number`

#### Implementation of

IPaymentMethodQuery.id

#### Defined in

[PaymentMethodQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L17)

___

### lastName

• **lastName**: `string`

#### Implementation of

IPaymentMethodQuery.lastName

#### Defined in

[PaymentMethodQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L25)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[lookupPage](BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Implementation of

IPaymentMethodQuery.metadata

#### Defined in

[PaymentMethodQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[objectType](BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[PaymentMethodQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L26)

___

### pagination

• **pagination**: [`PaginationSupport`](PaginationSupport.PaginationSupport.md)

#### Implementation of

IPaymentMethodQuery.pagination

#### Inherited from

[BaseQuery](BaseQuery.BaseQuery.md).[pagination](BaseQuery.BaseQuery.md#pagination)

#### Defined in

[BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/BaseQuery.d.ts#L7)

___

### payType

• **payType**: `any`

#### Defined in

[PaymentMethodQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L22)

___

### token

• **token**: `string`

#### Defined in

[PaymentMethodQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L21)

___

### uniqueid

• **uniqueid**: `string`

#### Defined in

[PaymentMethodQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L18)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `activeStatus` | `any` |
| `addressId` | `number` |
| `firstName` | `string` |
| `id` | `number` |
| `lastName` | `string` |
| `metadata` | `string` |
| `objectType` | `string` |
| `payType` | `any` |
| `token` | `string` |
| `uniqueid` | `string` |

#### Overrides

[BaseQuery](BaseQuery.BaseQuery.md).[serialize](BaseQuery.BaseQuery.md#serialize)

#### Defined in

[PaymentMethodQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`PaymentMethodQuery`](PaymentMethodQuery.PaymentMethodQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IPaymentMethodQuery`](../modules/IPaymentMethodQuery.md#ipaymentmethodquery) |

#### Returns

[`PaymentMethodQuery`](PaymentMethodQuery.PaymentMethodQuery.md)

#### Defined in

[PaymentMethodQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/828a07d2e031b56b38919da41f686764f3771feb/src/types/flux_types/PaymentMethodQuery.d.ts#L28)
