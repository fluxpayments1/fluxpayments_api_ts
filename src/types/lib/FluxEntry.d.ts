import { Flux, FluxSockets } from "./";
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
export declare function flux(publicKey: string, privateKey: string, username: string, passphrase: string): Promise<Flux>;
export declare function fluxGetter(): Flux;
