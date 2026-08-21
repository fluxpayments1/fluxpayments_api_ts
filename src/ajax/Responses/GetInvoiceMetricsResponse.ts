import { ResponseBodyBase } from "./ResponseBodyBase";

export interface InvoiceMetrics {
    overdueTotal: number;
    overdueCount: number;
    notDueTotal: number;
    notDueCount: number;
    paid30Total: number;
    paid30Count: number;
    allCount: number;
    outstandingCount: number;
    sentCount: number;
    notSentCount: number;
    paidCount: number;
    cancelledCount: number;
}

export class GetInvoiceMetricsResponse extends ResponseBodyBase {
    private metrics: InvoiceMetrics | null = null;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): GetInvoiceMetricsResponse {
        const parsed = JSON.parse(jsonString);
        this.metrics = {
            overdueTotal: Number(parsed.overdueTotal || 0),
            overdueCount: Number(parsed.overdueCount || 0),
            notDueTotal: Number(parsed.notDueTotal || 0),
            notDueCount: Number(parsed.notDueCount || 0),
            paid30Total: Number(parsed.paid30Total || 0),
            paid30Count: Number(parsed.paid30Count || 0),
            allCount: Number(parsed.allCount || 0),
            outstandingCount: Number(parsed.outstandingCount || 0),
            sentCount: Number(parsed.sentCount || 0),
            notSentCount: Number(parsed.notSentCount || 0),
            paidCount: Number(parsed.paidCount || 0),
            cancelledCount: Number(parsed.cancelledCount || 0),
        };
        return this;
    }

    public getClientReturnValue(): InvoiceMetrics {
        return this.metrics as InvoiceMetrics;
    }
}
