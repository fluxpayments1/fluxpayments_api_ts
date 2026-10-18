import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Body for getTransactionMetricsWeb: {"range":"30d"}.
 *
 * `range` is one of "7d" | "30d" | "90d" | "ytd" | "all" (UTC on the server:
 * 7d/30d/90d = createdAt >= now - N days, "ytd" = Jan 1 00:00:00 UTC of the
 * current year, "all" = no lower bound). Unknown/blank resolves to "30d"
 * server-side, and the server echoes the resolved range + lower bound back.
 *
 * HOW THE RANGE REACHES THE WIRE: `CMMT.fetch` instantiates the request with NO
 * constructor args (`new req()`) and then calls `loadClientData(...args)` with
 * whatever the Flux method passed after the security handle — the same
 * mechanism `GetPartnerDashboardRequest` uses. So the value a caller hands to
 * `Flux.getTransactionMetrics(range)` arrives through `loadClientData`, never
 * through the constructor; the constructor default only covers a direct
 * `new GetTransactionMetricsRequest()`.
 */
export class GetTransactionMetricsRequest extends RequestBodyBase {
    private range: string;

    constructor(range: string = "30d") {
        super();
        this.range = range;
    }

    public loadClientData(range?: string): void {
        if (typeof range === "string" && range.trim() !== "") this.range = range;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ range: this.range });
    }
}
