import { ResponseBodyBase } from "./ResponseBodyBase";
export interface InsightsResult {
    dailyInsight: string | null;
    dailyDateRange: string | null;
    weeklyInsight: string | null;
    weeklyDateRange: string | null;
    monthlyInsight: string | null;
    monthlyDateRange: string | null;
}
export declare class GetLatestInsightsResponse extends ResponseBodyBase {
    private dailyInsight;
    private dailyDateRange;
    private weeklyInsight;
    private weeklyDateRange;
    private monthlyInsight;
    private monthlyDateRange;
    constructor();
    setResponseJSON(jsonString: string): GetLatestInsightsResponse;
    getClientReturnValue(): InsightsResult;
}
