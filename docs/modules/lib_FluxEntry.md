[fluxpayments](../README.md) / [Modules](../modules.md) / lib/FluxEntry

# Module: lib/FluxEntry

## Table of contents

### Functions

- [flux](lib_FluxEntry.md#flux)
- [fluxBrowser](lib_FluxEntry.md#fluxbrowser)
- [fluxGetter](lib_FluxEntry.md#fluxgetter)
- [fluxSocket](lib_FluxEntry.md#fluxsocket)

## Functions

### flux

▸ **flux**(`publicKey`, `privateKey`, `username`, `passphrase`): `Promise`\<[`Flux`](../classes/lib_Flux.Flux.md)\<`MerchantEndpointsSecurityHandle`\>\>

Resolves a Flux object that can be used to interact with the Flux API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | Public key displayed in the Flux dashboard |
| `privateKey` | `string` | Private key displayed in the Flux dashboard |
| `username` | `string` | Username displayed in the Flux dashboard |
| `passphrase` | `string` | Passphrase displayed in the Flux dashboard |

#### Returns

`Promise`\<[`Flux`](../classes/lib_Flux.Flux.md)\<`MerchantEndpointsSecurityHandle`\>\>

A Promise resolving to a Flux object that can be used to interact with the Flux API

#### Defined in

[src/types/lib/FluxEntry.d.ts:25](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxEntry.d.ts#L25)

___

### fluxBrowser

▸ **fluxBrowser**(`publicKey`): `Promise`\<[`Flux`](../classes/lib_Flux.Flux.md)\<`GeneralSecurityHandle`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`\<[`Flux`](../classes/lib_Flux.Flux.md)\<`GeneralSecurityHandle`\>\>

#### Defined in

[src/types/lib/FluxEntry.d.ts:26](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxEntry.d.ts#L26)

___

### fluxGetter

▸ **fluxGetter**(): [`Flux`](../classes/lib_Flux.Flux.md)\<`SecurityHandler`\>

#### Returns

[`Flux`](../classes/lib_Flux.Flux.md)\<`SecurityHandler`\>

#### Defined in

[src/types/lib/FluxEntry.d.ts:27](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxEntry.d.ts#L27)

___

### fluxSocket

▸ **fluxSocket**(`publicKey`, `privateKey`, `username`, `passphrase`): `Promise`\<[`FluxSockets`](../interfaces/lib_FluxSockets.FluxSockets.md)\>

Initializes a connection to the flux websocket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `privateKey` | `string` |
| `username` | `string` |
| `passphrase` | `string` |

#### Returns

`Promise`\<[`FluxSockets`](../interfaces/lib_FluxSockets.FluxSockets.md)\>

#### Defined in

[src/types/lib/FluxEntry.d.ts:15](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/04e1ffcb5aff57642b62dd938b8f3f584c8b091f/src/types/lib/FluxEntry.d.ts#L15)
