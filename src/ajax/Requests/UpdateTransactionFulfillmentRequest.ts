import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Merchant-asserted fulfillment / refund-reason edit on one transaction.
 *
 * These five fields are the ONLY merchant-writable chargeback-evidence fields
 * (docs/chargeback-evidence/DESIGN.md 6.2 / 6.8). Every other evidence field is
 * server-written, is absent from Transaction.serialize(), and is stripped by the
 * backend's generic updater — an evidence record a merchant can rewrite after
 * the fact is not evidence.
 *
 * CLEARING: `undefined` (omit the key) leaves the stored value alone; `""`
 * CLEARS it. That distinction is the whole reason this is a dedicated endpoint
 * rather than a generic update — the generic path is a non-null merge and
 * structurally cannot clear a field, and clearing matters here because a stale
 * tracking number is worse evidence than no tracking number.
 *
 * DATES ARE CALENDAR DAYS (2026-09-11). `shippedAt` / `deliveredAt` (and the
 * service variant's "provided on", which rides `deliveredAt`) are days the
 * merchant picked, not instants, so the portal sends them as `yyyy-MM-dd` — the
 * LOCAL day shown in the picker — and the server stores UTC midnight of that day
 * and prints the UTC date back in the evidence record. Sending an ISO instant of
 * local midnight (what older portal builds did) records the wrong day for any
 * merchant east of UTC. The server still accepts ISO-8601, epoch millis and epoch
 * seconds for API callers; "" clears. No SDK behaviour changes here — the field
 * is a pass-through string.
 */
export interface UpdateTransactionFulfillmentParams {
    transactionId: number;
    fulfillmentCarrier?: string;
    fulfillmentTracking?: string;
    /** Calendar day as yyyy-MM-dd (the portal's form); ISO-8601 / epoch millis also parse. "" clears. */
    shippedAt?: string;
    /** Calendar day as yyyy-MM-dd (the portal's form); ISO-8601 / epoch millis also parse. "" clears. */
    deliveredAt?: string;
    /** Only meaningful on a refund row. "" clears. */
    refundReason?: string;
}

export class UpdateTransactionFulfillmentRequest extends RequestBodyBase {
    private transactionId: number;
    private fulfillmentCarrier?: string;
    private fulfillmentTracking?: string;
    private shippedAt?: string;
    private deliveredAt?: string;
    private refundReason?: string;

    constructor() {
        super();
    }

    public loadClientData(params: UpdateTransactionFulfillmentParams): void {
        this.transactionId = params.transactionId;
        this.fulfillmentCarrier = params.fulfillmentCarrier;
        this.fulfillmentTracking = params.fulfillmentTracking;
        this.shippedAt = params.shippedAt;
        this.deliveredAt = params.deliveredAt;
        this.refundReason = params.refundReason;
    }

    public getRequestAsString(): string {
        const data: any = { transactionId: this.transactionId };

        // Emit a key ONLY when the caller supplied one, so an omitted field
        // means "leave it alone" end to end. Note the `!== undefined` test: a
        // truthiness test would silently swallow "" and make clearing
        // impossible, which is the one behaviour this endpoint exists to add.
        if (this.fulfillmentCarrier !== undefined && this.fulfillmentCarrier !== null) {
            data.fulfillmentCarrier = this.fulfillmentCarrier;
        }
        if (this.fulfillmentTracking !== undefined && this.fulfillmentTracking !== null) {
            data.fulfillmentTracking = this.fulfillmentTracking;
        }
        if (this.shippedAt !== undefined && this.shippedAt !== null) {
            data.shippedAt = this.shippedAt;
        }
        if (this.deliveredAt !== undefined && this.deliveredAt !== null) {
            data.deliveredAt = this.deliveredAt;
        }
        if (this.refundReason !== undefined && this.refundReason !== null) {
            data.refundReason = this.refundReason;
        }

        return JSON.stringify(data);
    }
}
