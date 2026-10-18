import { ResponseBodyBase } from "./ResponseBodyBase";
/**
 * selectMembershipWeb answers HTTP 200 for BOTH outcomes, deliberately: a refusal
 * (MAC inactive, or not one of this login's memberships) is `{ok:false, reason}`,
 * never a 401 — the portal's CommsService signs the user out on any "401", and a
 * wrong switcher click must not do that. So this result never throws; read `ok`.
 */
export interface SelectMembershipResult {
    ok: boolean;
    /** Plain-words reason when ok is false; null on success. */
    reason: string | null;
    /** The membership now current on the session (echoed by the server on success). */
    macId?: number;
    merchantId?: number;
}
export declare class SelectMembershipResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): SelectMembershipResponse;
    getClientReturnValue(): SelectMembershipResult;
}
