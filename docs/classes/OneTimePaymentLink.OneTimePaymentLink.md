[fluxpayments](../README.md) / [Modules](../modules.md) / [OneTimePaymentLink](../modules/OneTimePaymentLink.md) / OneTimePaymentLink

# Class: OneTimePaymentLink

[OneTimePaymentLink](../modules/OneTimePaymentLink.md).OneTimePaymentLink

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`OneTimePaymentLink`**

## Implements

- [`IOneTimePaymentLink`](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md)

## Table of contents

### Constructors

- [constructor](OneTimePaymentLink.OneTimePaymentLink.md#constructor)

### Properties

- [accountId](OneTimePaymentLink.OneTimePaymentLink.md#accountid)
- [dataTableMetadata](OneTimePaymentLink.OneTimePaymentLink.md#datatablemetadata)
- [id](OneTimePaymentLink.OneTimePaymentLink.md#id)
- [liveStatus](OneTimePaymentLink.OneTimePaymentLink.md#livestatus)
- [metadata](OneTimePaymentLink.OneTimePaymentLink.md#metadata)
- [obName](OneTimePaymentLink.OneTimePaymentLink.md#obname)
- [obType](OneTimePaymentLink.OneTimePaymentLink.md#obtype)
- [objectType](OneTimePaymentLink.OneTimePaymentLink.md#objecttype)
- [paymentLink](OneTimePaymentLink.OneTimePaymentLink.md#paymentlink)
- [removeOnSuccess](OneTimePaymentLink.OneTimePaymentLink.md#removeonsuccess)
- [uniqueId](OneTimePaymentLink.OneTimePaymentLink.md#uniqueid)

### Methods

- [delete](OneTimePaymentLink.OneTimePaymentLink.md#delete)
- [getId](OneTimePaymentLink.OneTimePaymentLink.md#getid)
- [getObjectType](OneTimePaymentLink.OneTimePaymentLink.md#getobjecttype)
- [merge](OneTimePaymentLink.OneTimePaymentLink.md#merge)
- [persist](OneTimePaymentLink.OneTimePaymentLink.md#persist)
- [refresh](OneTimePaymentLink.OneTimePaymentLink.md#refresh)
- [serialize](OneTimePaymentLink.OneTimePaymentLink.md#serialize)
- [setId](OneTimePaymentLink.OneTimePaymentLink.md#setid)
- [createInstanceLazy](OneTimePaymentLink.OneTimePaymentLink.md#createinstancelazy)
- [createInstanceSafe](OneTimePaymentLink.OneTimePaymentLink.md#createinstancesafe)
- [createObjects](OneTimePaymentLink.OneTimePaymentLink.md#createobjects)
- [createObjectsSafe](OneTimePaymentLink.OneTimePaymentLink.md#createobjectssafe)
- [deleteObjects](OneTimePaymentLink.OneTimePaymentLink.md#deleteobjects)
- [generateStatelessSession](OneTimePaymentLink.OneTimePaymentLink.md#generatestatelesssession)
- [getBackendConn](OneTimePaymentLink.OneTimePaymentLink.md#getbackendconn)
- [getLinkedObjectsById](OneTimePaymentLink.OneTimePaymentLink.md#getlinkedobjectsbyid)
- [getObjectsById](OneTimePaymentLink.OneTimePaymentLink.md#getobjectsbyid)
- [getObjectsByIdInternal](OneTimePaymentLink.OneTimePaymentLink.md#getobjectsbyidinternal)
- [instantiateInstance](OneTimePaymentLink.OneTimePaymentLink.md#instantiateinstance)
- [instantiateLazyInstance](OneTimePaymentLink.OneTimePaymentLink.md#instantiatelazyinstance)
- [queryObjects](OneTimePaymentLink.OneTimePaymentLink.md#queryobjects)
- [updateObjects](OneTimePaymentLink.OneTimePaymentLink.md#updateobjects)

## Constructors

### constructor

• **new OneTimePaymentLink**(`oneTimePaymentLink?`): [`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oneTimePaymentLink?` | `Partial`\<[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)\> |

#### Returns

[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[OneTimePaymentLink.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L23)

## Properties

### accountId

• **accountId**: `number`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[accountId](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#accountid)

#### Defined in

[OneTimePaymentLink.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L21)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L6)

___

### id

• **id**: `number`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[id](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[OneTimePaymentLink.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L15)

___

### liveStatus

• **liveStatus**: `any`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[liveStatus](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#livestatus)

#### Defined in

[OneTimePaymentLink.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L18)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[metadata](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#metadata)

#### Defined in

[OneTimePaymentLink.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L16)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[OneTimePaymentLink.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L4)

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

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L8)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[OneTimePaymentLink.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L22)

___

### paymentLink

• **paymentLink**: `string`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[paymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#paymentlink)

#### Defined in

[OneTimePaymentLink.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L20)

___

### removeOnSuccess

• **removeOnSuccess**: `any`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[removeOnSuccess](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#removeonsuccess)

#### Defined in

[OneTimePaymentLink.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L19)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IOneTimePaymentLink](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md).[uniqueId](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[OneTimePaymentLink.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L17)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L20)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L14)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L11)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:21](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L21)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L22)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L35)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |
| `id` | `number` |
| `liveStatus` | `any` |
| `metadata` | `string` |
| `objectType` | `string` |
| `paymentLink` | `string` |
| `removeOnSuccess` | `any` |
| `uniqueId` | `string` |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[OneTimePaymentLink.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L5)

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

[FluxType.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L15)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IOneTimePaymentLink`](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md)\> |

#### Returns

`Promise`\<[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)\>

#### Defined in

[OneTimePaymentLink.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L24)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IOneTimePaymentLink`](../interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md)\> |

#### Returns

`Promise`\<[`OneTimePaymentLink`](OneTimePaymentLink.OneTimePaymentLink.md)\>

#### Defined in

[OneTimePaymentLink.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/OneTimePaymentLink.d.ts#L25)

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

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L42)

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

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L43)

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

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L40)

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

[FluxType.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L34)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L18)

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

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L38)

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

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L37)

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

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L36)

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

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L17)

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

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L16)

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

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L39)

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

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/af7550594f492576ca6f534473c1e6d78e74cb4b/src/types/flux_types/FluxType.d.ts#L41)
