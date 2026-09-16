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

export class CapturePaymentMethodResponse extends ResponseBodyBase {
    private paymentMethodOnFileId: number;
    private paymentMethodOnFileUniqueId: string;
    private payType: string;
    private lastFour: string;
    private cardBrand: string;
    private becameDefault: boolean;
    private redirectUrl: string;
    private authRejected: boolean;
    private authRejectionReason: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): CapturePaymentMethodResponse {
        const p = JSON.parse(jsonString);
        this._status = p.status;
        this.paymentMethodOnFileId = p.paymentMethodOnFileId;
        this.paymentMethodOnFileUniqueId = p.paymentMethodOnFileUniqueId;
        this.payType = p.payType;
        this.lastFour = p.lastFour;
        this.cardBrand = p.cardBrand;
        this.becameDefault = p.becameDefault === true;
        this.redirectUrl = p.redirectUrl;
        this.authRejected = p.authRejected === true;
        this.authRejectionReason = p.authRejectionReason;
        return this;
    }

    public getClientReturnValue(): CapturePaymentMethodResult {
        return {
            paymentMethodOnFileId: this.paymentMethodOnFileId,
            paymentMethodOnFileUniqueId: this.paymentMethodOnFileUniqueId,
            payType: this.payType,
            lastFour: this.lastFour,
            cardBrand: this.cardBrand,
            becameDefault: this.becameDefault,
            redirectUrl: this.redirectUrl,
            authRejected: this.authRejected,
            authRejectionReason: this.authRejectionReason
        };
    }
}
