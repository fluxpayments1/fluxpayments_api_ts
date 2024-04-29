[fluxpayments](../README.md) / [Modules](../modules.md) / [InstallmentTransaction](../modules/InstallmentTransaction.md) / InstallmentTransaction

# Class: InstallmentTransaction

[InstallmentTransaction](../modules/InstallmentTransaction.md).InstallmentTransaction

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`InstallmentTransaction`**

## Implements

- [`IInstallmentTransaction`](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md)

## Table of contents

### Constructors

- [constructor](InstallmentTransaction.InstallmentTransaction.md#constructor)

### Properties

- [dataTableMetadata](InstallmentTransaction.InstallmentTransaction.md#datatablemetadata)
- [id](InstallmentTransaction.InstallmentTransaction.md#id)
- [installmentAmount](InstallmentTransaction.InstallmentTransaction.md#installmentamount)
- [installmentPeriod](InstallmentTransaction.InstallmentTransaction.md#installmentperiod)
- [installmentsLeft](InstallmentTransaction.InstallmentTransaction.md#installmentsleft)
- [metadata](InstallmentTransaction.InstallmentTransaction.md#metadata)
- [obName](InstallmentTransaction.InstallmentTransaction.md#obname)
- [obType](InstallmentTransaction.InstallmentTransaction.md#obtype)
- [objectType](InstallmentTransaction.InstallmentTransaction.md#objecttype)
- [originalTransactionId](InstallmentTransaction.InstallmentTransaction.md#originaltransactionid)
- [otplId](InstallmentTransaction.InstallmentTransaction.md#otplid)
- [status](InstallmentTransaction.InstallmentTransaction.md#status)
- [uniqueId](InstallmentTransaction.InstallmentTransaction.md#uniqueid)

### Methods

- [delete](InstallmentTransaction.InstallmentTransaction.md#delete)
- [getId](InstallmentTransaction.InstallmentTransaction.md#getid)
- [getObjectType](InstallmentTransaction.InstallmentTransaction.md#getobjecttype)
- [merge](InstallmentTransaction.InstallmentTransaction.md#merge)
- [persist](InstallmentTransaction.InstallmentTransaction.md#persist)
- [refresh](InstallmentTransaction.InstallmentTransaction.md#refresh)
- [serialize](InstallmentTransaction.InstallmentTransaction.md#serialize)
- [setId](InstallmentTransaction.InstallmentTransaction.md#setid)
- [createInstanceLazy](InstallmentTransaction.InstallmentTransaction.md#createinstancelazy)
- [createInstanceSafe](InstallmentTransaction.InstallmentTransaction.md#createinstancesafe)
- [createObjects](InstallmentTransaction.InstallmentTransaction.md#createobjects)
- [createObjectsSafe](InstallmentTransaction.InstallmentTransaction.md#createobjectssafe)
- [deleteObjects](InstallmentTransaction.InstallmentTransaction.md#deleteobjects)
- [generateStatelessSession](InstallmentTransaction.InstallmentTransaction.md#generatestatelesssession)
- [getBackendConn](InstallmentTransaction.InstallmentTransaction.md#getbackendconn)
- [getLinkedObjectsById](InstallmentTransaction.InstallmentTransaction.md#getlinkedobjectsbyid)
- [getObjectsById](InstallmentTransaction.InstallmentTransaction.md#getobjectsbyid)
- [getObjectsByIdInternal](InstallmentTransaction.InstallmentTransaction.md#getobjectsbyidinternal)
- [instantiateInstance](InstallmentTransaction.InstallmentTransaction.md#instantiateinstance)
- [instantiateLazyInstance](InstallmentTransaction.InstallmentTransaction.md#instantiatelazyinstance)
- [queryObjects](InstallmentTransaction.InstallmentTransaction.md#queryobjects)
- [updateObjects](InstallmentTransaction.InstallmentTransaction.md#updateobjects)

## Constructors

### constructor

• **new InstallmentTransaction**(`installmentTransaction?`): [`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `installmentTransaction?` | `Partial`\<[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)\> |

#### Returns

[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[InstallmentTransaction.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L25)

## Properties

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[id](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[InstallmentTransaction.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L16)

___

### installmentAmount

• **installmentAmount**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[installmentAmount](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#installmentamount)

#### Defined in

[InstallmentTransaction.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L20)

___

### installmentPeriod

• **installmentPeriod**: `any`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[installmentPeriod](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#installmentperiod)

#### Defined in

[InstallmentTransaction.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L22)

___

### installmentsLeft

• **installmentsLeft**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[installmentsLeft](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#installmentsleft)

#### Defined in

[InstallmentTransaction.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L19)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[metadata](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#metadata)

#### Defined in

[InstallmentTransaction.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L17)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[InstallmentTransaction.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L4)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[InstallmentTransaction.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L24)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[originalTransactionId](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#originaltransactionid)

#### Defined in

[InstallmentTransaction.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L18)

___

### otplId

• **otplId**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[otplId](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#otplid)

#### Defined in

[InstallmentTransaction.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L21)

___

### status

• **status**: `any`

#### Implementation of

[IInstallmentTransaction](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md).[status](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md#status)

#### Defined in

[InstallmentTransaction.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L23)

___

### uniqueId

• **uniqueId**: `string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L7)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `installmentAmount` | `number` |
| `installmentPeriod` | `any` |
| `installmentsLeft` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `originalTransactionId` | `number` |
| `otplId` | `number` |
| `status` | `any` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[InstallmentTransaction.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L5)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IInstallmentTransaction`](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md)\> |

#### Returns

`Promise`\<[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)\>

#### Defined in

[InstallmentTransaction.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L26)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IInstallmentTransaction`](../interfaces/IInstallmentTransaction.IInstallmentTransaction.md)\> |

#### Returns

`Promise`\<[`InstallmentTransaction`](InstallmentTransaction.InstallmentTransaction.md)\>

#### Defined in

[InstallmentTransaction.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/InstallmentTransaction.d.ts#L27)

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

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjects](FluxType.FluxType.md#createobjects)

#### Defined in

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L43)

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

#### Inherited from

[FluxType](FluxType.FluxType.md).[deleteObjects](FluxType.FluxType.md#deleteobjects)

#### Defined in

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L39)

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

#### Inherited from

[FluxType](FluxType.FluxType.md).[updateObjects](FluxType.FluxType.md#updateobjects)

#### Defined in

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/52fa79dcc1a2c483503f46191565d1204ad79890/src/types/flux_types/FluxType.d.ts#L41)
