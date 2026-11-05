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
    /** On "invite": the email address the application link is sent to. */
    email?: string;
    csMerchantId?: string;
    p12Password?: string;
    p12PasswordConfirm?: string;
    cardRatePercent?: number;
    cardFlatAmount?: number;
    amexRatePercent?: number;
    amexFlatAmount?: number;
    achRatePercent?: number;
    achFlatAmount?: number;
    /** Per-authorization fee, dollars (what Flux charges per $0 verification / declined attempt). Blank leaves the default. */
    authFeeAmount?: number;
    /** Monthly platform fee, dollars. Blank leaves the column default. */
    monthlyFeeAmount?: number;
    processingFeeEnabled?: boolean;
    /** Interchange-plus merchant: every platform fee figure is hidden from them. */
    icPlus?: boolean;
    /** Second call, after the server reported what a scale will really store. */
    acceptRounding?: boolean;
    /** Go ahead although no .p12 could be read to check the password against. */
    acceptUnverifiedP12?: boolean;
}
/**
 * Admin-only merchant application review
 * (reviewMerchantApplications -> reviewMerchantApplicationsWeb).
 *
 * <p>action: "list" | "get" | "decide" | "approve" | "delete" | "packet" | "invite" | "resend".
 *
 * <p>Applications are by invitation only (2026-11-04): "invite" creates one for
 * {@code email} (or reuses the open one) and emails the link; "resend" emails
 * the link of an application still being filled in again.
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
    private email?;
    private csMerchantId?;
    private p12Password?;
    private p12PasswordConfirm?;
    private cardRatePercent?;
    private cardFlatAmount?;
    private amexRatePercent?;
    private amexFlatAmount?;
    private achRatePercent?;
    private achFlatAmount?;
    private authFeeAmount?;
    private monthlyFeeAmount?;
    private processingFeeEnabled?;
    private icPlus?;
    private acceptRounding?;
    private acceptUnverifiedP12?;
    constructor();
    loadClientData(action: string, opts?: ReviewMerchantApplicationsOpts): this;
    getRequestAsString(): string;
}
