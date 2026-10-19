import { ResponseBodyBase } from "./ResponseBodyBase";

/** One merchant the signed-in login belongs to (one MAC = one membership). */
export interface MembershipRow {
    macId: number;
    merchantId: number;
    businessName: string | null;
    isAdminKey: boolean;
    permissionCount: number;
    /** True for the membership this request ran as (the server's own verdict). */
    current: boolean;
    /** Partner-provisioned membership (2026-10-19): Flux gave this person access to a client's
     *  business. Display only - the server refuses the AI assistant on it. */
    partnerMembership: boolean;
}

/** One business an env-allowlisted ADMIN can view through the switcher (admin act-as). */
export interface MerchantCatalogRow {
    merchantId: number;
    businessName: string;
}

export interface ListMembershipsResult {
    memberships: MembershipRow[];
    /** Every active merchant — ADMINS ONLY (empty for everyone else). The switcher's
     *  "All businesses" list; choosing one is admin act-as (setActAsMerchant). */
    merchants: MerchantCatalogRow[];
    /** The merchant this request was ACTED AS per the server (null = not acting-as,
     *  undefined = a backend that predates the field). */
    actingAsMerchantId: number | null | undefined;
    /** The caller is one of the env-allowlisted platform admins (unscoped). */
    admin: boolean;
    /** The login holds >= 2 active memberships — the portal shows a merchant switcher. */
    multiMerchant: boolean;
    /**
     * The macId the server resolved as current for this session (null when the server
     * did not say — a stale backend). Prefer this over any client-side memory of a
     * selection: PORTAL_LOGIN.LAST_SELECTED_MAC_ID is what the server actually used.
     */
    currentMacId: number | null;
    /** The PORTAL_LOGIN id behind the session (null when the server did not say). */
    loginId: number | null;
}

export class ListMembershipsResponse extends ResponseBodyBase {
    private result: ListMembershipsResult = {
        memberships: [], merchants: [], actingAsMerchantId: undefined,
        admin: false, multiMerchant: false, currentMacId: null, loginId: null,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ListMembershipsResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            memberships: (p.memberships || []).map((r: any) => ({
                macId: r.macId,
                merchantId: r.merchantId,
                businessName: r.businessName ?? null,
                isAdminKey: !!r.isAdminKey,
                permissionCount: r.permissionCount ?? 0,
                current: !!r.current,
                partnerMembership: !!r.partnerMembership,
            })),
            merchants: (Array.isArray(p.merchants) ? p.merchants : [])
                .filter((r: any) => r && r.merchantId != null)
                .map((r: any) => ({
                    merchantId: Number(r.merchantId),
                    businessName: String(r.businessName ?? ('Merchant ' + r.merchantId)),
                })),
            // undefined (key absent) = an older backend that never said; null = not acting-as.
            actingAsMerchantId: !('actingAsMerchantId' in p) ? undefined
                : (p.actingAsMerchantId != null ? Number(p.actingAsMerchantId) : null),
            admin: !!p.admin,
            multiMerchant: !!p.multiMerchant,
            currentMacId: p.currentMacId != null ? Number(p.currentMacId) : null,
            loginId: p.loginId != null ? Number(p.loginId) : null,
        };
        return this;
    }

    public getClientReturnValue(): ListMembershipsResult {
        return this.result;
    }
}
