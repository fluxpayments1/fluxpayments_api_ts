import { RequestBodyBase } from "./RequestBodyBase";
/**
 * DOCUMENTATION ONLY — THIS CLASS IS NOT THE WIRE PATH.
 *
 * Nothing calls it: there is no `Flux.ts` method and no `Functions` entry. The
 * authoritative charge body is built by hand in
 * `one_time_payment_link/src/app/comms.service.ts` (~line 196). This class
 * exists to document that shape in one typed place; keep the two in lockstep
 * or delete this file. A canonical body nobody sends is the body that drifts —
 * it already had, carrying a `customerSensitiveDataId` key that has never
 * existed on `Spring/Requests/CreatePaymentIntentRequest.java`. The server
 * mapper is strict (see GenerateCardTokenRequest.ts for the full mechanism),
 * so that one unknown key is a 500, not a tolerated extra.
 *
 * The saved-card path does NOT use this endpoint, which is why there is no
 * vaulted-payment-method field here.
 *
 * Body shape for `createPaymentIntent` — the OTPL hosted-fields charge.
 * (Browser callers hit `createPaymentIntentWeb`; CMMT appends the "Web"
 * suffix itself, so an endpoint string must NEVER contain it.)
 *
 * Carries the checkout CONSENT + DEVICE evidence a chargeback rebuttal needs.
 * IP, User-Agent and Accept-Language are deliberately absent: the server reads
 * those off the HTTP request and never trusts a body for them.
 */
export interface CreatePaymentIntentParams {
    /** The OTPL string identifying the PaymentLink being charged. */
    paymentLink?: string;
    /** One-time card token minted by hosted fields. */
    cardToken?: string;
    shippingAddress?: string;
    shippingCity?: string;
    shippingState?: string;
    shippingZip?: string;
    shippingCountry?: string;
    /** Customer ticked the checkout terms box. */
    termsAccepted?: boolean;
    /** The exact terms text that was rendered on screen. */
    termsTextSnapshot?: string;
    /** The exact refund policy text that was rendered on screen. */
    refundPolicySnapshot?: string;
    /** Customer ticked the recurring-authorization box (subscriptions). */
    recurringAuthAccepted?: boolean;
    /** The exact recurring-authorization text that was rendered on screen. */
    recurringAuthText?: string;
    /** Browser device fingerprint collected at checkout. */
    deviceFingerprint?: string;
    /** Per-checkout session id that ties the page view to the charge. */
    checkoutSessionId?: string;
}
export declare class CreatePaymentIntentRequest extends RequestBodyBase {
    private params;
    constructor();
    loadClientData(params: CreatePaymentIntentParams): void;
    getRequestAsString(): string;
}
