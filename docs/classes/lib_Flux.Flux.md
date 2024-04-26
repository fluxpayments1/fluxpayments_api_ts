[fluxpayments](../README.md) / [Modules](../modules.md) / [lib/Flux](../modules/lib_Flux.md) / Flux

# Class: Flux\<A\>

[lib/Flux](../modules/lib_Flux.md).Flux

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `SecurityHandler` |

## Implements

- [`IFlux`](../interfaces/lib_IFlux.IFlux.md)

## Table of contents

### Constructors

- [constructor](lib_Flux.Flux.md#constructor)

### Properties

- [\_isAuthenticated](lib_Flux.Flux.md#_isauthenticated)
- [\_securityHandle](lib_Flux.Flux.md#_securityhandle)
- [fb](lib_Flux.Flux.md#fb)

### Accessors

- [isAuthenticated](lib_Flux.Flux.md#isauthenticated)
- [securityHandle](lib_Flux.Flux.md#securityhandle)

### Methods

- [createObjectGeneric](lib_Flux.Flux.md#createobjectgeneric)
- [createObjectGenericSafe](lib_Flux.Flux.md#createobjectgenericsafe)
- [createSession](lib_Flux.Flux.md#createsession)
- [deleteObjects](lib_Flux.Flux.md#deleteobjects)
- [getGeneralAuthorizationAccess](lib_Flux.Flux.md#getgeneralauthorizationaccess)
- [getObjects](lib_Flux.Flux.md#getobjects)
- [getObjectsById](lib_Flux.Flux.md#getobjectsbyid)
- [updateObjects](lib_Flux.Flux.md#updateobjects)
- [updateProductQuantity](lib_Flux.Flux.md#updateproductquantity)
- [getInstance](lib_Flux.Flux.md#getinstance)

## Constructors

### constructor

• **new Flux**\<`A`\>(): [`Flux`](lib_Flux.Flux.md)\<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `SecurityHandler` |

#### Returns

[`Flux`](lib_Flux.Flux.md)\<`A`\>

#### Defined in

[src/types/lib/Flux.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L8)

## Properties

### \_isAuthenticated

• `Private` **\_isAuthenticated**: `any`

#### Defined in

[src/types/lib/Flux.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L5)

___

### \_securityHandle

• `Private` **\_securityHandle**: `any`

#### Defined in

[src/types/lib/Flux.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L6)

___

### fb

▪ `Static` `Private` **fb**: `any`

#### Defined in

[src/types/lib/Flux.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L7)

## Accessors

### isAuthenticated

• `get` **isAuthenticated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/types/lib/Flux.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L10)

• `set` **isAuthenticated**(`b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` |

#### Returns

`void`

#### Defined in

[src/types/lib/Flux.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L11)

___

### securityHandle

• `get` **securityHandle**(): `A`

#### Returns

`A`

#### Defined in

[src/types/lib/Flux.d.ts:12](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L12)

• `set` **securityHandle**(`securityHandle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `securityHandle` | `A` |

#### Returns

`void`

#### Defined in

[src/types/lib/Flux.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L13)

## Methods

### createObjectGeneric

▸ **createObjectGeneric**\<`T`\>(`ob`, `secHandle?`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[createObjectGeneric](../interfaces/lib_IFlux.IFlux.md#createobjectgeneric)

#### Defined in

[src/types/lib/Flux.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L23)

___

### createObjectGenericSafe

▸ **createObjectGenericSafe**\<`T`\>(`ob`, `secHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[createObjectGenericSafe](../interfaces/lib_IFlux.IFlux.md#createobjectgenericsafe)

#### Defined in

[src/types/lib/Flux.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L24)

___

### createSession

▸ **createSession**(`id`): `Promise`\<`string`\>

Creates a Session with an account id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) |

#### Returns

`Promise`\<`string`\>

a session id

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[createSession](../interfaces/lib_IFlux.IFlux.md#createsession)

#### Defined in

[src/types/lib/Flux.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L22)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`ids`, `obType`, `secHandle?`): `Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | (`o?`: `any`) => `T` |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<[`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[deleteObjects](../interfaces/lib_IFlux.IFlux.md#deleteobjects)

#### Defined in

[src/types/lib/Flux.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L26)

___

### getGeneralAuthorizationAccess

▸ **getGeneralAuthorizationAccess**(`customerPublicKey`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customerPublicKey` | `string` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[getGeneralAuthorizationAccess](../interfaces/lib_IFlux.IFlux.md#getgeneralauthorizationaccess)

#### Defined in

[src/types/lib/Flux.d.ts:14](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L14)

___

### getObjects

▸ **getObjects**\<`T`, `U`\>(`query`, `secHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](flux_types_BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `U` |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[getObjects](../interfaces/lib_IFlux.IFlux.md#getobjects)

#### Defined in

[src/types/lib/Flux.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L25)

___

### getObjectsById

▸ **getObjectsById**\<`T`\>(`fi`, `obType`): `Promise`\<`T`[]\>

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

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[getObjectsById](../interfaces/lib_IFlux.IFlux.md#getobjectsbyid)

#### Defined in

[src/types/lib/Flux.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L27)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`, `securityHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `securityHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Implementation of

[IFlux](../interfaces/lib_IFlux.IFlux.md).[updateObjects](../interfaces/lib_IFlux.IFlux.md#updateobjects)

#### Defined in

[src/types/lib/Flux.d.ts:28](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L28)

___

### updateProductQuantity

▸ **updateProductQuantity**(`multiplier`, `quantity`, `fi`): `Promise`\<[`Product`](flux_types_Product.Product.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multiplier` | `number` |
| `quantity` | `number` |
| `fi` | [`FluxIdentifier`](flux_types_FluxIdentifier.FluxIdentifier.md) |

#### Returns

`Promise`\<[`Product`](flux_types_Product.Product.md)[]\>

#### Defined in

[src/types/lib/Flux.d.ts:29](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L29)

___

### getInstance

▸ **getInstance**\<`T`\>(): [`Flux`](lib_Flux.Flux.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SecurityHandler` |

#### Returns

[`Flux`](lib_Flux.Flux.md)\<`T`\>

#### Defined in

[src/types/lib/Flux.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/Flux.d.ts#L9)
