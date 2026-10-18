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

const KEYS: (keyof SubscriptionMetricsResult)[] = ['range', 'untilMillis', 'scheduledTotal', 'scheduledCount',
    'monthlyRecurring', 'activeCount', 'activePlanCount', 'issuesCount', 'issuesAmount', 'retryingCount',
    'cancelledCount', 'cancelledLast30Count', 'allCount'];

/** Explicit whitelist: a key the backend adds is dropped until it is named here. */
export class SubscriptionMetricsResponse extends ResponseBodyBase {
    private result: SubscriptionMetricsResult = {};

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): SubscriptionMetricsResponse {
        const p = JSON.parse(jsonString);
        const out: any = {};
        for (const k of KEYS) if (p[k] !== undefined && p[k] !== null) out[k] = p[k];
        this.result = out;
        return this;
    }

    public getClientReturnValue(): SubscriptionMetricsResult {
        return this.result;
    }
}
