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
export declare class GetInvoiceMetricsResponse extends ResponseBodyBase {
    private metrics;
    constructor();
    setResponseJSON(jsonString: string): GetInvoiceMetricsResponse;
    getClientReturnValue(): InvoiceMetrics;
}
