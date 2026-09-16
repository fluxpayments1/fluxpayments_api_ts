import { RequestBodyBase } from "./RequestBodyBase";
import { CardCaptureForm } from "../../flux_types/CardCaptureForm";

/**
 * STEP 1 of the embedded card-capture flow: the merchant's SERVER mints a card
 * capture form and gets back the link string their BROWSER needs.
 *
 * <h3>THIS ENDPOINT ALREADY EXISTED — nothing was added on the server for it</h3>
 * Card-capture validation lives inside `CreatePaymentLink` keyed on the
 * `isCardCapture` flag, not on which registration was used, and that service is
 * already registered for API keys as `createPaymentLink` (ApiSecurityHandler,
 * objectType `payment_link`). Verified live on 2026-09-12: an API key with
 * PAYMENT_LINK:CREATE posting the body below returns 200 with `paymentLink`,
 * `paymentLinkUrl` and a resolved `accountId`.
 *
 * <h3>WHY THIS IS A DEDICATED REQUEST AND NOT `createObjectGeneric`</h3>
 * Two reasons, both of which cost a merchant a round trip or an outright 404:
 *  - `FluxType.createObjects` parses with `GenericCreatorResponse`, which returns
 *    `FluxIdentifier[]` — IDs ONLY. The whole point of step 1 is the link STRING,
 *    so the generic path forces a second `getObjects` call to read it back.
 *  - `createObjectGeneric` derives the endpoint as `create${obName}`, and
 *    `CardCaptureForm.obName` is "CardCaptureForm". In the browser that resolves to
 *    `createCardCaptureFormWeb`, which exists (the portal uses it) — but on a
 *    merchant's SERVER it resolves to `createCardCaptureForm`, which does NOT exist.
 *    So `CardCaptureForm.createInstanceSafe(...)` 404s from Node today. That trap is
 *    pre-existing; this request routes around it by naming the endpoint explicitly.
 *
 * <h3>BODY SHAPE — exact, and one key will cost you an afternoon</h3>
 * The body is `{"createdObjects":[{...}]}` and NOTHING ELSE at the top level.
 * `CreatorRequest` declares only body/encData/remoteAddr/createdObjects, and
 * `SpringServiceBase.initializeRequest` uses a bare ObjectMapper — so a top-level
 * `objectType` key throws `UnrecognizedPropertyException`, `req` stays null and the
 * endpoint answers INVALID_REQUEST_BODY (observed, 2026-09-12). The PER-OBJECT
 * `objectType: "payment_link"` IS required — it is the Jackson subtype discriminator
 * on `APIResourceBase` and without it deserialization fails a different way.
 * `CardCaptureForm.serialize()` emits exactly this shape.
 */
export interface CreateCardCaptureFormParams {
    /**
     * The customer this form belongs to. A capture form MUST be attached to a
     * customer (the server refuses otherwise) — send the email and the account is
     * resolved or created for you, or send `accountId` if you already have one.
     */
    accountEmail?: string;
    accountId?: number;

    /**
     * REQUIRED whenever `accountEmail` names a customer that does not exist yet —
     * NOT optional, despite the shape of this type. Creating the customer routes
     * through `CreateAccountService`, which rejects a blank first OR last name
     * ("First name is required" / "Last name is required"), so the minimal
     * `{accountEmail, isCardCapture}` body returns 400 for a new address
     * (verified live, 2026-09-12). They are IGNORED for a customer that already
     * exists (`CustomerAccountData` is the source of truth for name and phone)
     * and for an explicit `accountId`. Typed optional because the existing-customer
     * and `accountId` calls legitimately omit them; send them whenever you are not
     * certain the email is already a customer.
     */
    customerFirstName?: string;
    customerLastName?: string;
    customerPhone?: string;

    /**
     * TRUE for an embedded integration, and you almost certainly want it.
     * Left unset, the server EMAILS the customer a link to the Flux-hosted form —
     * which is wrong when the form is already on the merchant's own page.
     */
    emailNotificationDisabled?: boolean;

    /**
     * Replaces the authorization text shown beside the acceptance checkbox.
     * `{{merchantName}}` is interpolated. Whatever is used here is what
     * `getCardCaptureForm` returns for display AND what is snapshotted onto the
     * saved card at capture — one builder, so the two can never drift.
     */
    termsTextOverride?: string;

    /** Where the Flux-hosted form sends the customer afterwards. Embedded pages ignore it. */
    redirectUrl?: string;

    /**
     * Retry a DECLINED $0 verification in the background instead of refusing the
     * card. When on, a declined card is still SAVED and chargeable (labelled
     * "Auth Rejected — Card Saved") and the capture returns 200 with
     * `authRejected: true`.
     */
    autoReauthEnabled?: boolean;
    reauthIntervalHours?: number;
    reauthMaxAttempts?: number;

    /** Extra addresses CC'd on any customer email this form generates. */
    ccEmails?: string;
}

export class CreateCardCaptureFormRequest extends RequestBodyBase {
    private _createdObjects: any[];

    constructor() {
        super();
    }

    public loadClientData(params: CreateCardCaptureFormParams): void {
        const form = new CardCaptureForm({
            // isCardCapture is set by the CardCaptureForm constructor and is what the
            // server keys every capture-specific rule on.
            accountEmail: params.accountEmail,
            accountId: params.accountId,
            customerFirstName: params.customerFirstName,
            customerLastName: params.customerLastName,
            customerPhone: params.customerPhone,
            emailNotificationDisabled: params.emailNotificationDisabled,
            termsTextOverride: params.termsTextOverride,
            redirectUrl: params.redirectUrl,
            autoReauthEnabled: params.autoReauthEnabled,
            reauthIntervalHours: params.reauthIntervalHours,
            reauthMaxAttempts: params.reauthMaxAttempts,
            ccEmails: params.ccEmails
        } as any);

        // Drop keys the caller never supplied. The server merges non-null only, but an
        // explicit null on a flag the caller did not mention is still noise on the wire
        // and makes a diff of two requests unreadable.
        const serialized: any = form.serialize();
        Object.keys(serialized).forEach(k => {
            if (serialized[k] === undefined || serialized[k] === null) delete serialized[k];
        });
        // objectType is the Jackson subtype discriminator — never strip it.
        serialized.objectType = 'payment_link';
        serialized.isCardCapture = true;

        this._createdObjects = [serialized];
    }

    /** `{"createdObjects":[{...}]}` — see the class header on why nothing else. */
    public getRequestAsString(): string {
        return JSON.stringify({ createdObjects: this._createdObjects });
    }
}
