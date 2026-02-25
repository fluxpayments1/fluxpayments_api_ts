import { RequestBodyBase } from "./RequestBodyBase";
export declare class DownloadInvoiceWebRequest extends RequestBodyBase {
    private paymentLinkNumericId;
    private transactionId;
    private documentType;
    constructor();
    loadClientData(documentType?: "INVOICE" | "RECEIPT", paymentLinkNumericId?: number, transactionId?: number): void;
    getRequestAsString(): string;
}
