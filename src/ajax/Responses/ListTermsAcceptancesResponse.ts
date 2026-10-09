import { ResponseBodyBase } from "./ResponseBodyBase";

export interface TermsAcceptanceRow {
    merchantId: number;
    signerName: string | null;
    signerTitle: string | null;
    userEmail: string | null;
    acceptedAt: string | number | null;
    ip: string | null;
    agreementVersion: string | null;
    /** portal | onboarding */
    source: string;
    /** Signed, short-lived link to the drawn signature PNG; null when none is stored. */
    signatureUrl: string | null;
}

export interface TermsAcceptanceListResult {
    version: string | null;
    rows: TermsAcceptanceRow[];
}

export class ListTermsAcceptancesResponse extends ResponseBodyBase {
    private result: TermsAcceptanceListResult = { version: null, rows: [] };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ListTermsAcceptancesResponse {
        const p = JSON.parse(jsonString);
        this.result = { version: p.version ?? null, rows: Array.isArray(p.rows) ? p.rows : [] };
        return this;
    }

    public getClientReturnValue(): TermsAcceptanceListResult { return this.result; }
}
