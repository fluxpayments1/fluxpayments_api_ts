import { RequestBodyBase } from "./RequestBodyBase";
export interface MarkInvoiceAsPaidParams {
    paymentLinkId: number;
    paymentMethod: "WIRE" | "VENMO" | "ZELLE" | "PAYPAL" | "CHECK" | "CASH" | "OTHER";
    referenceNumber?: string;
    notes?: string;
}
export declare class MarkInvoiceAsPaidRequest extends RequestBodyBase {
    private paymentLinkId;
    private paymentMethod;
    private referenceNumber?;
    private notes?;
    constructor();
    loadClientData(params: MarkInvoiceAsPaidParams): void;
    getRequestAsString(): string;
}
