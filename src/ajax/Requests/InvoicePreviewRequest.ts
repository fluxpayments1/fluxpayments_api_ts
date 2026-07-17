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
    // Business picked on the invoice — server loads its full BILL TO details.
    businessId?: number;
    // Inline (not-yet-persisted) global discount — AI proposal previews where
    // the discount is created by a sibling action at approval time (no id yet).
    inlineDiscountType?: string;
    inlineDiscountAmount?: number;
    inlineDiscountName?: string;
    // Business the invoice bills to — server renders it in the BILL TO block.
    businessName?: string;
}

export class InvoicePreviewRequest extends RequestBodyBase {
    private params: InvoicePreviewParams;

    constructor() {
        super();
    }

    public loadClientData(params: InvoicePreviewParams): void {
        this.params = params;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            paymentLinkName: this.params?.paymentLinkName,
            customerName: this.params?.customerName,
            customerEmail: this.params?.customerEmail,
            customerPhone: this.params?.customerPhone,
            dueDate: this.params?.dueDate,
            memo: this.params?.memo,
            products: this.params?.products?.map(p => ({
                id: p.id,
                name: p.name,
                description: p.description,
                price: p.price,
                orderQuantity: p.orderQuantity || 1,
                memo: p.memo,
                discountId: p.discountId
            })),
            taxRate: this.params?.taxRate,
            serviceFeeRate: this.params?.serviceFeeRate,
            shippingFee: this.params?.shippingFee,
            discountId: this.params?.discountId,
            businessId: this.params?.businessId,
            inlineDiscountType: this.params?.inlineDiscountType,
            inlineDiscountAmount: this.params?.inlineDiscountAmount,
            inlineDiscountName: this.params?.inlineDiscountName,
            businessName: this.params?.businessName
        });
    }
}
