import { RequestBodyBase } from "./RequestBodyBase";
export declare class SendInvoiceEmailRequest extends RequestBodyBase {
    private paymentLinkId;
    private recipientType;
    constructor();
    loadClientData(paymentLinkId: number, recipientType: "MERCHANT" | "CUSTOMER"): void;
    getRequestAsString(): string;
}
