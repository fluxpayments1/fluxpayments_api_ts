import { ResponseBodyBase } from "./ResponseBodyBase";
import { PolicyPageCheckoutUse, PolicyPageUrls, readPolicyPageCheckoutUse, readPolicyPageUrls } from "./GetMerchantPolicyPagesResponse";

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

function readSections(list: any): PolicyPageSection[] {
    if (!Array.isArray(list)) return [];
    return list
        .filter((s: any) => s && typeof s === "object")
        .map((s: any) => ({ title: s.title != null ? String(s.title) : "", body: s.body != null ? String(s.body) : "" }));
}

export class ManageMerchantPolicyPagesResponse extends ResponseBodyBase {
    private result: ManageMerchantPolicyPagesResult = {
        ok: false, message: null, enabled: false, rowExists: false, key: null, urls: null,
        checkoutUsesPages: { terms: false, refundPolicy: false, privacyPolicy: false },
        flags: [], fields: [], sections: { terms_extra: [], refund_extra: [], privacy_extra: [] },
        warnings: [], previewHtml: null,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ManageMerchantPolicyPagesResponse {
        const p = JSON.parse(jsonString) || {};
        const s = p.sections && typeof p.sections === "object" ? p.sections : {};
        this.result = {
            ok: !!p.ok,
            message: p.message != null ? String(p.message) : null,
            enabled: p.enabled === true,
            rowExists: p.rowExists === true,
            key: p.key != null ? String(p.key) : null,
            urls: readPolicyPageUrls(p.urls),
            checkoutUsesPages: readPolicyPageCheckoutUse(p.checkoutUsesPages),
            flags: (Array.isArray(p.flags) ? p.flags : [])
                .filter((f: any) => f && f.name != null)
                .map((f: any) => ({
                    name: String(f.name),
                    label: f.label != null ? String(f.label) : String(f.name),
                    auto: f.auto === true,
                    override: f.override === true ? true : f.override === false ? false : null,
                    effective: f.effective === true,
                    derived: f.derived === true,
                })),
            fields: (Array.isArray(p.fields) ? p.fields : [])
                .filter((f: any) => f && f.name != null)
                .map((f: any) => ({
                    name: String(f.name),
                    label: f.label != null ? String(f.label) : String(f.name),
                    auto: f.auto != null ? String(f.auto) : "",
                    override: f.override != null ? String(f.override) : null,
                    effective: f.effective != null ? String(f.effective) : "",
                })),
            sections: {
                terms_extra: readSections(s.terms_extra),
                refund_extra: readSections(s.refund_extra),
                privacy_extra: readSections(s.privacy_extra),
            },
            warnings: (Array.isArray(p.warnings) ? p.warnings : []).filter((w: any) => w != null).map((w: any) => String(w)),
            previewHtml: typeof p.previewHtml === "string" ? p.previewHtml : null,
        };
        return this;
    }

    public getClientReturnValue(): ManageMerchantPolicyPagesResult {
        return this.result;
    }
}
