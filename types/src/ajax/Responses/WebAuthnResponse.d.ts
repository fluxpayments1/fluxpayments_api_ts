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
export declare class WebAuthnResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): WebAuthnResponse;
    getClientReturnValue(): WebAuthnResult;
}
