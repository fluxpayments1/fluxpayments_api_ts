import { ResponseBodyBase } from "./ResponseBodyBase";

export interface GetCardCaptureFormResult {
    merchantName: string;
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    /**
     * THE AUTHORIZATION TEXT. Render it verbatim beside the acceptance checkbox.
     * Server-built from the payment link + merchant, and the identical string is
     * snapshotted onto the saved card when the capture succeeds — that equality is
     * the whole evidentiary value of a card capture form, and it holds only while
     * this is what the customer was actually shown.
     */
    termsText: string;
    allowCardEntry: boolean;
    /**
     * Reflects the MERCHANT's ACH setting. An embedded card-only integration ignores
     * it — a capture form always permits ACH server-side when the merchant has ACH
     * enabled, and that is deliberate (the Flux-hosted form and the Forth intakes
     * both rely on it). Rendering card fields only is the whole of "card only".
     */
    allowACHEntry: boolean;
    allowSavedMethod: boolean;
    /** Only meaningful for the Flux-hosted form. */
    redirectUrl: string;
}

export class GetCardCaptureFormResponse extends ResponseBodyBase {
    private merchantName: string;
    private customerEmail: string;
    private customerFirstName: string;
    private customerLastName: string;
    private termsText: string;
    private allowCardEntry: boolean;
    private allowACHEntry: boolean;
    private allowSavedMethod: boolean;
    private redirectUrl: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): GetCardCaptureFormResponse {
        const p = JSON.parse(jsonString);
        this._status = p.status;
        this.merchantName = p.merchantName;
        this.customerEmail = p.customerEmail;
        this.customerFirstName = p.customerFirstName;
        this.customerLastName = p.customerLastName;
        this.termsText = p.termsText;
        this.allowCardEntry = p.allowCardEntry === true;
        this.allowACHEntry = p.allowACHEntry === true;
        this.allowSavedMethod = p.allowSavedMethod === true;
        this.redirectUrl = p.redirectUrl;
        return this;
    }

    public getClientReturnValue(): GetCardCaptureFormResult {
        return {
            merchantName: this.merchantName,
            customerEmail: this.customerEmail,
            customerFirstName: this.customerFirstName,
            customerLastName: this.customerLastName,
            termsText: this.termsText,
            allowCardEntry: this.allowCardEntry,
            allowACHEntry: this.allowACHEntry,
            allowSavedMethod: this.allowSavedMethod,
            redirectUrl: this.redirectUrl
        };
    }
}
