import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Everything the admin dashboard's "Create merchant" form sends.
 *
 * <p>The merchant half is the same set of facts an approved application
 * carries; the CyberSource + pricing half is IDENTICAL to the approve action's
 * (rates are PERCENTAGES, 2.9 means 2.9%; the server converts each to the
 * fraction its column holds and asks before storing a value the column's scale
 * cannot keep; a blank rate or flat leaves the signup default).
 */
export interface CreateMerchantAccountOpts {
    /** The owner's portal login. Required; must not already be a login. */
    email: string;
    /** Legal name. Required. */
    businessName: string;
    dbaName?: string;
    ein?: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    /** The named person on the account. Required. */
    firstName: string;
    lastName: string;
    csMerchantId: string;
    p12Password: string;
    p12PasswordConfirm: string;
    cardRatePercent?: number;
    cardFlatAmount?: number;
    amexRatePercent?: number;
    amexFlatAmount?: number;
    achRatePercent?: number;
    achFlatAmount?: number;
    /** Per-authorization fee, dollars. Blank leaves the signup default. */
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
 * Admin-only merchant creation (createMerchantAccount -> createMerchantAccountWeb).
 *
 * <p>Creates the merchant AND the owner's login exactly as approving an
 * application does, and emails the owner a set-your-password invite.
 */
export declare class CreateMerchantAccountRequest extends RequestBodyBase {
    private opts;
    constructor();
    loadClientData(opts: CreateMerchantAccountOpts): this;
    getRequestAsString(): string;
}
