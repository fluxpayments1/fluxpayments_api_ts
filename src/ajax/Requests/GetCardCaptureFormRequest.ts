import { RequestBodyBase } from "./RequestBodyBase";

/**
 * STEP 2 of the embedded card-capture flow: load what the form must DISPLAY.
 *
 * The important field in the response is `termsText`. It is built server-side by
 * `CardCaptureTermsBuilder.build(paymentLink, merchant)` — the SAME call, over the
 * same two rows, that produces the snapshot written onto the saved card at capture.
 * So the string the customer reads and the string stored as their authorization are
 * identical by construction, and neither is ever client-supplied. Render this text;
 * do not compose your own.
 *
 * Auth: the link string only. No API keys in the browser.
 * Endpoint string carries no "Web" suffix — CMMT appends it in the browser, and this
 * endpoint exists ONLY as `getCardCaptureFormWeb`.
 */
export class GetCardCaptureFormRequest extends RequestBodyBase {
    private paymentLink: string;

    constructor() {
        super();
    }

    public loadClientData(paymentLink: string): void {
        this.paymentLink = paymentLink;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ paymentLink: this.paymentLink });
    }
}
