import { ResponseBodyBase } from "./ResponseBodyBase";

/**
 * One-call aggregate for the portal Transactions page (getTransactionMetricsWeb).
 *
 * Every count/total is scoped to the requested range (createdAt >= sinceMillis
 * when sinceMillis != null), the calling merchant and activeStatus = true, and
 * is produced by ONE server-side SUM(CASE...) query. No processing-fee
 * (transactionCost) figure is returned at all.
 *
 * - paymentsTotal/paymentsCount: FINALIZED rows whose transactionType is one of
 *   the server's payment types (SUM(total) / count)
 * - refundTotal/refundCount: FINALIZED REFUND rows (stored POSITIVE)
 * - netTotal: payments minus refunds, 2dp
 * - cardTotal/cardCount: FINALIZED CREDIT_CARD + DEBIT_CARD (nothing writes
 *   DEBIT_CARD today; the list's "card" chip filters CREDIT_CARD only because
 *   the list filter has no IN operator)
 * - achTotal/achCount: FINALIZED BANK_ACCOUNT
 * - achPendingTotal/achPendingCount: BANK_ACCOUNT awaiting settlement (PENDING)
 * - authCount: AUTH rows (always $0, so no auth volume is reported)
 * - feeTotal/feeCount: FINALIZED MONTHLY_FEE (the platform's monthly fee, NOT a
 *   processing fee, so it is not subject to the IC+ fee hiding)
 * - declinedCount: FAILED rows of a payment type
 * - allCount: every non-AUTH row, any approvalStatus (what the list's "All" tab shows)
 */
export interface TransactionMetrics {
    range: string;
    sinceMillis: number | null;
    paymentsTotal: number;
    paymentsCount: number;
    refundTotal: number;
    refundCount: number;
    netTotal: number;
    cardTotal: number;
    cardCount: number;
    achTotal: number;
    achCount: number;
    achPendingTotal: number;
    achPendingCount: number;
    authCount: number;
    feeTotal: number;
    feeCount: number;
    declinedCount: number;
    allCount: number;
}

export class GetTransactionMetricsResponse extends ResponseBodyBase {
    private metrics: TransactionMetrics | null = null;

    constructor() {
        super();
    }

    /**
     * Explicit whitelist (no `...parsed` spread): a key the backend adds is
     * dropped here until it is named below — see the "Response classes are
     * WHITELISTS too" note in CLAUDE.md.
     */
    public setResponseJSON(jsonString: string): GetTransactionMetricsResponse {
        const parsed = JSON.parse(jsonString);
        this.metrics = {
            range: String(parsed.range ?? ''),
            sinceMillis: parsed.sinceMillis == null ? null : Number(parsed.sinceMillis),
            paymentsTotal: Number(parsed.paymentsTotal ?? 0),
            paymentsCount: Number(parsed.paymentsCount ?? 0),
            refundTotal: Number(parsed.refundTotal ?? 0),
            refundCount: Number(parsed.refundCount ?? 0),
            netTotal: Number(parsed.netTotal ?? 0),
            cardTotal: Number(parsed.cardTotal ?? 0),
            cardCount: Number(parsed.cardCount ?? 0),
            achTotal: Number(parsed.achTotal ?? 0),
            achCount: Number(parsed.achCount ?? 0),
            achPendingTotal: Number(parsed.achPendingTotal ?? 0),
            achPendingCount: Number(parsed.achPendingCount ?? 0),
            authCount: Number(parsed.authCount ?? 0),
            feeTotal: Number(parsed.feeTotal ?? 0),
            feeCount: Number(parsed.feeCount ?? 0),
            declinedCount: Number(parsed.declinedCount ?? 0),
            allCount: Number(parsed.allCount ?? 0),
        };
        return this;
    }

    public getClientReturnValue(): TransactionMetrics {
        return this.metrics as TransactionMetrics;
    }
}
