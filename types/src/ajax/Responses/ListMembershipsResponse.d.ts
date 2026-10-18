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
export declare class ListMembershipsResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ListMembershipsResponse;
    getClientReturnValue(): ListMembershipsResult;
}
