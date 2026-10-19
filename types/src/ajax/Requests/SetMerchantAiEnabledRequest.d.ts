import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Body of setMerchantAiEnabledWeb (platform admins only, server-gated): flips the
 * business's AI switch. The TARGET is the act-as-resolved merchant of the request —
 * the Partner dashboard runs this under the admin's act-as header for the row being
 * toggled — and `merchantId` is a cross-check against that context, never a selector:
 * a mismatch is refused.
 */
export declare class SetMerchantAiEnabledRequest extends RequestBodyBase {
    private merchantId?;
    private aiEnabled?;
    constructor();
    loadClientData(merchantId?: number, aiEnabled?: boolean): this;
    getRequestAsString(): string;
}
