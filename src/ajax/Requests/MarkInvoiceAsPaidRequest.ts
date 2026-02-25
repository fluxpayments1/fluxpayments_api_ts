import { RequestBodyBase } from "./RequestBodyBase";

export interface MarkInvoiceAsPaidParams {
    paymentLinkId: number;
    paymentMethod: "WIRE" | "VENMO" | "ZELLE" | "PAYPAL" | "CHECK" | "CASH" | "OTHER";
    referenceNumber?: string;
    notes?: string;
}

export class MarkInvoiceAsPaidRequest extends RequestBodyBase {
    private paymentLinkId: number;
    private paymentMethod: string;
    private referenceNumber?: string;
    private notes?: string;

    constructor() {
        super();
    }

    public loadClientData(params: MarkInvoiceAsPaidParams): void {
        this.paymentLinkId = params.paymentLinkId;
        this.paymentMethod = params.paymentMethod;
        this.referenceNumber = params.referenceNumber;
        this.notes = params.notes;
    }

    public getRequestAsString(): string {
        const data: any = {
            paymentLinkId: this.paymentLinkId,
            paymentMethod: this.paymentMethod,
        };
        
        if (this.referenceNumber) {
            data.referenceNumber = this.referenceNumber;
        }
        if (this.notes) {
            data.notes = this.notes;
        }
        
        return JSON.stringify(data);
    }
}
