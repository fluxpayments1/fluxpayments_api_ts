import { RequestBodyBase } from "./RequestBodyBase";

/** One extra section a Flux admin adds to a policy page (markdown allowed in `body`). */
export interface PolicyPageSectionInput {
    title: string;
    body: string;
}

/** The three lists of extra sections, one per page. */
export interface PolicyPageSectionsInput {
    terms_extra?: PolicyPageSectionInput[];
    refund_extra?: PolicyPageSectionInput[];
    privacy_extra?: PolicyPageSectionInput[];
}

export type PolicyPagesAction = 'get' | 'save' | 'enable' | 'disable' | 'linkCheckout' | 'unlinkCheckout' | 'preview' | 'import';
export type PolicyPageDoc = 'terms' | 'refund-policy' | 'privacy-policy';

/** One call of manageMerchantPolicyPagesWeb (platform admins only, server-gated). */
export interface ManageMerchantPolicyPagesOpts {
    action: PolicyPagesAction;
    /** save: flag overrides by name. true/false = forced, null = remove the override (use the automatic value). */
    flags?: { [name: string]: boolean | null };
    /** save: field overrides by name. A string = shown instead, "" = show nothing, null = remove the override. */
    fields?: { [name: string]: string | null };
    /** save / preview: the full replacement lists of extra sections (preview saves nothing). */
    sections?: PolicyPageSectionsInput;
    /** preview: which page to render. */
    doc?: PolicyPageDoc;
    /** import: the merchants/*.json settings file as text (flags, fields, sections). */
    json?: string;
    /** Cross-check only: the server acts on the act-as-resolved merchant and refuses a mismatch. */
    merchantId?: number;
}

/**
 * Body of manageMerchantPolicyPagesWeb - the Flux admin card on Merchant Settings -> Checkout.
 * Only the keys the caller supplied are sent. A `null` INSIDE `flags` / `fields` is sent as null
 * on purpose: it is how an override is removed.
 */
export class ManageMerchantPolicyPagesRequest extends RequestBodyBase {
    private opts: ManageMerchantPolicyPagesOpts = { action: "get" };

    constructor() { super(); }

    public loadClientData(opts?: ManageMerchantPolicyPagesOpts) {
        this.opts = opts || { action: "get" };
        return this;
    }

    public getRequestAsString(): string {
        const o = this.opts || { action: "get" };
        const body: any = { action: o.action || "get" };
        if (o.flags && typeof o.flags === "object") body.flags = o.flags;
        if (o.fields && typeof o.fields === "object") body.fields = o.fields;
        if (o.sections && typeof o.sections === "object") body.sections = o.sections;
        if (o.doc !== undefined && o.doc !== null) body.doc = o.doc;
        if (o.json !== undefined && o.json !== null) body.json = o.json;
        if (o.merchantId !== undefined && o.merchantId !== null) body.merchantId = o.merchantId;
        return JSON.stringify(body);
    }
}
