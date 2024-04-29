[fluxpayments](../README.md) / [Modules](../modules.md) / [FluxType](../modules/FluxType.md) / FluxType

# Class: FluxType

[FluxType](../modules/FluxType.md).FluxType

## Hierarchy

- **`FluxType`**

  ↳ [`Account`](Account.Account.md)

  ↳ [`AccountAddress`](AccountAddress.AccountAddress.md)

  ↳ [`AccountDump`](AccountDump.AccountDump.md)

  ↳ [`Address`](Address.Address.md)

  ↳ [`AddressDump`](AddressDump.AddressDump.md)

  ↳ [`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)

  ↳ [`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)

  ↳ [`PaymentMethod`](PaymentMethod.PaymentMethod.md)

  ↳ [`Product`](Product.Product.md)

  ↳ [`ProductDump`](ProductDump.ProductDump.md)

  ↳ [`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)

  ↳ [`Token`](Token.Token.md)

  ↳ [`Transaction`](Transaction.Transaction.md)

## Table of contents

### Constructors

- [constructor](FluxType.FluxType.md#constructor)

### Properties

- [dataTableMetadata](FluxType.FluxType.md#datatablemetadata)
- [id](FluxType.FluxType.md#id)
- [obName](FluxType.FluxType.md#obname)
- [obType](FluxType.FluxType.md#obtype)
- [objectType](FluxType.FluxType.md#objecttype)
- [uniqueId](FluxType.FluxType.md#uniqueid)

### Methods

- [delete](FluxType.FluxType.md#delete)
- [getId](FluxType.FluxType.md#getid)
- [getObjectType](FluxType.FluxType.md#getobjecttype)
- [merge](FluxType.FluxType.md#merge)
- [persist](FluxType.FluxType.md#persist)
- [refresh](FluxType.FluxType.md#refresh)
- [serialize](FluxType.FluxType.md#serialize)
- [setId](FluxType.FluxType.md#setid)
- [createObjects](FluxType.FluxType.md#createobjects)
- [createObjectsSafe](FluxType.FluxType.md#createobjectssafe)
- [deleteObjects](FluxType.FluxType.md#deleteobjects)
- [generateStatelessSession](FluxType.FluxType.md#generatestatelesssession)
- [getBackendConn](FluxType.FluxType.md#getbackendconn)
- [getLinkedObjectsById](FluxType.FluxType.md#getlinkedobjectsbyid)
- [getObjectsById](FluxType.FluxType.md#getobjectsbyid)
- [getObjectsByIdInternal](FluxType.FluxType.md#getobjectsbyidinternal)
- [instantiateInstance](FluxType.FluxType.md#instantiateinstance)
- [instantiateLazyInstance](FluxType.FluxType.md#instantiatelazyinstance)
- [queryObjects](FluxType.FluxType.md#queryobjects)
- [updateObjects](FluxType.FluxType.md#updateobjects)

## Constructors

### constructor

• **new FluxType**(`fbo`, `t`): [`FluxType`](FluxType.FluxType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fbo` | `any` |
| `t` | (`o?`: `any`) => `any` |

#### Returns

[`FluxType`](FluxType.FluxType.md)

#### Defined in

[FluxType.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L12)

## Properties

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L13)

___

### obName

• `Abstract` **obName**: `string`

#### Defined in

[FluxType.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L9)

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

#### Defined in

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` `Abstract` **objectType**: `string`

#### Defined in

[FluxType.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L10)

___

### uniqueId

• **uniqueId**: `string`

#### Defined in

[FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L7)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

#### Defined in

[FluxType.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L19)

___

### setId

▸ **setId**(`fi`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) |

#### Returns

`void`

#### Defined in

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L15)

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

#### Defined in

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L42)

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

#### Defined in

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L43)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Defined in

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L40)

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

#### Defined in

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L18)

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

#### Defined in

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L38)

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

#### Defined in

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L37)

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

#### Defined in

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L36)

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

#### Defined in

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L17)

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

#### Defined in

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L16)

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

#### Defined in

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L39)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`): `Promise`\<`T`[]\>

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

#### Defined in

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/9ad93ee2cde2771a7f69a3646657773d9d335260/src/types/flux_types/FluxType.d.ts#L41)
