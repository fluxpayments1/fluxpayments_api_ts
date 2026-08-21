import { RequestBodyBase } from "./RequestBodyBase";

export class GetInvoiceMetricsRequest extends RequestBodyBase {
    constructor() {
        super();
    }

    public loadClientData(): void {
        // No parameters — aggregates the calling merchant's invoices
    }

    public getRequestAsString(): string {
        return JSON.stringify({});
    }
}
