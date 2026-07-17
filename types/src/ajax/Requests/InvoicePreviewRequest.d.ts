import { RequestBodyBase } from "./RequestBodyBase";
export interface InvoicePreviewProduct {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    orderQuantity?: number;
    memo?: string;
    discountId?: number;
}
export interface InvoicePreviewParams {
    paymentLinkName?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    dueDate?: string;
    memo?: string;
    products?: InvoicePreviewProduct[];
    taxRate?: number;
    serviceFeeRate?: number;
    shippingFee?: number;
    discountId?: number;
    businessId?: number;
    inlineDiscountType?: string;
    inlineDiscountAmount?: number;
    inlineDiscountName?: string;
    businessName?: string;
}
export declare class InvoicePreviewRequest extends RequestBodyBase {
    private params;
    constructor();
    loadClientData(params: InvoicePreviewParams): void;
    getRequestAsString(): string;
}
