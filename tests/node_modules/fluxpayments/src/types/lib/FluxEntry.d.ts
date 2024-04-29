import { MerchantEndpointsSecurityHandle } from "../ajax/security/MerchantEndpointsSecurityHandle";
import { Flux } from "./Flux";
import { FluxSockets } from "./FluxSockets";
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle";
/**
 * Initializes a connection to the flux websocket.
 *
 *
 * @param publicKey
 * @param privateKey
 * @param username
 * @param passphrase
 * @returns
 */
export declare function fluxSocket(publicKey: string, privateKey: string, username: string, passphrase: string): Promise<FluxSockets>;
/**
 * Resolves a Flux object that can be used to interact with the Flux API
 *
 * @param publicKey Public key displayed in the Flux dashboard
 * @param privateKey Private key displayed in the Flux dashboard
 * @param username Username displayed in the Flux dashboard
 * @param passphrase Passphrase displayed in the Flux dashboard
 * @returns A Promise resolving to a Flux object that can be used to interact with the Flux API
 */
export declare function flux(publicKey: string, privateKey: string, username: string, passphrase: string): Promise<Flux<MerchantEndpointsSecurityHandle>>;
export declare function fluxBrowser(publicKey: string): Promise<Flux<GeneralSecurityHandle>>;
export declare function fluxGetter(): Flux<import("../ajax/security").SecurityHandler>;
