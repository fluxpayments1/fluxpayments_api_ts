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
export declare class CreateAmendmentResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): CreateAmendmentResponse;
    getClientReturnValue(): CreateAmendmentResult;
}
