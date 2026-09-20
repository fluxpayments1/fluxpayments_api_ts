import { RequestBodyBase } from "./RequestBodyBase";
export interface ReviewMerchantApplicationsOpts {
    /** Required for "get", "decide" and "packet". */
    applicationId?: number;
    /**
     * On "list": narrows the queue, and is the ONLY way to see a DRAFT
     * (an application somebody is still filling in).
     * On "decide": the decision — UNDER_REVIEW | NEEDS_INFO | APPROVED | DECLINED.
     */
    status?: string;
    /** Reviewer notes. Required on a DECLINED decision. */
    notes?: string;
    /** Queue size. Defaults to 100 server-side. */
    limit?: number;
    csMerchantId?: string;
    p12Password?: string;
    p12PasswordConfirm?: string;
    cardRatePercent?: number;
    cardFlatAmount?: number;
    amexRatePercent?: number;
    amexFlatAmount?: number;
    achRatePercent?: number;
    achFlatAmount?: number;
    processingFeeEnabled?: boolean;
    /** Second call, after the server reported what a scale will really store. */
    acceptRounding?: boolean;
    /** Go ahead although no .p12 could be read to check the password against. */
    acceptUnverifiedP12?: boolean;
}
/**
 * Admin-only merchant application review
 * (reviewMerchantApplications -> reviewMerchantApplicationsWeb).
 *
 * <p>action: "list" | "get" | "decide" | "approve" | "delete" | "packet".
 *
 * <p>NEEDS_INFO is the only decision that reopens an application: it mints a
 * fresh link token, clears any browser session already holding it, and emails
 * the applicant a way back in.
 *
 * <p>"packet" returns the whole application as one PDF, base64 on the
 * response. It is rendered on demand and never stored, so it always reflects
 * the application as it stands right now.
 */
export declare class ReviewMerchantApplicationsRequest extends RequestBodyBase {
    private action;
    private applicationId?;
    private status?;
    private notes?;
    private limit?;
    private csMerchantId?;
    private p12Password?;
    private p12PasswordConfirm?;
    private cardRatePercent?;
    private cardFlatAmount?;
    private amexRatePercent?;
    private amexFlatAmount?;
    private achRatePercent?;
    private achFlatAmount?;
    private processingFeeEnabled?;
    private acceptRounding?;
    private acceptUnverifiedP12?;
    constructor();
    loadClientData(action: string, opts?: ReviewMerchantApplicationsOpts): this;
    getRequestAsString(): string;
}
