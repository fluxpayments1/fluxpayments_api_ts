import { RequestBodyBase } from "./RequestBodyBase";

export class DownloadInvoiceWebRequest extends RequestBodyBase {
    private paymentLinkNumericId: number;
    private transactionId: number;
    private documentType: "INVOICE" | "RECEIPT" | "REFUND";

    constructor() {
        super();
    }

    public loadClientData(documentType: "INVOICE" | "RECEIPT" | "REFUND" = "INVOICE", paymentLinkNumericId?: number, transactionId?: number): void {
        this.documentType = documentType;
        this.paymentLinkNumericId = paymentLinkNumericId;
        this.transactionId = transactionId;
    }

    public getRequestAsString(): string {
        const data: any = {
            documentType: this.documentType,
        };
        
        if (this.paymentLinkNumericId) {
            data.paymentLinkNumericId = this.paymentLinkNumericId;
        }
        if (this.transactionId) {
            data.transactionId = this.transactionId;
        }
        
        return JSON.stringify(data);
    }
}
