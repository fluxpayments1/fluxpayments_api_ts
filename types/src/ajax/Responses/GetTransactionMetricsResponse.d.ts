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
export declare class GetTransactionMetricsResponse extends ResponseBodyBase {
    private metrics;
    constructor();
    /**
     * Explicit whitelist (no `...parsed` spread): a key the backend adds is
     * dropped here until it is named below — see the "Response classes are
     * WHITELISTS too" note in CLAUDE.md.
     */
    setResponseJSON(jsonString: string): GetTransactionMetricsResponse;
    getClientReturnValue(): TransactionMetrics;
}
