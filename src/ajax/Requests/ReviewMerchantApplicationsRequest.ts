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

    // ── Approval: the same fields tools/cybersource-onboard-merchant.sh asks
    //    for. Rates are PERCENTAGES (2.9 means 2.9%); the server converts each
    //    to the fraction its column holds, at that column's own scale, and
    //    refuses until the reviewer accepts any value the scale cannot keep.
    //    A blank rate or flat leaves the signup default.
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
export class ReviewMerchantApplicationsRequest extends RequestBodyBase {
    private action: string;
    private applicationId?: number;
    private status?: string;
    private notes?: string;
    private limit?: number;
    private csMerchantId?: string;
    private p12Password?: string;
    private p12PasswordConfirm?: string;
    private cardRatePercent?: number;
    private cardFlatAmount?: number;
    private amexRatePercent?: number;
    private amexFlatAmount?: number;
    private achRatePercent?: number;
    private achFlatAmount?: number;
    private authFeeAmount?: number;
    private monthlyFeeAmount?: number;
    private processingFeeEnabled?: boolean;
    private acceptRounding?: boolean;
    private acceptUnverifiedP12?: boolean;

    constructor() { super(); }

    public loadClientData(action: string, opts?: ReviewMerchantApplicationsOpts) {
        this.action = action;
        this.applicationId = opts?.applicationId;
        this.status = opts?.status;
        this.notes = opts?.notes;
        this.limit = opts?.limit;
        this.csMerchantId = opts?.csMerchantId;
        this.p12Password = opts?.p12Password;
        this.p12PasswordConfirm = opts?.p12PasswordConfirm;
        this.cardRatePercent = opts?.cardRatePercent;
        this.cardFlatAmount = opts?.cardFlatAmount;
        this.amexRatePercent = opts?.amexRatePercent;
        this.amexFlatAmount = opts?.amexFlatAmount;
        this.achRatePercent = opts?.achRatePercent;
        this.achFlatAmount = opts?.achFlatAmount;
        this.authFeeAmount = opts?.authFeeAmount;
        this.monthlyFeeAmount = opts?.monthlyFeeAmount;
        this.processingFeeEnabled = opts?.processingFeeEnabled;
        this.acceptRounding = opts?.acceptRounding;
        this.acceptUnverifiedP12 = opts?.acceptUnverifiedP12;
        return this;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            action: this.action,
            applicationId: this.applicationId,
            status: this.status,
            notes: this.notes,
            limit: this.limit,
            csMerchantId: this.csMerchantId,
            p12Password: this.p12Password,
            p12PasswordConfirm: this.p12PasswordConfirm,
            cardRatePercent: this.cardRatePercent,
            cardFlatAmount: this.cardFlatAmount,
            amexRatePercent: this.amexRatePercent,
            amexFlatAmount: this.amexFlatAmount,
            achRatePercent: this.achRatePercent,
            achFlatAmount: this.achFlatAmount,
            authFeeAmount: this.authFeeAmount,
            monthlyFeeAmount: this.monthlyFeeAmount,
            processingFeeEnabled: this.processingFeeEnabled,
            acceptRounding: this.acceptRounding,
            acceptUnverifiedP12: this.acceptUnverifiedP12,
        });
    }
}
