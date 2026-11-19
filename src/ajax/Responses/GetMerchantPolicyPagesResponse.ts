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
export function readPolicyPageUrls(u: any): PolicyPageUrls | null {
    if (!u || typeof u !== "object") return null;
    const terms = typeof u.terms === "string" ? u.terms : "";
    const refundPolicy = typeof u.refundPolicy === "string" ? u.refundPolicy : "";
    const privacyPolicy = typeof u.privacyPolicy === "string" ? u.privacyPolicy : "";
    if (!terms || !refundPolicy || !privacyPolicy) return null;
    return { terms, refundPolicy, privacyPolicy };
}

/** Reads a checkoutUsesPages block defensively; anything not exactly true is false. */
export function readPolicyPageCheckoutUse(c: any): PolicyPageCheckoutUse {
    return {
        terms: !!c && c.terms === true,
        refundPolicy: !!c && c.refundPolicy === true,
        privacyPolicy: !!c && c.privacyPolicy === true,
    };
}

export class GetMerchantPolicyPagesResponse extends ResponseBodyBase {
    private result: MerchantPolicyPagesResult = {
        ok: false,
        enabled: false,
        urls: null,
        checkoutUsesPages: { terms: false, refundPolicy: false, privacyPolicy: false },
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): GetMerchantPolicyPagesResponse {
        const p = JSON.parse(jsonString) || {};
        this.result = {
            ok: !!p.ok,
            enabled: p.enabled === true,
            urls: readPolicyPageUrls(p.urls),
            checkoutUsesPages: readPolicyPageCheckoutUse(p.checkoutUsesPages),
        };
        return this;
    }

    public getClientReturnValue(): MerchantPolicyPagesResult {
        return this.result;
    }
}
