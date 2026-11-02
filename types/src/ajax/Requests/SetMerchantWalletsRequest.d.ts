import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Body of setMerchantWalletsWeb (platform admins only, server-gated): turns Apple Pay and/or
 * Google Pay on the payment page on or off for one business. Like the AI switch, the TARGET is
 * the act-as-resolved merchant of the request and `merchantId` is only a cross-check. Send only
 * the switch being changed; an absent one is left as it is.
 */
export declare class SetMerchantWalletsRequest extends RequestBodyBase {
    private merchantId?;
    private applePayEnabled?;
    private googlePayEnabled?;
    constructor();
    loadClientData(merchantId?: number, applePayEnabled?: boolean, googlePayEnabled?: boolean): this;
    getRequestAsString(): string;
}
