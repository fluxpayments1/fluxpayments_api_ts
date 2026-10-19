import { ResponseBodyBase } from "./ResponseBodyBase";

/** One business a partner can reach, and what they can do there. */
export interface PartnerMembershipRow {
    macId: number;
    merchantId: number;
    businessName: string;
    permissionIds: number[];
    permissionCount: number;
    grantedAt: number | null;
}

/** One partner: a person (login) and the businesses they reach as a partner. */
export interface PartnerRow {
    loginId: number | null;
    email: string;
    /** ACTIVE | NOT_SIGNED_IN | LOCKED | UNKNOWN */
    status: string;
    lastSignInAt: number | null;
    addedAt: number | null;
    memberships: PartnerMembershipRow[];
}

export interface PartnerAccessResult {
    ok: boolean;
    partners: PartnerRow[];
    merchants: Array<{ merchantId: number; businessName: string }>;
    catalog: Array<{ id: number; objectType: string; action: string }>;
    /** add: one line per business picked - ADDED, SKIPPED (with why) or FAILED. */
    results: Array<{ merchantId: number; businessName: string; outcome: string; message: string | null }>;
    notice: string | null;
}

export class ManagePartnerAccessResponse extends ResponseBodyBase {
    private result: PartnerAccessResult = { ok: false, partners: [], merchants: [], catalog: [], results: [], notice: null };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ManagePartnerAccessResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            ok: !!p.ok,
            partners: Array.isArray(p.partners) ? p.partners : [],
            merchants: Array.isArray(p.merchants) ? p.merchants : [],
            catalog: Array.isArray(p.catalog) ? p.catalog : [],
            results: Array.isArray(p.results) ? p.results : [],
            notice: p.notice != null ? String(p.notice) : null,
        };
        return this;
    }

    public getClientReturnValue(): PartnerAccessResult {
        return this.result;
    }
}
