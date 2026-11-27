import { RequestBodyBase } from "./RequestBodyBase";
/** Options for `Flux.createAmendment` (createAmendmentWeb, platform admins only). */
export interface CreateAmendmentOpts {
    /** `preview` totals the card fees booked in the period; `create` writes the amendment. */
    action: 'preview' | 'create';
    /** The business being viewed: a cross-check, never a selector. Required to create. */
    merchantId?: number;
    /** First and last day of the period, `yyyy-MM-dd` (UTC, inclusive). Required to preview. */
    from?: string;
    to?: string;
    /** The fee change as a string, two decimals at most; negative = fee given back. */
    feeAdjustment?: string;
    /** Why the amendment is made (at most 500 characters). Required to create. */
    reason?: string;
}
/**
 * Body of createAmendmentWeb (2026-11-19, change ticket #55). Only the keys the caller set
 * are sent. The target business is the act-as-resolved merchant of the request.
 */
export declare class CreateAmendmentRequest extends RequestBodyBase {
    private opts;
    constructor();
    loadClientData(opts?: CreateAmendmentOpts): this;
    getRequestAsString(): string;
}
