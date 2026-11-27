import { ResponseBodyBase } from "./ResponseBodyBase";

/**
 * createAmendmentWeb's answer. `preview` fills the card-fee figures for the period
 * (card fee = a payment's Transaction Fee minus its platform fee) and the business's
 * earlier amendments; `create` fills the new row. Amounts are numbers in the merchant's
 * currency; a fee correction is negative when it gives the fee back.
 */
export interface CreateAmendmentResult {
    ok: boolean;
    action: string;
    merchantId: number | null;
    periodFrom: string | null;
    periodTo: string | null;
    /** Card payments where the business absorbed the card fee (passthrough off). */
    absorbedCount: number;
    absorbedCardFees: number;
    /** Card payments where the customer paid the card fee (passthrough on). */
    passthroughCount: number;
    passthroughCardFees: number;
    platformFees: number;
    /** Amendments already on the business, all time (including a new one). */
    existingAmendmentCount: number;
    existingAmendmentFeeTotal: number;
    transactionId: number | null;
    uniqueId: string | null;
    feeAdjustment: number | null;
}

export class CreateAmendmentResponse extends ResponseBodyBase {
    private result: CreateAmendmentResult = {
        ok: false, action: '', merchantId: null, periodFrom: null, periodTo: null,
        absorbedCount: 0, absorbedCardFees: 0, passthroughCount: 0, passthroughCardFees: 0,
        platformFees: 0, existingAmendmentCount: 0, existingAmendmentFeeTotal: 0,
        transactionId: null, uniqueId: null, feeAdjustment: null,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): CreateAmendmentResponse {
        const p = JSON.parse(jsonString);
        const num = (v: any) => (v == null ? 0 : Number(v));
        this.result = {
            ok: !!p.ok,
            action: String(p.action ?? ''),
            merchantId: p.merchantId != null ? Number(p.merchantId) : null,
            periodFrom: p.periodFrom ?? null,
            periodTo: p.periodTo ?? null,
            absorbedCount: num(p.absorbedCount),
            absorbedCardFees: num(p.absorbedCardFees),
            passthroughCount: num(p.passthroughCount),
            passthroughCardFees: num(p.passthroughCardFees),
            platformFees: num(p.platformFees),
            existingAmendmentCount: num(p.existingAmendmentCount),
            existingAmendmentFeeTotal: num(p.existingAmendmentFeeTotal),
            transactionId: p.transactionId != null ? Number(p.transactionId) : null,
            uniqueId: p.uniqueId ?? null,
            feeAdjustment: p.feeAdjustment != null ? Number(p.feeAdjustment) : null,
        };
        return this;
    }

    public getClientReturnValue(): CreateAmendmentResult {
        return this.result;
    }
}
