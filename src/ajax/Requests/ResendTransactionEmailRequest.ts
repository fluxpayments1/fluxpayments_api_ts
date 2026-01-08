import { RequestBodyBase } from "./RequestBodyBase";

export class ResendTransactionEmailRequest extends RequestBodyBase {
    private transactionId: number;
    private recipientType: "MERCHANT" | "CUSTOMER";

    constructor() {
        super();
    }

    public loadClientData(transactionId: number, recipientType: "MERCHANT" | "CUSTOMER"): void {
        this.transactionId = transactionId;
        this.recipientType = recipientType;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            transactionId: this.transactionId,
            recipientType: this.recipientType,
        });
    }
}

