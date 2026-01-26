import { RequestBodyBase } from "./RequestBodyBase";
export declare class DownloadInvoiceRequest extends RequestBodyBase {
    private paymentLinkId;
    private documentType;
    constructor();
    loadClientData(paymentLinkId: string, documentType?: "INVOICE" | "RECEIPT"): void;
    getRequestAsString(): string;
}
