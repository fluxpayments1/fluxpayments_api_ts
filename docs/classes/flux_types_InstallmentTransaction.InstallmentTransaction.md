[fluxpayments](../README.md) / [Modules](../modules.md) / [flux\_types/InstallmentTransaction](../modules/flux_types_InstallmentTransaction.md) / InstallmentTransaction

# Class: InstallmentTransaction

[flux\_types/InstallmentTransaction](../modules/flux_types_InstallmentTransaction.md).InstallmentTransaction

## Hierarchy

- [`FluxType`](flux_types_FluxType.FluxType.md)

  ↳ **`InstallmentTransaction`**

## Implements

- [`IInstallmentTransaction`](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md)

## Table of contents

### Constructors

- [constructor](flux_types_InstallmentTransaction.InstallmentTransaction.md#constructor)

### Properties

- [dataTableMetadata](flux_types_InstallmentTransaction.InstallmentTransaction.md#datatablemetadata)
- [id](flux_types_InstallmentTransaction.InstallmentTransaction.md#id)
- [installmentAmount](flux_types_InstallmentTransaction.InstallmentTransaction.md#installmentamount)
- [installmentPeriod](flux_types_InstallmentTransaction.InstallmentTransaction.md#installmentperiod)
- [installmentsLeft](flux_types_InstallmentTransaction.InstallmentTransaction.md#installmentsleft)
- [metadata](flux_types_InstallmentTransaction.InstallmentTransaction.md#metadata)
- [obName](flux_types_InstallmentTransaction.InstallmentTransaction.md#obname)
- [obType](flux_types_InstallmentTransaction.InstallmentTransaction.md#obtype)
- [objectType](flux_types_InstallmentTransaction.InstallmentTransaction.md#objecttype)
- [originalTransactionId](flux_types_InstallmentTransaction.InstallmentTransaction.md#originaltransactionid)
- [otplId](flux_types_InstallmentTransaction.InstallmentTransaction.md#otplid)
- [status](flux_types_InstallmentTransaction.InstallmentTransaction.md#status)
- [uniqueId](flux_types_InstallmentTransaction.InstallmentTransaction.md#uniqueid)

### Methods

- [delete](flux_types_InstallmentTransaction.InstallmentTransaction.md#delete)
- [getId](flux_types_InstallmentTransaction.InstallmentTransaction.md#getid)
- [getObjectType](flux_types_InstallmentTransaction.InstallmentTransaction.md#getobjecttype)
- [merge](flux_types_InstallmentTransaction.InstallmentTransaction.md#merge)
- [persist](flux_types_InstallmentTransaction.InstallmentTransaction.md#persist)
- [refresh](flux_types_InstallmentTransaction.InstallmentTransaction.md#refresh)
- [serialize](flux_types_InstallmentTransaction.InstallmentTransaction.md#serialize)
- [setId](flux_types_InstallmentTransaction.InstallmentTransaction.md#setid)
- [createInstanceLazy](flux_types_InstallmentTransaction.InstallmentTransaction.md#createinstancelazy)
- [createInstanceSafe](flux_types_InstallmentTransaction.InstallmentTransaction.md#createinstancesafe)
- [createObjects](flux_types_InstallmentTransaction.InstallmentTransaction.md#createobjects)
- [createObjectsSafe](flux_types_InstallmentTransaction.InstallmentTransaction.md#createobjectssafe)
- [deleteObjects](flux_types_InstallmentTransaction.InstallmentTransaction.md#deleteobjects)
- [generateStatelessSession](flux_types_InstallmentTransaction.InstallmentTransaction.md#generatestatelesssession)
- [getBackendConn](flux_types_InstallmentTransaction.InstallmentTransaction.md#getbackendconn)
- [getObjectsById](flux_types_InstallmentTransaction.InstallmentTransaction.md#getobjectsbyid)
- [getObjectsByIdInternal](flux_types_InstallmentTransaction.InstallmentTransaction.md#getobjectsbyidinternal)
- [instantiateInstance](flux_types_InstallmentTransaction.InstallmentTransaction.md#instantiateinstance)
- [instantiateLazyInstance](flux_types_InstallmentTransaction.InstallmentTransaction.md#instantiatelazyinstance)
- [queryObjects](flux_types_InstallmentTransaction.InstallmentTransaction.md#queryobjects)
- [updateObjects](flux_types_InstallmentTransaction.InstallmentTransaction.md#updateobjects)

## Constructors

### constructor

• **new InstallmentTransaction**(`installmentTransaction?`): [`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `installmentTransaction?` | `Partial`\<[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)\> |

#### Returns

[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[constructor](flux_types_FluxType.FluxType.md#constructor)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L25)

## Properties

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[dataTableMetadata](flux_types_FluxType.FluxType.md#datatablemetadata)

#### Defined in

[src/types/flux_types/FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[id](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#id)

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[id](flux_types_FluxType.FluxType.md#id)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L16)

___

### installmentAmount

• **installmentAmount**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[installmentAmount](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#installmentamount)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L20)

___

### installmentPeriod

• **installmentPeriod**: `any`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[installmentPeriod](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#installmentperiod)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L22)

___

### installmentsLeft

• **installmentsLeft**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[installmentsLeft](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#installmentsleft)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L19)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[metadata](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#metadata)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L17)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[obName](flux_types_FluxType.FluxType.md#obname)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L4)

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

[FluxType](flux_types_FluxType.FluxType.md).[obType](flux_types_FluxType.FluxType.md#obtype)

#### Defined in

[src/types/flux_types/FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](flux_types_FluxType.FluxType.md).[objectType](flux_types_FluxType.FluxType.md#objecttype)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L24)

___

### originalTransactionId

• **originalTransactionId**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[originalTransactionId](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#originaltransactionid)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L18)

___

### otplId

• **otplId**: `number`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[otplId](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#otplid)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L21)

___

### status

• **status**: `any`

#### Implementation of

[IInstallmentTransaction](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md).[status](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md#status)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L23)

___

### uniqueId

• **uniqueId**: `string`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[uniqueId](flux_types_FluxType.FluxType.md#uniqueid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L7)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[delete](flux_types_FluxType.FluxType.md#delete)

#### Defined in

[src/types/flux_types/FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getId](flux_types_FluxType.FluxType.md#getid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getObjectType](flux_types_FluxType.FluxType.md#getobjecttype)

#### Defined in

[src/types/flux_types/FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[merge](flux_types_FluxType.FluxType.md#merge)

#### Defined in

[src/types/flux_types/FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[persist](flux_types_FluxType.FluxType.md#persist)

#### Defined in

[src/types/flux_types/FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[refresh](flux_types_FluxType.FluxType.md#refresh)

#### Defined in

[src/types/flux_types/FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L35)

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

[FluxType](flux_types_FluxType.FluxType.md).[serialize](flux_types_FluxType.FluxType.md#serialize)

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L5)

___

### setId

▸ **setId**(`fi`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) |

#### Returns

`void`

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[setId](flux_types_FluxType.FluxType.md#setid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IInstallmentTransaction`](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md)\> |

#### Returns

`Promise`\<[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)\>

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L26)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IInstallmentTransaction`](../interfaces/flux_types_IInstallmentTransaction.IInstallmentTransaction.md)\> |

#### Returns

`Promise`\<[`InstallmentTransaction`](flux_types_InstallmentTransaction.InstallmentTransaction.md)\>

#### Defined in

[src/types/flux_types/InstallmentTransaction.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/InstallmentTransaction.d.ts#L27)

___

### createObjects

▸ **createObjects**\<`T`\>(`ob`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[createObjects](flux_types_FluxType.FluxType.md#createobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L41)

___

### createObjectsSafe

▸ **createObjectsSafe**\<`T`\>(`ob`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[createObjectsSafe](flux_types_FluxType.FluxType.md#createobjectssafe)

#### Defined in

[src/types/flux_types/FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L42)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[deleteObjects](flux_types_FluxType.FluxType.md#deleteobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType](flux_types_FluxType.FluxType.md).[generateStatelessSession](flux_types_FluxType.FluxType.md#generatestatelesssession)

#### Defined in

[src/types/flux_types/FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<[`Flux`](lib_Flux.Flux.md)\<`SecurityHandler`\>\>

#### Returns

`Promise`\<[`Flux`](lib_Flux.Flux.md)\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getBackendConn](flux_types_FluxType.FluxType.md#getbackendconn)

#### Defined in

[src/types/flux_types/FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L18)

___

### getObjectsById

▸ **getObjectsById**\<`T`\>(`this`, `fi`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getObjectsById](flux_types_FluxType.FluxType.md#getobjectsbyid)

#### Defined in

[src/types/flux_types/FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L37)

___

### getObjectsByIdInternal

▸ **getObjectsByIdInternal**\<`T`\>(`fi`, `obType`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | (`o?`: `any`) => `T` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[getObjectsByIdInternal](flux_types_FluxType.FluxType.md#getobjectsbyidinternal)

#### Defined in

[src/types/flux_types/FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L36)

___

### instantiateInstance

▸ **instantiateInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[instantiateInstance](flux_types_FluxType.FluxType.md#instantiateinstance)

#### Defined in

[src/types/flux_types/FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L17)

___

### instantiateLazyInstance

▸ **instantiateLazyInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[instantiateLazyInstance](flux_types_FluxType.FluxType.md#instantiatelazyinstance)

#### Defined in

[src/types/flux_types/FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L16)

___

### queryObjects

▸ **queryObjects**\<`T`, `U`\>(`q`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[queryObjects](flux_types_FluxType.FluxType.md#queryobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L38)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](flux_types_FluxType.FluxType.md).[updateObjects](flux_types_FluxType.FluxType.md#updateobjects)

#### Defined in

[src/types/flux_types/FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/flux_types/FluxType.d.ts#L40)