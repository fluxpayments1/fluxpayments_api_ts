import { RequestBodyBase } from "./RequestBodyBase";

export class DownloadInvoiceRequest extends RequestBodyBase {
    private paymentLinkId: string;
    private documentType: "INVOICE" | "RECEIPT";

    constructor() {
        super();
    }

    public loadClientData(paymentLinkId: string, documentType: "INVOICE" | "RECEIPT" = "INVOICE"): void {
        this.paymentLinkId = paymentLinkId;
        this.documentType = documentType;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            paymentLinkId: this.paymentLinkId,
            documentType: this.documentType,
        });
    }
}
