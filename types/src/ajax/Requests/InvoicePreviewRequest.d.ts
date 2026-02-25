import { RequestBodyBase } from "./RequestBodyBase";
export interface InvoicePreviewProduct {
    id?: number;
    name?: string;
    price?: number;
    orderQuantity?: number;
}
export interface InvoicePreviewParams {
    paymentLinkName?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    dueDate?: string;
    products?: InvoicePreviewProduct[];
    taxRate?: number;
    serviceFeeRate?: number;
    shippingFee?: number;
}
export declare class InvoicePreviewRequest extends RequestBodyBase {
    private params;
    constructor();
    loadClientData(params: InvoicePreviewParams): void;
    getRequestAsString(): string;
}
