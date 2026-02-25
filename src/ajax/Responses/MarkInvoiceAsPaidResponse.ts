import { ResponseBodyBase } from "./ResponseBodyBase";

export interface MarkInvoiceAsPaidResult {
    transaction: any;
    message: string;
}

export class MarkInvoiceAsPaidResponse extends ResponseBodyBase {
    private transaction: any;
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): MarkInvoiceAsPaidResponse {
        const parsed = JSON.parse(jsonString);
        this.transaction = parsed.transaction || null;
        this.message = parsed.message || '';
        return this;
    }

    public getClientReturnValue(): MarkInvoiceAsPaidResult {
        return {
            transaction: this.transaction,
            message: this.message
        };
    }
}
