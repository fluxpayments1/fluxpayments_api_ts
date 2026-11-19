import { ResponseBodyBase } from "./ResponseBodyBase";
import { PolicyPageCheckoutUse, PolicyPageUrls } from "./GetMerchantPolicyPagesResponse";
/** One yes/no answer the pages are built from. */
export interface PolicyPageFlag {
    name: string;
    label: string;
    /** Worked out from the account. */
    auto: boolean;
    /** The admin's forced value, or null when the automatic value is used. */
    override: boolean | null;
    /** What the pages use. */
    effective: boolean;
    /**
     * The automatic value is worked out from the account or from other answers (otherwise it is
     * a fixed "no"). Says nothing about overriding: every flag can be overridden.
     */
    derived: boolean;
}
/** One account detail the pages show. */
export interface PolicyPageField {
    name: string;
    label: string;
    /** Taken from the account. */
    auto: string;
    /** The admin's text ("" = show nothing), or null when the automatic value is used. */
    override: string | null;
    /** What the pages show. */
    effective: string;
}
export interface PolicyPageSection {
    title: string;
    body: string;
}
export interface PolicyPageSections {
    terms_extra: PolicyPageSection[];
    refund_extra: PolicyPageSection[];
    privacy_extra: PolicyPageSection[];
}
/** manageMerchantPolicyPagesWeb: the full admin picture after every action. */
export interface ManageMerchantPolicyPagesResult {
    ok: boolean;
    message: string | null;
    enabled: boolean;
    rowExists: boolean;
    key: string | null;
    urls: PolicyPageUrls | null;
    checkoutUsesPages: PolicyPageCheckoutUse;
    flags: PolicyPageFlag[];
    fields: PolicyPageField[];
    sections: PolicyPageSections;
    warnings: string[];
    /** preview only: the rendered page. Show it ONLY in a sandboxed iframe. */
    previewHtml: string | null;
}
export declare class ManageMerchantPolicyPagesResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ManageMerchantPolicyPagesResponse;
    getClientReturnValue(): ManageMerchantPolicyPagesResult;
}
