import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Body of setMerchantThreeDsEnabledWeb (platform admins only, server-gated): turns 3-D Secure
 * on the payment page on or off for one business. Like the AI switch, the TARGET is the
 * act-as-resolved merchant of the request and `merchantId` is only a cross-check.
 */
export class SetMerchantThreeDsEnabledRequest extends RequestBodyBase {
    private merchantId?: number;
    private threeDsEnabled?: boolean;

    constructor() { super(); }

    public loadClientData(merchantId?: number, threeDsEnabled?: boolean) {
        this.merchantId = merchantId;
        this.threeDsEnabled = threeDsEnabled;
        return this;
    }

    public getRequestAsString(): string {
        const body: any = {};
        if (this.merchantId !== undefined && this.merchantId !== null) body.merchantId = this.merchantId;
        if (this.threeDsEnabled !== undefined && this.threeDsEnabled !== null) body.threeDsEnabled = this.threeDsEnabled;
        return JSON.stringify(body);
    }
}
