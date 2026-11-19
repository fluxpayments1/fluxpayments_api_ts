import { ResponseBodyBase } from "./ResponseBodyBase";
/** The three public policy page addresses of one merchant (always the .html form). */
export interface PolicyPageUrls {
    terms: string;
    refundPolicy: string;
    privacyPolicy: string;
}
/** For each checkout policy link: does it currently point at the Flux page? */
export interface PolicyPageCheckoutUse {
    terms: boolean;
    refundPolicy: boolean;
    privacyPolicy: boolean;
}
/** getMerchantPolicyPagesWeb: the merchant-facing view of its Flux policy pages. */
export interface MerchantPolicyPagesResult {
    ok: boolean;
    /** Off unless the server says true. A merchant only sees the pages when they are on. */
    enabled: boolean;
    /** null when the merchant has no pages (or they are off). */
    urls: PolicyPageUrls | null;
    checkoutUsesPages: PolicyPageCheckoutUse;
}
/** Reads a urls block defensively; null unless all three are non-empty strings. */
export declare function readPolicyPageUrls(u: any): PolicyPageUrls | null;
/** Reads a checkoutUsesPages block defensively; anything not exactly true is false. */
export declare function readPolicyPageCheckoutUse(c: any): PolicyPageCheckoutUse;
export declare class GetMerchantPolicyPagesResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): GetMerchantPolicyPagesResponse;
    getClientReturnValue(): MerchantPolicyPagesResult;
}
