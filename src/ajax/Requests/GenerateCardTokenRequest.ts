import { RequestBodyBase } from "./RequestBodyBase";

/**
 * DOCUMENTATION ONLY — THIS CLASS IS NOT THE WIRE PATH.
 *
 * Nothing calls it: there is no `Flux.ts` method and no `Functions` entry. The
 * authoritative tokenize body is built by hand in
 * `hosted_fields/src/coordinator/coordinator.html` (~line 660). This class
 * exists to document that shape in one typed place; keep the two in lockstep
 * or delete this file. A canonical body nobody sends is the body that drifts —
 * it already had, carrying `authToken` and a nested `extraFields` map that have
 * never existed on `Spring/Requests/GenerateCardTokenRequest.java`.
 *
 * Body shape for `generateCardToken` — hosted fields -> tokenizer.
 * (Browser callers hit `generateCardTokenWeb`; CMMT appends the "Web" suffix
 * itself, so an endpoint string must NEVER contain it.)
 *
 * THE SERVER MAPPER IS STRICT. `SpringServiceBase.initializeRequest` uses a
 * bare `new ObjectMapper()`, so FAIL_ON_UNKNOWN_PROPERTIES is TRUE and the
 * resulting exception is swallowed — the request object stays null and the
 * service NPEs into a 500. Two rules follow:
 *   1. Billing fields are FLAT (`billingAddress`, `billingCity`, ...), exactly
 *      as the Java class declares them. There is no `extraFields` map on the
 *      wire; the SERVICE builds that map itself from the flat fields before
 *      writing them to Redis. There is no `billingAddress2` either.
 *   2. The evidence keys below (deviceFingerprint, checkoutSessionId,
 *      billingPlaceId, billingLat, billingLng) require a backend that declares
 *      them, so the BACKEND MUST DEPLOY FIRST. Every one of them is omitted
 *      when empty, so a checkout with no evidence context sends a
 *      byte-identical body to the pre-evidence one.
 */
export interface GenerateCardTokenParams {
    /** The OTPL string, on the browser/payment-link flow. */
    paymentLink?: string;

    /** Encrypted card payload produced by the hosted-fields iframes. */
    encryptedPayload?: string;
    encryptedAESKey?: string;
    nonce?: string;

    // Customer identity, used to find-or-create the Account.
    customerEmail?: string;
    customerFirstName?: string;
    customerLastName?: string;
    customerPhone?: string;

    // Billing address — FLAT, never nested. No `billingAddress2`.
    billingAddress?: string;
    billingCity?: string;
    billingState?: string;
    billingZip?: string;
    billingCountry?: string;

    // ---- Chargeback evidence (backend must deploy first) ----------------
    /** Browser device fingerprint collected at checkout. */
    deviceFingerprint?: string;
    /** Per-checkout session id that ties the page view to the token. */
    checkoutSessionId?: string;
    /**
     * Google Places provenance for the billing address. Only sent when the
     * customer PICKED a suggestion and the street line on the wire is still
     * the one Places returned — it separates "selected a real address" from
     * "typed anything", which outweighs the AVS code in a dispute.
     */
    billingPlaceId?: string;
    /** Latitude of the selected billing address. Travels only paired with lng. */
    billingLat?: number | string;
    /** Longitude of the selected billing address. Travels only paired with lat. */
    billingLng?: number | string;
}

export class GenerateCardTokenRequest extends RequestBodyBase {
    private params: GenerateCardTokenParams;

    constructor() {
        super();
    }

    public loadClientData(params: GenerateCardTokenParams): void {
        this.params = params;
    }

    public getRequestAsString(): string {
        const p = this.params || {};
        // JSON.stringify drops undefined values, which gives the
        // omit-when-empty behaviour the coordinator implements by hand.
        const body: { [key: string]: any } = {
            objectType: "generate_card_token",
            paymentLink: p.paymentLink,
            encryptedPayload: p.encryptedPayload,
            encryptedAESKey: p.encryptedAESKey,
            nonce: p.nonce,
            customerEmail: p.customerEmail,
            customerFirstName: p.customerFirstName,
            customerLastName: p.customerLastName,
            customerPhone: p.customerPhone,
            billingAddress: p.billingAddress,
            billingCity: p.billingCity,
            billingState: p.billingState,
            billingZip: p.billingZip,
            billingCountry: p.billingCountry,
            deviceFingerprint: p.deviceFingerprint,
            checkoutSessionId: p.checkoutSessionId,
            billingPlaceId: p.billingPlaceId
        };
        // lat/lng are meaningless alone — a lone coordinate describes nothing.
        if (p.billingLat != null && p.billingLng != null) {
            body["billingLat"] = p.billingLat;
            body["billingLng"] = p.billingLng;
        }
        return JSON.stringify(body);
    }
}
