import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Body of setMerchantThreeDsEnabledWeb (platform admins only, server-gated): turns 3-D Secure
 * on the payment page on or off for one business. Like the AI switch, the TARGET is the
 * act-as-resolved merchant of the request and `merchantId` is only a cross-check.
 */
export declare class SetMerchantThreeDsEnabledRequest extends RequestBodyBase {
    private merchantId?;
    private threeDsEnabled?;
    constructor();
    loadClientData(merchantId?: number, threeDsEnabled?: boolean): this;
    getRequestAsString(): string;
}
