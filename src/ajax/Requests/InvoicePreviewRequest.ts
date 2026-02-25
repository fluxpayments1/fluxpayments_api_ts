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
            products: this.params?.products?.map(p => ({
                id: p.id,
                name: p.name,
                price: p.price,
                orderQuantity: p.orderQuantity || 1
            })),
            taxRate: this.params?.taxRate,
            serviceFeeRate: this.params?.serviceFeeRate,
            shippingFee: this.params?.shippingFee
        });
    }
}
