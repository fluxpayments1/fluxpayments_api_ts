[fluxpayments](../README.md) / [Modules](../modules.md) / [lib/IFlux](../modules/lib_IFlux.md) / IFlux

# Interface: IFlux

[lib/IFlux](../modules/lib_IFlux.md).IFlux

## Implemented by

- [`Flux`](../classes/lib_Flux.Flux.md)

## Table of contents

### Methods

- [createObjectGeneric](lib_IFlux.IFlux.md#createobjectgeneric)
- [createObjectGenericSafe](lib_IFlux.IFlux.md#createobjectgenericsafe)
- [createSession](lib_IFlux.IFlux.md#createsession)
- [deleteObjects](lib_IFlux.IFlux.md#deleteobjects)
- [getGeneralAuthorizationAccess](lib_IFlux.IFlux.md#getgeneralauthorizationaccess)
- [getObjects](lib_IFlux.IFlux.md#getobjects)
- [getObjectsById](lib_IFlux.IFlux.md#getobjectsbyid)
- [updateObjects](lib_IFlux.IFlux.md#updateobjects)

## Methods

### createObjectGeneric

▸ **createObjectGeneric**\<`T`\>(`ob`, `s?`): `Promise`\<[`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](../classes/flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `s?` | `SecurityHandler` |

#### Returns

`Promise`\<[`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Defined in

[src/types/lib/IFlux.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L10)

___

### createObjectGenericSafe

▸ **createObjectGenericSafe**\<`T`\>(`ob`, `secHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](../classes/flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Defined in

[src/types/lib/IFlux.d.ts:4](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L4)

___

### createSession

▸ **createSession**(`id`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/lib/IFlux.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L6)

___

### deleteObjects

▸ **deleteObjects**(`prodIds`, `obType`, `secHandle?`): `Promise`\<[`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prodIds` | [`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | `any` |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<[`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md)[]\>

#### Defined in

[src/types/lib/IFlux.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L8)

___

### getGeneralAuthorizationAccess

▸ **getGeneralAuthorizationAccess**(`customerPublicKey`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customerPublicKey` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/lib/IFlux.d.ts:5](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L5)

___

### getObjects

▸ **getObjects**\<`T`, `U`\>(`query`, `secHandle?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](../classes/flux_types_FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](../classes/flux_types_BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `U` |
| `secHandle?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Defined in

[src/types/lib/IFlux.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L7)

___

### getObjectsById

▸ **getObjectsById**\<`T`\>(`fi`, `obType`, `obName`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](../classes/flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](../classes/flux_types_FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | (`o?`: `any`) => `T` |
| `obName` | `string` |

#### Returns

`Promise`\<`T`[]\>

#### Defined in

[src/types/lib/IFlux.d.ts:11](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L11)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`prod`, `s?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](../classes/flux_types_FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prod` | `T` \| `T`[] |
| `s?` | `SecurityHandler` |

#### Returns

`Promise`\<`T`[]\>

#### Defined in

[src/types/lib/IFlux.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/IFlux.d.ts#L9)
