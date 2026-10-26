import { RequestBodyBase } from "./RequestBodyBase";
export interface InvoicePreviewProduct {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    orderQuantity?: number;
    memo?: string;
    discountId?: number;
    /** This line's tax rate (overrides the product's own), or a fixed tax amount instead. */
    taxRatesId?: number;
    fixedTaxAmount?: number;
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
    /** A fixed tax amount for the whole invoice instead of a rate. */
    fixedTaxAmount?: number;
    serviceFeeRate?: number;
    /** Platform fee rate, PERCENT — Flux's charge, previewed like the service fee. */
    platformFeeRate?: number;
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
