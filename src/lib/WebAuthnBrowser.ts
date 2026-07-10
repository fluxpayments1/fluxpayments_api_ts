/**
 * Browser-side glue for passkeys (WebAuthn). Converts the server's options JSON
 * (base64url strings) into the ArrayBuffers navigator.credentials expects, runs
 * the ceremony, and serializes the authenticator's response back to base64url
 * for the Flux endpoints. Browser-only — guard callers with passkeySupported().
 */

function b64uToBuf(b64u: string): ArrayBuffer {
    const b64 = b64u.replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4 ? "=".repeat(4 - (b64.length % 4)) : "";
    const bin = atob(b64 + pad);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
}

function bufToB64u(buf: ArrayBuffer): string {
    const bytes = new Uint8Array(buf);
    let bin = "";
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** True if this browser can do WebAuthn at all. */
export function passkeySupported(): boolean {
    return (
        typeof window !== "undefined" &&
        typeof (window as any).PublicKeyCredential !== "undefined" &&
        !!(navigator as any).credentials
    );
}

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
export async function createPasskey(optionsJson: string): Promise<PasskeyRegistration> {
    const o: any = JSON.parse(optionsJson);
    o.challenge = b64uToBuf(o.challenge);
    o.user.id = b64uToBuf(o.user.id);
    if (Array.isArray(o.excludeCredentials)) {
        o.excludeCredentials = o.excludeCredentials.map((c: any) => ({ ...c, id: b64uToBuf(c.id) }));
    }
    const cred = (await navigator.credentials.create({ publicKey: o })) as PublicKeyCredential;
    if (!cred) throw new Error("Passkey creation was cancelled");
    const resp = cred.response as AuthenticatorAttestationResponse;
    return {
        attestationObject: bufToB64u(resp.attestationObject),
        clientDataJSON: bufToB64u(resp.clientDataJSON),
    };
}

/** navigator.credentials.get() from the server's assertion options JSON. */
export async function getPasskeyAssertion(optionsJson: string): Promise<PasskeyAssertion> {
    const o: any = JSON.parse(optionsJson);
    o.challenge = b64uToBuf(o.challenge);
    if (Array.isArray(o.allowCredentials)) {
        o.allowCredentials = o.allowCredentials.map((c: any) => ({ ...c, id: b64uToBuf(c.id) }));
    }
    const cred = (await navigator.credentials.get({ publicKey: o })) as PublicKeyCredential;
    if (!cred) throw new Error("Passkey sign-in was cancelled");
    const resp = cred.response as AuthenticatorAssertionResponse;
    return {
        credentialId: cred.id, // already base64url (no padding)
        authenticatorData: bufToB64u(resp.authenticatorData),
        clientDataJSON: bufToB64u(resp.clientDataJSON),
        signature: bufToB64u(resp.signature),
        userHandle: resp.userHandle ? bufToB64u(resp.userHandle) : null,
    };
}
