/**
 * Browser-side glue for passkeys (WebAuthn). Converts the server's options JSON
 * (base64url strings) into the ArrayBuffers navigator.credentials expects, runs
 * the ceremony, and serializes the authenticator's response back to base64url
 * for the Flux endpoints. Browser-only — guard callers with passkeySupported().
 */
/** True if this browser can do WebAuthn at all. */
export declare function passkeySupported(): boolean;
export interface PasskeyRegistration {
    attestationObject: string;
    clientDataJSON: string;
}
export interface PasskeyAssertion {
    credentialId: string;
    authenticatorData: string;
    clientDataJSON: string;
    signature: string;
    userHandle: string | null;
}
/** navigator.credentials.create() from the server's registration options JSON. */
export declare function createPasskey(optionsJson: string): Promise<PasskeyRegistration>;
/** navigator.credentials.get() from the server's assertion options JSON. */
export declare function getPasskeyAssertion(optionsJson: string): Promise<PasskeyAssertion>;
