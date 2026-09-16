import { ResponseBodyBase } from "./ResponseBodyBase";
export interface CapturePaymentMethodResult {
    /** The saved card. Charge it later with `paymentMethodOnFileId` on a payment link. */
    paymentMethodOnFileId: number;
    paymentMethodOnFileUniqueId: string;
    /** "CARD" for every embedded capture. */
    payType: string;
    lastFour: string;
    cardBrand: string;
    /** True when this became the customer's default (they had none). */
    becameDefault: boolean;
    /** Only meaningful for the Flux-hosted form. */
    redirectUrl: string;
    /**
     * TRUE means the card was SAVED but its $0 verification was DECLINED — only
     * possible when the form was created with `autoReauthEnabled`. The card is active
     * and chargeable, shows as "Auth Rejected — Card Saved" in the portal, and is
     * re-verified in the background. Show the customer a success screen WITH this
     * notice: telling them it failed is wrong (the card was saved) and telling them
     * nothing hides a real problem with their card.
     *
     * With auto-reauth OFF a decline is a 400 instead and nothing is saved.
     */
    authRejected: boolean;
    /** The actual decline reason behind `authRejected`, already in plain language. */
    authRejectionReason: string;
}
export declare class CapturePaymentMethodResponse extends ResponseBodyBase {
    private paymentMethodOnFileId;
    private paymentMethodOnFileUniqueId;
    private payType;
    private lastFour;
    private cardBrand;
    private becameDefault;
    private redirectUrl;
    private authRejected;
    private authRejectionReason;
    constructor();
    setResponseJSON(jsonString: string): CapturePaymentMethodResponse;
    getClientReturnValue(): CapturePaymentMethodResult;
}
