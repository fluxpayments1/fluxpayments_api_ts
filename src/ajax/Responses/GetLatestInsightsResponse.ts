import { ResponseBodyBase } from "./ResponseBodyBase";

export interface InsightsResult {
    dailyInsight: string | null;
    dailyDateRange: string | null;
    weeklyInsight: string | null;
    weeklyDateRange: string | null;
    monthlyInsight: string | null;
    monthlyDateRange: string | null;
}

export class GetLatestInsightsResponse extends ResponseBodyBase {
    private dailyInsight: string | null = null;
    private dailyDateRange: string | null = null;
    private weeklyInsight: string | null = null;
    private weeklyDateRange: string | null = null;
    private monthlyInsight: string | null = null;
    private monthlyDateRange: string | null = null;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): GetLatestInsightsResponse {
        const parsed = JSON.parse(jsonString);
        this.dailyInsight = parsed.dailyInsight || null;
        this.dailyDateRange = parsed.dailyDateRange || null;
        this.weeklyInsight = parsed.weeklyInsight || null;
        this.weeklyDateRange = parsed.weeklyDateRange || null;
        this.monthlyInsight = parsed.monthlyInsight || null;
        this.monthlyDateRange = parsed.monthlyDateRange || null;
        return this;
    }

    public getClientReturnValue(): InsightsResult {
        return {
            dailyInsight: this.dailyInsight,
            dailyDateRange: this.dailyDateRange,
            weeklyInsight: this.weeklyInsight,
            weeklyDateRange: this.weeklyDateRange,
            monthlyInsight: this.monthlyInsight,
            monthlyDateRange: this.monthlyDateRange,
        };
    }
}
