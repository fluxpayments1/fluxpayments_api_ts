import { ResponseBodyBase } from "./ResponseBodyBase";

export interface WebAuthnCredentialInfo {
    id: number;
    label: string;
    aaguid: string;
    createdAt: number;
    lastUsedAt: number;
}

export interface WebAuthnResult {
    optionsJson?: string;
    createdCredentialId?: string;
    createdLabel?: string;
    twoFactorSecret?: string;
    credentials?: WebAuthnCredentialInfo[];
    status?: number;
    errorMsg?: string;
}

export class WebAuthnResponse extends ResponseBodyBase {
    private result: WebAuthnResult = {};

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): WebAuthnResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            optionsJson: p.optionsJson,
            createdCredentialId: p.createdCredentialId,
            createdLabel: p.createdLabel,
            twoFactorSecret: p.twoFactorSecret,
            credentials: p.credentials || [],
            status: p.status,
            errorMsg: p.errorMsg,
        };
        return this;
    }

    public getClientReturnValue(): WebAuthnResult {
        return this.result;
    }
}
