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
    merchants: Array<{
        merchantId: number;
        businessName: string;
    }>;
    catalog: Array<{
        id: number;
        objectType: string;
        action: string;
    }>;
    /** add: one line per business picked - ADDED, SKIPPED (with why) or FAILED. */
    results: Array<{
        merchantId: number;
        businessName: string;
        outcome: string;
        message: string | null;
    }>;
    notice: string | null;
}
export declare class ManagePartnerAccessResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ManagePartnerAccessResponse;
    getClientReturnValue(): PartnerAccessResult;
}
