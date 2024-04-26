[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/PaymentMethodQuery](../modules/flux_types_PaymentMethodQuery.md) / PaymentMethodQuery

# Class: PaymentMethodQuery

[flux\_types/PaymentMethodQuery](../modules/flux_types_PaymentMethodQuery.md).PaymentMethodQuery

## Hierarchy

- [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)\>

  ↳ **`PaymentMethodQuery`**

## Table of contents

### Constructors

- [constructor](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#constructor)

### Properties

- [activeStatus](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#activestatus)
- [additionalSearchOptions](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#additionalsearchoptions)
- [addressId](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#addressid)
- [attachedObject](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#attachedobject)
- [firstName](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#firstname)
- [id](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#id)
- [lastName](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#lastname)
- [lookupPage](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#lookuppage)
- [metadata](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#metadata)
- [objectType](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#objecttype)
- [pagination](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#pagination)
- [payType](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#paytype)
- [token](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#token)
- [uniqueid](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#uniqueid)

### Methods

- [serialize](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#serialize)
- [createQuery](flux_types_PaymentMethodQuery.PaymentMethodQuery.md#createquery)

## Constructors

### constructor

• **new PaymentMethodQuery**(`tokQ?`): [`PaymentMethodQuery`](flux_types_PaymentMethodQuery.PaymentMethodQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokQ?` | [`IPaymentMethodQuery`](../modules/flux_types_IPaymentMethodQuery.md#ipaymentmethodquery) |

#### Returns

[`PaymentMethodQuery`](flux_types_PaymentMethodQuery.PaymentMethodQuery.md)

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[constructor](flux_types_BaseQuery.BaseQuery.md#constructor)

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L27)

## Properties

### activeStatus

• **activeStatus**: `any`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L20)

___

### additionalSearchOptions

• **additionalSearchOptions**: [`AdditionalSearchOptions`](flux_types_AdditionalSearchOptions.AdditionalSearchOptions.md)[]

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[additionalSearchOptions](flux_types_BaseQuery.BaseQuery.md#additionalsearchoptions)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L8)

___

### addressId

• **addressId**: `number`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L23)

___

### attachedObject

• **attachedObject**: (`o?`: `any`) => [`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)

#### Type declaration

• **new attachedObject**(`o?`): [`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

[`PaymentMethod`](flux_types_PaymentMethod.PaymentMethod.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[attachedObject](flux_types_BaseQuery.BaseQuery.md#attachedobject)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L6)

___

### firstName

• **firstName**: `string`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L24)

___

### id

• **id**: `number`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L17)

___

### lastName

• **lastName**: `string`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L25)

___

### lookupPage

• **lookupPage**: `string`

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[lookupPage](flux_types_BaseQuery.BaseQuery.md#lookuppage)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L9)

___

### metadata

• **metadata**: `string`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L19)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[objectType](flux_types_BaseQuery.BaseQuery.md#objecttype)

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L26)

___

### pagination

• **pagination**: [`PaginationSupport`](flux_types_PaginationSupport.PaginationSupport.md)

#### Inherited from

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[pagination](flux_types_BaseQuery.BaseQuery.md#pagination)

#### Defined in

[src/types/flux_types/BaseQuery.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/BaseQuery.d.ts#L7)

___

### payType

• **payType**: `any`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L22)

___

### token

• **token**: `string`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L21)

___

### uniqueid

• **uniqueid**: `string`

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L18)

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

[BaseQuery](flux_types_BaseQuery.BaseQuery.md).[serialize](flux_types_BaseQuery.BaseQuery.md#serialize)

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L5)

___

### createQuery

▸ **createQuery**(`ipq`): [`PaymentMethodQuery`](flux_types_PaymentMethodQuery.PaymentMethodQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipq` | [`IPaymentMethodQuery`](../modules/flux_types_IPaymentMethodQuery.md#ipaymentmethodquery) |

#### Returns

[`PaymentMethodQuery`](flux_types_PaymentMethodQuery.PaymentMethodQuery.md)

#### Defined in

[src/types/flux_types/PaymentMethodQuery.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/PaymentMethodQuery.d.ts#L28)
