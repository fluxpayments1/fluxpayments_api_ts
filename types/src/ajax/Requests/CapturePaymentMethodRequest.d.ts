import { RequestBodyBase } from "./RequestBodyBase";
/**
 * STEP 4 (final) of the embedded card-capture flow: save the card on file.
 *
 * <h3>CALL THIS FROM THE CARDHOLDER'S BROWSER, NOT FROM YOUR SERVER</h3>
 * This is the same endpoint the Flux-hosted payment page has always used, and it is
 * authenticated by the LINK STRING alone — no API keys, which is exactly why the
 * browser can call it. Three reasons the browser is the right caller:
 *
 *  1. THE CONSENT RECORD. `termsAcceptedAt`, the IP and the user agent stored beside
 *     the saved card describe whoever ticked the box. Called from a merchant's server,
 *     the IP is a data centre's — a saved card whose authorization record names a
 *     server is materially weaker evidence in the dispute it exists to answer.
 *  2. THE ONE-TIME TOKEN. `cardToken` is single-use with a 10-minute TTL and is minted
 *     in the browser by hosted fields. Relaying it through a merchant's server adds a
 *     hop that carries a card-adjacent secret for no gain.
 *  3. There is no server-side registration — only `capturePaymentMethodWeb` exists.
 *
 * A merchant who nevertheless proxies this call still gets a truthful consent record:
 * the server falls back to the browser fact captured at TOKENIZE time (the hosted-fields
 * coordinator posts the card directly to Flux from the customer's own browser, so that
 * hop is always the cardholder's), and it drops a client-library user agent rather than
 * recording one as the cardholder's browser.
 *
 * <h3>WHAT THE SERVER DOES WITH THIS</h3>
 * Runs the single authoritative $0 establishment authorization (the tokenize step
 * already skipped its own for a capture form, so there is exactly one hold, and it is
 * $0), writes the PaymentMethodOnFile with its consent snapshot, promotes it to the
 * customer's default when they had none, replaces any earlier unverified card, moves
 * subscriptions pinned to a replaced card, and finalizes the form (single-use).
 *
 * <h3>SCOPE</h3>
 * `cardToken` is the only entry point an embedded integration uses.
 * `customerSensitiveDataId` exists for the Flux-hosted page's ACH and saved-method
 * flows and is deliberately not surfaced here.
 */
export interface CapturePaymentMethodParams {
    /** The link string from step 1, VERBATIM (leading `#` included). */
    paymentLink: string;
    /** The one-time token from `FluxHostedFields.createToken()`. */
    cardToken: string;
    /**
     * MUST be `true`, and must reflect a checkbox the customer actually ticked beside
     * the `termsText` from `getCardCaptureForm`. The server refuses anything else with
     * 400 "Please accept the terms and conditions before saving your payment method."
     * — a saved card with no recorded consent is the one outcome a card capture form
     * exists to prevent.
     */
    termsAccepted: boolean;
    /**
     * Optional. The browser's own `navigator.userAgent`. The server prefers what it
     * OBSERVED (this request's header, else the tokenize hop) and uses this only as a
     * last resort, so omitting it costs nothing when the browser calls directly.
     */
    userAgent?: string;
}
export declare class CapturePaymentMethodRequest extends RequestBodyBase {
    private paymentLink;
    private cardToken;
    private termsAccepted;
    private userAgent?;
    constructor();
    loadClientData(params: CapturePaymentMethodParams): void;
    getRequestAsString(): string;
}
