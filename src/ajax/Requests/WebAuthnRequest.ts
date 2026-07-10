import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Body for every passkey (WebAuthn) endpoint. The Flux methods pass a single
 * plain object with only the fields that endpoint needs (attestation blobs for
 * register-verify, assertion blobs for assertion-verify, a db id for delete);
 * the options endpoints pass nothing.
 */
export class WebAuthnRequest extends RequestBodyBase {
    private data: any = {};

    constructor() {
        super();
    }

    public loadClientData(data?: any): void {
        this.data = data || {};
    }

    public getRequestAsString(): string {
        return JSON.stringify(this.data || {});
    }
}
