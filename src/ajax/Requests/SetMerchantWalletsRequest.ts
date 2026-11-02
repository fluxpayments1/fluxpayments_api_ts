import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Body of setMerchantWalletsWeb (platform admins only, server-gated): turns Apple Pay and/or
 * Google Pay on the payment page on or off for one business. Like the AI switch, the TARGET is
 * the act-as-resolved merchant of the request and `merchantId` is only a cross-check. Send only
 * the switch being changed; an absent one is left as it is.
 */
export class SetMerchantWalletsRequest extends RequestBodyBase {
    private merchantId?: number;
    private applePayEnabled?: boolean;
    private googlePayEnabled?: boolean;

    constructor() { super(); }

    public loadClientData(merchantId?: number, applePayEnabled?: boolean, googlePayEnabled?: boolean) {
        this.merchantId = merchantId;
        this.applePayEnabled = applePayEnabled;
        this.googlePayEnabled = googlePayEnabled;
        return this;
    }

    public getRequestAsString(): string {
        const body: any = {};
        if (this.merchantId !== undefined && this.merchantId !== null) body.merchantId = this.merchantId;
        if (this.applePayEnabled !== undefined && this.applePayEnabled !== null) body.applePayEnabled = this.applePayEnabled;
        if (this.googlePayEnabled !== undefined && this.googlePayEnabled !== null) body.googlePayEnabled = this.googlePayEnabled;
        return JSON.stringify(body);
    }
}
