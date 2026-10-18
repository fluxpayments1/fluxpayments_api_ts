import { ResponseBodyBase } from "./ResponseBodyBase";
/** The subscriptions list's volume card (getSubscriptionMetricsWeb). Money as plain numbers. */
export interface SubscriptionMetricsResult {
    range?: string;
    untilMillis?: number;
    scheduledTotal?: number;
    scheduledCount?: number;
    monthlyRecurring?: number;
    activeCount?: number;
    activePlanCount?: number;
    issuesCount?: number;
    issuesAmount?: number;
    retryingCount?: number;
    cancelledCount?: number;
    cancelledLast30Count?: number;
    allCount?: number;
}
/** Explicit whitelist: a key the backend adds is dropped until it is named here. */
export declare class SubscriptionMetricsResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): SubscriptionMetricsResponse;
    getClientReturnValue(): SubscriptionMetricsResult;
}
