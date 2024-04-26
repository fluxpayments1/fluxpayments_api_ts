[fluxpayments](../README.md) / [Modules](../modules.md) / [lib/FluxSockets](../modules/lib_FluxSockets.md) / FluxSockets

# Interface: FluxSockets

[lib/FluxSockets](../modules/lib_FluxSockets.md).FluxSockets

## Implemented by

- [`FluxWebsockets`](../classes/lib_FluxSockets.FluxWebsockets.md)

## Table of contents

### Methods

- [closeSocketAndListeners](lib_FluxSockets.FluxSockets.md#closesocketandlisteners)
- [subscribe](lib_FluxSockets.FluxSockets.md#subscribe)
- [unSubscribe](lib_FluxSockets.FluxSockets.md#unsubscribe)

## Methods

### closeSocketAndListeners

▸ **closeSocketAndListeners**(): `any`

#### Returns

`any`

#### Defined in

[src/types/lib/FluxSockets.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxSockets.d.ts#L25)

___

### subscribe

▸ **subscribe**(`subs`, `listener`): `Promise`\<[`FluxSockets`](lib_FluxSockets.FluxSockets.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subs` | [`Subscription`](../enums/lib_FluxSockets.Subscription.md) \| [`Subscription`](../enums/lib_FluxSockets.Subscription.md)[] |
| `listener` | (`emissionData`: [`EmissionData`](../classes/flux_types_EmissionData.EmissionData.md)) => `void` |

#### Returns

`Promise`\<[`FluxSockets`](lib_FluxSockets.FluxSockets.md)\>

#### Defined in

[src/types/lib/FluxSockets.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxSockets.d.ts#L26)

___

### unSubscribe

▸ **unSubscribe**(`subs`, `listener`): `Promise`\<[`FluxSockets`](lib_FluxSockets.FluxSockets.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subs` | [`Subscription`](../enums/lib_FluxSockets.Subscription.md) \| [`Subscription`](../enums/lib_FluxSockets.Subscription.md)[] |
| `listener` | (`emissionData`: [`EmissionData`](../classes/flux_types_EmissionData.EmissionData.md)) => `void` |

#### Returns

`Promise`\<[`FluxSockets`](lib_FluxSockets.FluxSockets.md)\>

#### Defined in

[src/types/lib/FluxSockets.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxSockets.d.ts#L27)
