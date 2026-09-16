import { ResponseBodyBase } from "./ResponseBodyBase";
export interface CreateCardCaptureFormResult {
    /** PaymentLink row id. */
    paymentLinkId: number;
    /**
     * THE VALUE THIS CALL EXISTS FOR. Pass it VERBATIM — leading `#` included — to
     * `getCardCaptureForm`, to `FluxHostedFields.forPaymentLink(...)` and to
     * `capturePaymentMethod`. It is the sole credential the browser needs; the
     * merchant's API keys must never reach a browser.
     *
     * Shape is `#<random>:<base64 macId>`. Every server-side lookup matches the
     * stored column EXACTLY, so stripping the `#`, URL-encoding it, or trimming
     * anything produces a 404 "Card capture form not found" rather than an error
     * that names the real problem.
     */
    paymentLink: string;
    /** The Flux-HOSTED form URL. An embedded integration ignores this. */
    paymentLinkUrl: string;
    /** Resolved (or newly created) customer. */
    accountId: number;
    accountEmail: string;
    /** "OPEN" until a card is captured, then "FINALIZED" — a capture form is single-use. */
    currentStatus: string;
    /** The whole created PaymentLink, for anything not surfaced above. */
    paymentLinkObject: any;
}
/**
 * Reads `createdObjects` off the standard creator envelope. `GenericCreatorResponse`
 * cannot be reused: it exposes `FluxIdentifier[]` — ids only — and the link string is
 * the entire point of the call.
 */
export declare class CreateCardCaptureFormResponse extends ResponseBodyBase {
    private created;
    constructor();
    setResponseJSON(jsonString: string): CreateCardCaptureFormResponse;
    getClientReturnValue(): CreateCardCaptureFormResult;
}
