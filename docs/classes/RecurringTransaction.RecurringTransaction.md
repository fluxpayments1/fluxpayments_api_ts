[fluxpayments](../README.md) / [Modules](../modules.md) / [RecurringTransaction](../modules/RecurringTransaction.md) / RecurringTransaction

# Class: RecurringTransaction

[RecurringTransaction](../modules/RecurringTransaction.md).RecurringTransaction

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`RecurringTransaction`**

## Implements

- [`IRecurringTransaction`](../interfaces/IRecurringTransaction.IRecurringTransaction.md)

## Table of contents

### Constructors

- [constructor](RecurringTransaction.RecurringTransaction.md#constructor)

### Properties

- [accountId](RecurringTransaction.RecurringTransaction.md#accountid)
- [createdAt](RecurringTransaction.RecurringTransaction.md#createdat)
- [dataTableMetadata](RecurringTransaction.RecurringTransaction.md#datatablemetadata)
- [id](RecurringTransaction.RecurringTransaction.md#id)
- [metadata](RecurringTransaction.RecurringTransaction.md#metadata)
- [nextProcessDate](RecurringTransaction.RecurringTransaction.md#nextprocessdate)
- [obName](RecurringTransaction.RecurringTransaction.md#obname)
- [obType](RecurringTransaction.RecurringTransaction.md#obtype)
- [objectType](RecurringTransaction.RecurringTransaction.md#objecttype)
- [originalTransactionId](RecurringTransaction.RecurringTransaction.md#originaltransactionid)
- [otplId](RecurringTransaction.RecurringTransaction.md#otplid)
- [paymentLinks](RecurringTransaction.RecurringTransaction.md#paymentlinks)
- [productDumpId](RecurringTransaction.RecurringTransaction.md#productdumpid)
- [productId](RecurringTransaction.RecurringTransaction.md#productid)
- [recurringAmount](RecurringTransaction.RecurringTransaction.md#recurringamount)
- [recurringTaxAmount](RecurringTransaction.RecurringTransaction.md#recurringtaxamount)
- [status](RecurringTransaction.RecurringTransaction.md#status)
- [uniqueId](RecurringTransaction.RecurringTransaction.md#uniqueid)
- [updatedAt](RecurringTransaction.RecurringTransaction.md#updatedat)

### Methods

- [delete](RecurringTransaction.RecurringTransaction.md#delete)
- [getId](RecurringTransaction.RecurringTransaction.md#getid)
- [getObjectType](RecurringTransaction.RecurringTransaction.md#getobjecttype)
- [merge](RecurringTransaction.RecurringTransaction.md#merge)
- [persist](RecurringTransaction.RecurringTransaction.md#persist)
- [refresh](RecurringTransaction.RecurringTransaction.md#refresh)
- [serialize](RecurringTransaction.RecurringTransaction.md#serialize)
- [setId](RecurringTransaction.RecurringTransaction.md#setid)
- [createInstanceLazy](RecurringTransaction.RecurringTransaction.md#createinstancelazy)
- [createInstanceSafe](RecurringTransaction.RecurringTransaction.md#createinstancesafe)
- [createObjects](RecurringTransaction.RecurringTransaction.md#createobjects)
- [createObjectsSafe](RecurringTransaction.RecurringTransaction.md#createobjectssafe)
- [createObjectsWeb](RecurringTransaction.RecurringTransaction.md#createobjectsweb)
- [deleteObjects](RecurringTransaction.RecurringTransaction.md#deleteobjects)
- [generateStatelessSession](RecurringTransaction.RecurringTransaction.md#generatestatelesssession)
- [getBackendConn](RecurringTransaction.RecurringTransaction.md#getbackendconn)
- [getLinkedObjectsById](RecurringTransaction.RecurringTransaction.md#getlinkedobjectsbyid)
- [getObjectsById](RecurringTransaction.RecurringTransaction.md#getobjectsbyid)
- [getObjectsByIdInternal](RecurringTransaction.RecurringTransaction.md#getobjectsbyidinternal)
- [instantiateInstance](RecurringTransaction.RecurringTransaction.md#instantiateinstance)
- [instantiateLazyInstance](RecurringTransaction.RecurringTransaction.md#instantiatelazyinstance)
- [queryObjects](RecurringTransaction.RecurringTransaction.md#queryobjects)
- [queryObjectsWeb](RecurringTransaction.RecurringTransaction.md#queryobjectsweb)
- [updateObjects](RecurringTransaction.RecurringTransaction.md#updateobjects)

## Constructors

### constructor

• **new RecurringTransaction**(`recurringTransaction?`): [`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `recurringTransaction?` | `Partial`\<[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)\> |

#### Returns

[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[RecurringTransaction.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L36)

## Properties

### accountId

• **accountId**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[accountId](../interfaces/IRecurringTransaction.IRecurringTransaction.md#accountid)

#### Defined in

[RecurringTransaction.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L29)

___

### createdAt

• **createdAt**: `number`

#### Inherited from

[FluxType](FluxType.FluxType.md).[createdAt](FluxType.FluxType.md#createdat)

#### Defined in

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L8)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[id](../interfaces/IRecurringTransaction.IRecurringTransaction.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[RecurringTransaction.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L22)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[metadata](../interfaces/IRecurringTransaction.IRecurringTransaction.md#metadata)

#### Defined in

[RecurringTransaction.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L23)

___

### nextProcessDate

• **nextProcessDate**: `Date`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[nextProcessDate](../interfaces/IRecurringTransaction.IRecurringTransaction.md#nextprocessdate)

#### Defined in

[RecurringTransaction.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L27)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[RecurringTransaction.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L5)

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

[FluxType.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L10)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[RecurringTransaction.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L35)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[originalTransactionId](../interfaces/IRecurringTransaction.IRecurringTransaction.md#originaltransactionid)

#### Defined in

[RecurringTransaction.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L28)

___

### otplId

• **otplId**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[otplId](../interfaces/IRecurringTransaction.IRecurringTransaction.md#otplid)

#### Defined in

[RecurringTransaction.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L33)

___

### paymentLinks

• **paymentLinks**: [`PaymentLink`](PaymentLink.PaymentLink.md)[]

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[paymentLinks](../interfaces/IRecurringTransaction.IRecurringTransaction.md#paymentlinks)

#### Defined in

[RecurringTransaction.d.ts:30](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L30)

___

### productDumpId

• **productDumpId**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[productDumpId](../interfaces/IRecurringTransaction.IRecurringTransaction.md#productdumpid)

#### Defined in

[RecurringTransaction.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L32)

___

### productId

• **productId**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[productId](../interfaces/IRecurringTransaction.IRecurringTransaction.md#productid)

#### Defined in

[RecurringTransaction.d.ts:31](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L31)

___

### recurringAmount

• **recurringAmount**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[recurringAmount](../interfaces/IRecurringTransaction.IRecurringTransaction.md#recurringamount)

#### Defined in

[RecurringTransaction.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L25)

___

### recurringTaxAmount

• **recurringTaxAmount**: `number`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[recurringTaxAmount](../interfaces/IRecurringTransaction.IRecurringTransaction.md#recurringtaxamount)

#### Defined in

[RecurringTransaction.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L26)

___

### status

• **status**: `any`

#### Implementation of

[IRecurringTransaction](../interfaces/IRecurringTransaction.IRecurringTransaction.md).[status](../interfaces/IRecurringTransaction.IRecurringTransaction.md#status)

#### Defined in

[RecurringTransaction.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L34)

___

### uniqueId

• **uniqueId**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[RecurringTransaction.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L24)

___

### updatedAt

• **updatedAt**: `Date`

#### Inherited from

[FluxType](FluxType.FluxType.md).[updatedAt](FluxType.FluxType.md#updatedat)

#### Defined in

[FluxType.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L9)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L22)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L16)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L13)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L23)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L24)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L37)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `id` | `number` |
| `metadata` | `string` |
| `nextProcessDate` | `Date` |
| `objectType` | `string` |
| `originalTransactionId` | `number` |
| `otplId` | `number` |
| `paymentLinks` | [`PaymentLink`](PaymentLink.PaymentLink.md)[] |
| `productDumpId` | `number` |
| `productId` | `number` |
| `recurringAmount` | `number` |
| `recurringTaxAmount` | `number` |
| `status` | `any` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[RecurringTransaction.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L6)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L17)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IRecurringTransaction`](../interfaces/IRecurringTransaction.IRecurringTransaction.md)\> |

#### Returns

`Promise`\<[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)\>

#### Defined in

[RecurringTransaction.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L37)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IRecurringTransaction`](../interfaces/IRecurringTransaction.IRecurringTransaction.md)\> |

#### Returns

`Promise`\<[`RecurringTransaction`](RecurringTransaction.RecurringTransaction.md)\>

#### Defined in

[RecurringTransaction.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/RecurringTransaction.d.ts#L38)

___

### createObjects

▸ **createObjects**\<`T`\>(`ob`, `cfs?`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

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

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjects](FluxType.FluxType.md#createobjects)

#### Defined in

[FluxType.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L46)

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

[FluxType.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L47)

___

### createObjectsWeb

▸ **createObjectsWeb**\<`T`\>(`ob`, `cfs?`): `Promise`\<`T`[]\>

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

[FluxType](FluxType.FluxType.md).[createObjectsWeb](FluxType.FluxType.md#createobjectsweb)

#### Defined in

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L43)

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

[FluxType.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L44)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L36)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L20)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L19)

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

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L41)

___

### queryObjectsWeb

▸ **queryObjectsWeb**\<`T`, `U`\>(`q`, `cfs?`): `Promise`\<`T`[]\>

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

[FluxType](FluxType.FluxType.md).[queryObjectsWeb](FluxType.FluxType.md#queryobjectsweb)

#### Defined in

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L45)
