import { RequestBodyBase } from "./RequestBodyBase";

export class ResendPaymentRequestRequest extends RequestBodyBase {
    private paymentLinkId: number;

    constructor() {
        super();
    }

    public loadClientData(paymentLinkId: number): void {
        this.paymentLinkId = paymentLinkId;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            paymentLinkId: this.paymentLinkId,
        });
    }
}

