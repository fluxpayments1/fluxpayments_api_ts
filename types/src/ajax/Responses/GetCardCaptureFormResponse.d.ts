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
export declare class GetCardCaptureFormResponse extends ResponseBodyBase {
    private merchantName;
    private customerEmail;
    private customerFirstName;
    private customerLastName;
    private termsText;
    private allowCardEntry;
    private allowACHEntry;
    private allowSavedMethod;
    private redirectUrl;
    constructor();
    setResponseJSON(jsonString: string): GetCardCaptureFormResponse;
    getClientReturnValue(): GetCardCaptureFormResult;
}
