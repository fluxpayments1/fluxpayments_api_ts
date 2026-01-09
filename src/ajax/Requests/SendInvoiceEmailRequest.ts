import { RequestBodyBase } from "./RequestBodyBase";

export class SendInvoiceEmailRequest extends RequestBodyBase {
    private paymentLinkId: number;
    private recipientType: "MERCHANT" | "CUSTOMER";

    constructor() {
        super();
    }

    public loadClientData(paymentLinkId: number, recipientType: "MERCHANT" | "CUSTOMER"): void {
        this.paymentLinkId = paymentLinkId;
        this.recipientType = recipientType;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            paymentLinkId: this.paymentLinkId,
            recipientType: this.recipientType,
        });
    }
}

