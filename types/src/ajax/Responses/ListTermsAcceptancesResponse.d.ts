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
export declare class ListTermsAcceptancesResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ListTermsAcceptancesResponse;
    getClientReturnValue(): TermsAcceptanceListResult;
}
