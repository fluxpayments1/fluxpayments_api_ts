import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Body of setMerchantAiEnabledWeb (platform admins only, server-gated): flips the
 * business's AI switch. The TARGET is the act-as-resolved merchant of the request —
 * the Partner dashboard runs this under the admin's act-as header for the row being
 * toggled — and `merchantId` is a cross-check against that context, never a selector:
 * a mismatch is refused.
 */
export class SetMerchantAiEnabledRequest extends RequestBodyBase {
    private merchantId?: number;
    private aiEnabled?: boolean;

    constructor() { super(); }

    public loadClientData(merchantId?: number, aiEnabled?: boolean) {
        this.merchantId = merchantId;
        this.aiEnabled = aiEnabled;
        return this;
    }

    public getRequestAsString(): string {
        const body: any = {};
        if (this.merchantId !== undefined && this.merchantId !== null) body.merchantId = this.merchantId;
        if (this.aiEnabled !== undefined && this.aiEnabled !== null) body.aiEnabled = this.aiEnabled;
        return JSON.stringify(body);
    }
}
