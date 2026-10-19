import type { DownloadDocumentType } from "../ajax/Requests/DownloadInvoiceWebRequest";
import { CreateSessionResponse } from "../ajax/Responses";
import { SecurityHandler } from "../ajax/security";
import { FluxIdentifier, Product } from "../flux_types";
import { IFlux } from "../lib/IFlux";
import { IBaseQuery } from "../flux_types/IBaseQuery";
export declare class FluxComms<A extends SecurityHandler> {
    protected _isAuthenticated: boolean;
    protected _securityHandle: A;
    protected static fb: FluxComms<any>;
    constructor();
    static getInstance<T extends SecurityHandler>(): FluxComms<T>;
    get isAuthenticated(): boolean;
    set isAuthenticated(b: boolean);
    get securityHandle(): A;
    set securityHandle(securityHandle: A);
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
    /**
     * Creates a Session with an account id
     *
     *
     * @param accoundId The account id used to create a session
     * @returns a session id
     */
    createSession(id: FluxIdentifier): Promise<string>;
    static exchangeOTPLForSession(otpl: string): Promise<CreateSessionResponse>;
    static getMerchantPublicKeyFromOTPL(otpl: string): Promise<CreateSessionResponse>;
    validatePaymentMethod<T extends IFlux>(ob: T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    validateAndCreatePaymentMethod<T extends IFlux>(ob: T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    createObjectGeneric<T extends IFlux>(ob: T | T[], secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    createObjectGenericSafe<T extends IFlux>(ob: T | T[], secHandle?: SecurityHandler): Promise<T[]>;
    getObjects<T extends IFlux, U extends IBaseQuery<T>>(query: U, secHandle?: SecurityHandler): Promise<T[]>;
    getDashboardTotals(): Promise<any>;
    fulltextSearch<T extends IFlux>(entityType: new (o?: any) => T, params: {
        searchTerm: string;
        objectType: string;
        lookupPage?: string;
        pageNumber?: number;
        itemsPerPage?: number;
        subType?: string;
    }): Promise<T[]>;
    deleteObjects<T extends IFlux>(ids: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    getObjectsById<T extends IFlux>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]>;
    getLinkedObjectsById<T extends IFlux, U extends IFlux>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obType2: new (o?: any) => U): Promise<U[]>;
    updateObjects<T extends IFlux>(ob: T | T[], securityHandle?: SecurityHandler): Promise<T[]>;
    getMetadata(metadataNames: string[]): Promise<string[]>;
    updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]>;
    sendChatStreamingMessage(message: string, onChunk: (chunk: {
        content: string;
        done: boolean;
        conversationId?: number;
        title?: string;
        statusMessage?: string;
        toolName?: string;
        toolDetail?: string;
        toolOutput?: string;
        toolStatus?: string;
        interrupted?: boolean;
        messageId?: number;
        todoList?: string;
        pendingApproval?: boolean;
        previewData?: string;
        clarifyOptions?: string;
        clarifyQuestions?: string;
    }) => void, conversationId?: number, isSupportTicket?: boolean): Promise<void>;
    /**
     * Resend transaction confirmation email with PDF attachments
     * @param transactionId The ID of the transaction to resend email for
     * @param recipientType "MERCHANT" or "CUSTOMER" - who should receive the email
     */
    resendTransactionEmail(transactionId: number, recipientType: "MERCHANT" | "CUSTOMER"): Promise<{
        message: string;
    }>;
    /**
     * Resend payment request email for an unpaid payment link
     * @param paymentLinkId The ID of the payment link
     */
    resendPaymentRequest(paymentLinkId: number): Promise<{
        message: string;
    }>;
    /**
     * Generate a rollup report across a date range.
     * @param startDate Start date in YYYY-MM-DD format
     * @param endDate End date in YYYY-MM-DD format
     */
    generateRollupReport(startDate: string, endDate: string): Promise<{
        message: string;
    }>;
    /**
     * Save an AI chat response as a branded PDF report.
     * Creates a DailyReport record with type AI_GENERATED.
     */
    writeReport(conversationId: number): Promise<{
        message: string;
    }>;
    /**
     * Get the latest AI-generated weekly and monthly insights for the merchant dashboard.
     */
    getLatestInsights(): Promise<import("../ajax/Responses/GetLatestInsightsResponse").InsightsResult>;
    /** Connect or re-connect Forth Pay for this merchant. Verifies the supplied client_id / secret by exchanging them for an access token, then stores them encrypted. */
    connectForth(forthClientId: string, forthClientSecret: string, opts?: {
        label?: string;
        notificationEmail?: string;
        notificationEmails?: string;
        discoveryListId?: number;
        autoChargeEnabled?: boolean;
    }): Promise<{
        credentials: any;
    }>;
    /** Disconnect Forth Pay — clears credentials, stops polling. Mappings and history are preserved. */
    disconnectForth(): Promise<{
        status: number;
        errorMsg?: string;
    }>;
    getPartnerDashboard(range?: string, probe?: boolean): Promise<import("../ajax/Responses/GetPartnerDashboardResponse").PartnerDashboardResult>;
    /**
     * Chargeback-evidence coverage: how much of this merchant's card/ACH volume
     * actually has a sealed evidence packet behind it, plus open-dispute counts.
     *
     * No parameters by design — scope is taken from the session, never the body.
     * The `merchant` block is always the act-as-resolved merchant; `crossMerchant`
     * and `merchants` are filled only for a caller the server's PartnerAccessGate
     * allows (null / empty otherwise, so a plain merchant renders nothing).
     *
     * GOTCHA: the portal runs the PREBUILT dist_web/lib.js, so the browser cannot
     * call this until that bundle is rebuilt — both portal surfaces feature-detect
     * the method and hide their section when it is absent rather than throwing.
     */
    getEvidenceCoverage(): Promise<import("../ajax/Responses/GetEvidenceCoverageResponse").EvidenceCoverageResult>;
    /**
     * PLATFORM ADMINS ONLY (server-gated, `PartnerAccessGate.isAdmin`): turn a business's AI
     * features on or off (`setMerchantAiEnabled` -> `setMerchantAiEnabledWeb`). The target is
     * the act-as-resolved merchant of the request, so the Partner dashboard calls this under
     * the admin's act-as header for the row it is toggling; `merchantId` is a cross-check only.
     * Off = no chat assistant, no nightly AI insights, no report embeddings, no AI reports for
     * that business (root CLAUDE.md section 10.28).
     *
     * GOTCHA: the portal runs the prebuilt dist_web/lib.js, so this does not exist at runtime
     * until that bundle is rebuilt. Feature-detect it.
     */
    setMerchantAiEnabled(merchantId: number, aiEnabled: boolean): Promise<import("../ajax/Responses/SetMerchantAiEnabledResponse").SetMerchantAiEnabledResult>;
    /**
     * Platform admins only (server-gated): the Partners panel on the Partner dashboard
     * (`managePartnerAccess` -> `managePartnerAccessWeb`). Lists every partner and the businesses
     * they reach; adds a person to one or more businesses as a partner; changes or removes that
     * access; re-sends an invite. Every action answers with the full, fresh list.
     *
     * GOTCHA: the portal runs the prebuilt dist_web/lib.js, so this does not exist at runtime
     * until that bundle is rebuilt. Feature-detect it.
     */
    managePartnerAccess(opts: import("../ajax/Requests/ManagePartnerAccessRequest").ManagePartnerAccessOpts): Promise<import("../ajax/Responses/ManagePartnerAccessResponse").PartnerAccessResult>;
    /** Does the signed-in merchant still have to accept the Merchant Services Agreement?
     *  Permission-less server-side; scope is the session's merchant. Endpoint string carries
     *  no "Web" suffix — CMMT appends it in the browser. */
    getTermsStatus(): Promise<import("../ajax/Responses/GetTermsStatusResponse").TermsStatusResult>;
    /** Record the portal's acceptance of the agreement: typed name, drawn signature (PNG data URL),
     *  and the hash of the text that was rendered. The server stores version, hash, signature, IP and
     *  user agent. Rejects a stale hash with a reload-and-review message. */
    acceptTerms(opts: import("../ajax/Requests/AcceptTermsRequest").AcceptTermsOpts): Promise<import("../ajax/Responses/GetTermsStatusResponse").TermsStatusResult>;
    /** ADMIN-only: every merchant that has agreed to the terms (portal + onboarding), newest first. */
    listTermsAcceptances(): Promise<import("../ajax/Responses/ListTermsAcceptancesResponse").TermsAcceptanceListResult>;
    /**
     * Every merchant the signed-in LOGIN belongs to (one MAC = one membership), plus
     * `admin` (env-allowlisted platform admin) and `multiMerchant` (>= 2 memberships,
     * i.e. the portal should offer a merchant switcher). `listMemberships` ->
     * `listMembershipsWeb`; permission-less server-side, no body — scope is the session.
     *
     * GOTCHA: the portal runs the prebuilt dist_web/lib.js, so this does not exist at
     * runtime until that bundle is rebuilt (and ng serve restarted). Feature-detect it.
     */
    listMemberships(): Promise<import("../ajax/Responses/ListMembershipsResponse").ListMembershipsResult>;
    /**
     * Make one of MY memberships the current one for this session (`selectMembership` ->
     * `selectMembershipWeb`). The server re-validates on every call that the MAC is active
     * AND belongs to the session's login — this is a selection among the caller's own
     * memberships, never impersonation (admin act-as is `setActAsMerchant`, a different thing).
     *
     * NEVER THROWS ON A REFUSAL: the server answers HTTP 200 with `{ok:false, reason}` rather
     * than a 401, because the portal signs the user out on any "401" and a wrong switcher
     * click must not do that. Read `ok`. On success the macId is remembered in SessionStorage
     * (`getSelectedMembership()`), beside the credential trio, and wiped by `fluxWebsiteLogout`.
     * The caller still owns clearing its client-side caches when switching.
     */
    selectMembership(macId: number): Promise<import("../ajax/Responses/SelectMembershipResponse").SelectMembershipResult>;
    /**
     * Admin-only merchant application review.
     *
     * action:
     *  - "list"   — the queue. `status` narrows it and is the only way to see a DRAFT.
     *  - "get"    — one application in full (`applicationId`).
     *  - "decide" — record a decision (`applicationId` + `status`; `notes` required to decline).
     *  - "packet" — the whole application as ONE PDF, base64 on `packetBase64`.
     *
     * GOTCHA: the portal runs the prebuilt dist_web/lib.js, so none of this is
     * reachable from a browser until that bundle is rebuilt.
     */
    reviewMerchantApplications(action: string, opts?: import("../ajax/Requests/ReviewMerchantApplicationsRequest").ReviewMerchantApplicationsOpts): Promise<import("../ajax/Responses/ReviewMerchantApplicationsResponse").ReviewMerchantApplicationsResult>;
    /**
     * Admin-only: create a merchant account directly, with no application —
     * the same creation an approved application gets (merchant row + owner
     * login + set-your-password invite email). `createMerchantAccount` ->
     * `createMerchantAccountWeb`. A `confirmRequired` of 'ROUNDING' or
     * 'P12_UNVERIFIED' on the result means nothing was created yet: re-send
     * with the matching accept flag.
     *
     * GOTCHA: the portal runs the prebuilt dist_web/lib.js, so this is not
     * reachable from a browser until that bundle is rebuilt.
     */
    createMerchantAccount(opts: import("../ajax/Requests/CreateMerchantAccountRequest").CreateMerchantAccountOpts): Promise<import("../ajax/Responses/CreateMerchantAccountResponse").CreateMerchantAccountResult>;
    /** Fetch the full Forth Pay dashboard payload: connection state, stats, recent activity, paginated mappings.
     *  page is 1-indexed; pageSize defaults to 25 server-side, capped at 100.
     *  search (optional) filters clients SERVER-side across the whole list rather than just the
     *  current page; blank/absent behaves exactly as before. GOTCHA: the portal runs the prebuilt
     *  dist_web/lib.js, so the browser cannot send search until that bundle is rebuilt. */
    getForthStatus(page?: number, pageSize?: number, search?: string, includeInactive?: boolean): Promise<import("../ajax/Responses/GetForthStatusResponse").ForthStatusResult>;
    /**
     * Full detail for ONE Forth client: the mapping, all its debts/charges, its
     * complete activity history, the card on file, and whether an intake form is
     * already open. Read-only — backs the client detail page.
     *
     * Reuses ForthMappingActionRequest (it already carries mappingId). Endpoint
     * string omits "Web" — CMMT appends it in the browser.
     */
    getForthClientDetail(mappingId: number): Promise<import("../ajax/Responses/ForthClientDetailResponse").ForthClientDetailResult>;
    /** Pause or un-pause auto-charging for a specific Forth client mapping. */
    pauseForthClient(mappingId: number, paused: boolean): Promise<{
        status: number;
        errorMsg?: string;
    }>;
    /**
     * Send a Forth client a fresh card-intake form — the "they want to pay with
     * a different card" case, which no automatic trigger covers.
     *
     * The link is tagged as a retry intake, so completing it switches BOTH the
     * mapping's charge target and the Account default to the new card and
     * retires the old one. Collection is not paused: the existing card keeps
     * being charged on schedule until a new one is actually captured.
     *
     * NOTE the endpoint string omits the "Web" suffix — CMMT appends it in the
     * browser (see CMMT.ts), so passing "sendForthCardIntakeWeb" here would
     * resolve to "sendForthCardIntakeWebWeb" and 404.
     */
    sendForthCardIntake(mappingId: number): Promise<import("../ajax/Responses/SendForthCardIntakeResponse").SendForthCardIntakeResult>;
    /**
     * Get the latest changelog entries (platform release notes).
     */
    /** One-call aggregate for the portal Invoices page: money-bar dollars +
     *  smart-filter chip counts. Endpoint getInvoiceMetrics (browser appends Web). */
    getInvoiceMetrics(): Promise<import("../ajax/Responses/GetInvoiceMetricsResponse").InvoiceMetrics>;
    /** One-call aggregate for the portal Transactions page: money-bar dollars +
     *  chip counts for ONE range ("7d" | "30d" | "90d" | "ytd" | "all", default
     *  "30d"; the server resolves anything else to "30d" and echoes the resolved
     *  range + lower bound). Endpoint getTransactionMetrics (browser appends Web).
     *  The range travels as a CMMT.fetch trailing arg -> loadClientData(range),
     *  the getPartnerDashboard pattern — fetch instantiates the request with no
     *  constructor args. */
    getTransactionMetrics(range?: string): Promise<import("../ajax/Responses/GetTransactionMetricsResponse").TransactionMetrics>;
    private subscriptionCall;
    /** The subscriptions list's volume card for a forward window: '7d' | '30d' (default) | '90d' | '12m'. */
    getSubscriptionMetrics(range?: '7d' | '30d' | '90d' | '12m'): Promise<import("../ajax/Responses/SubscriptionMetricsResponse").SubscriptionMetricsResult>;
    /** Everything the subscription page shows: state, customer, cards, charges, retries, allowed actions. */
    getSubscriptionDetail(subscriptionId: number): Promise<import("../ajax/Responses/SubscriptionDetailResponse").SubscriptionDetailResult>;
    /**
     * One action on a subscription: CANCEL, DEFER (months 1-12, default 1), RESCHEDULE
     * (date yyyy-MM-dd), CHANGE_CARD (paymentMethodOnFileId) or SEND_CARD_FORM (emails the
     * customer a card form; the card they save becomes this subscription's card). Answers
     * with the refreshed detail plus a plain-words `note`.
     */
    manageSubscription(subscriptionId: number, action: 'CANCEL' | 'DEFER' | 'RESCHEDULE' | 'CHANGE_CARD' | 'SEND_CARD_FORM', opts?: {
        months?: number;
        date?: string;
        paymentMethodOnFileId?: number;
    }): Promise<import("../ajax/Responses/SubscriptionDetailResponse").SubscriptionDetailResult>;
    private webhookCall;
    /** Registers an endpoint. The response's `secret` is shown ONCE. */
    createWebhookEndpoint(opts: {
        url: string;
        events: string[];
        description?: string;
    }): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    /** All endpoints, or one when `endpointId` is given. */
    getWebhookEndpoints(endpointId?: number): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    updateWebhookEndpoint(endpointId: number, opts: {
        url?: string;
        events?: string[];
        description?: string;
        enabled?: boolean;
    }): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    deleteWebhookEndpoint(endpointId: number): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    /** New signing secret (shown once). The old one keeps working for `keepPreviousHours` (default 24, 0 = now). */
    rotateWebhookSecret(endpointId: number, keepPreviousHours?: number): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    /** Queues a webhook.test delivery (sent within seconds; 10 per minute). */
    testWebhookEndpoint(endpointId: number): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    getWebhookDeliveries(endpointId: number, opts?: {
        status?: string;
        limit?: number;
        before?: number;
    }): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    resendWebhookDelivery(deliveryId: number): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    /** Re-sends every event since `since` (ISO-8601 or epoch ms, within 30 days). */
    replayWebhookEndpoint(endpointId: number, since: string | number, types?: string[]): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    /** The catch-up feed: events after `after` (an event id), or one event by `eventId`. */
    getWebhookEvents(opts?: {
        after?: string;
        types?: string[];
        limit?: number;
        eventId?: string;
    }): Promise<import("../ajax/Responses/WebhookResponse").WebhookResult>;
    getChangelog(): Promise<import("../ajax/Responses/GetChangelogResponse").ChangelogResult>;
    private webauthnCall;
    /** Enroll step 1: PublicKeyCredentialCreationOptions JSON for navigator.credentials.create(). */
    webauthnRegisterOptions(): Promise<string>;
    /** Enroll step 2: verify the attestation and persist the credential. */
    webauthnRegisterVerify(attestationObject: string, clientDataJSON: string, label?: string): Promise<{
        credentialId?: string;
        label?: string;
    }>;
    /** The current user's registered passkeys (safe metadata for the manage screen). */
    getWebauthnCredentials(): Promise<import("../ajax/Responses/WebAuthnResponse").WebAuthnCredentialInfo[]>;
    /** Remove one of the current user's passkeys. */
    deleteWebauthnCredential(credentialDbId: number): Promise<void>;
    /** Sign-in step 1 (pre-2FA): PublicKeyCredentialRequestOptions JSON for navigator.credentials.get(). */
    webauthnAssertionOptions(): Promise<string>;
    /** Sign-in step 2 (pre-2FA): verify the assertion; returns the 2FA secret used to complete sign-in. */
    webauthnAssertionVerify(credentialId: string, authenticatorData: string, clientDataJSON: string, signature: string, userHandle: string | null): Promise<string>;
    /**
     * Send invoice email for an unpaid payment link
     * @param paymentLinkId The ID of the payment link
     * @param recipientType "MERCHANT" or "CUSTOMER" - who should receive the email
     */
    sendInvoiceEmail(paymentLinkId: number, recipientType: "MERCHANT" | "CUSTOMER"): Promise<{
        message: string;
    }>;
    /**
     * Download invoice or receipt PDF for a completed payment (customer-facing)
     * @param paymentLinkId The UUID of the payment link
     * @param documentType "INVOICE" or "RECEIPT" - type of document to download
     * @returns Object containing downloadUrl (preferred) or pdfBase64 (fallback), filename, and message
     */
    downloadInvoice(paymentLinkId: string, documentType?: "INVOICE" | "RECEIPT"): Promise<{
        downloadUrl?: string;
        pdfBase64?: string;
        filename: string;
        message: string;
        compressed?: boolean;
    }>;
    /**
     * Download a document for a payment link or transaction from the merchant portal.
     *
     * @param documentType One of:
     *   "INVOICE" | "RECEIPT" | "REFUND" — the customer-facing documents.
     *   "EVIDENCE" — the sealed chargeback evidence record PDF (requires transactionId).
     *   "EVIDENCE_JSON" — its machine-readable sidecar, the canonical record.
     *   "ADDENDUM:<id>" — one later event appended to that record (requires transactionId
     *   as well, which scopes the lookup).
     *   Evidence downloads return a 404-class message while a record is still being
     *   prepared: a sealed record is never re-rendered on demand, so there is no
     *   inline-generation fallback for them. They are also REFUSED (403) while a
     *   partner is viewing another merchant's account — the packet carries the
     *   cardholder's IP, device fingerprint, full addresses and consent text, and a
     *   partner holds it only by an explicit per-merchant grant, never by default.
     * @param paymentLinkNumericId Optional: The numeric ID of the payment link
     * @param transactionId Optional: The numeric ID of the transaction
     * @returns Object containing downloadUrl (preferred) or pdfBase64 (fallback), filename, and message
     */
    downloadInvoiceWeb(documentType?: DownloadDocumentType, paymentLinkNumericId?: number, transactionId?: number): Promise<{
        downloadUrl?: string;
        pdfBase64?: string;
        filename: string;
        message: string;
        compressed?: boolean;
    }>;
    /**
     * Mark an invoice/payment link as paid with an external payment method
     * @param params Object containing paymentLinkId, paymentMethod, and optional referenceNumber and notes
     * @returns Object containing the created transaction and a success message
     */
    markInvoiceAsPaidWeb(params: {
        paymentLinkId: number;
        paymentMethod: "WIRE" | "VENMO" | "ZELLE" | "PAYPAL" | "CHECK" | "CASH" | "OTHER";
        referenceNumber?: string;
        notes?: string;
    }): Promise<{
        transaction: any;
        message: string;
    }>;
    /**
     * Save the merchant's own fulfillment assertions (and, on a refund row, the
     * refund reason) against one transaction — carrier, tracking number, ship
     * date, delivery date. These are the ONLY merchant-writable chargeback
     * evidence fields (docs/chargeback-evidence/DESIGN.md 6.2 / 6.8); every
     * other evidence field is server-written.
     *
     * This is a dedicated endpoint rather than a transaction update because
     * there IS no client-reachable transaction update — the rest of the evidence
     * columns must not be client-writable. Omit a field to leave it alone; pass
     * "" to clear it.
     *
     * Endpoint string carries no "Web" suffix: CMMT appends it in the browser.
     */
    updateTransactionFulfillment(params: {
        transactionId: number;
        fulfillmentCarrier?: string;
        fulfillmentTracking?: string;
        shippedAt?: string;
        deliveredAt?: string;
        refundReason?: string;
    }): Promise<{
        transaction: any;
        message: string;
        changedFields: string[];
    }>;
    /**
     * Write the merchant's rebuttal on a dispute, and optionally mark the case
     * responded (docs/chargeback-evidence/DESIGN.md 2.4, 7.3).
     *
     * The rebuttal is MANDATORY network content for Visa 13.3 — an argument
     * answering the cardholder's specific claim, alongside the
     * matching-description evidence. Before this endpoint the platform had no
     * free-text dispute response field at all.
     *
     * Omit `rebuttalText` to leave it alone, send "" to clear it. `markResponded`
     * sets RESPONDED and stamps the time; it can never set an OUTCOME — WON /
     * LOST / EXPIRED come only from the processor's own chargeback report.
     *
     * Endpoint string carries no "Web" suffix: CMMT appends it in the browser.
     */
    respondToDispute(params: {
        disputeId: number;
        rebuttalText?: string;
        markResponded?: boolean;
    }): Promise<{
        dispute: any;
        message: string;
        changedFields: string[];
    }>;
    /**
     * STEP 1 of an evidence upload: ask for a short-lived presigned PUT URL
     * (DESIGN 7.4.1).
     *
     * Two steps because these files are forwarded to an acquirer, which makes them
     * the one part of the evidence packet that leaves the platform as arbitrary
     * merchant-supplied bytes. The platform's usual one-step upload validates the
     * file EXTENSION and never looks at the bytes.
     *
     * `sizeBytes` is your claim and is not trusted — it only lets an oversized
     * file be refused before it is uploaded. The real size and the real type are
     * enforced in {@link confirmEvidenceAttachment}.
     */
    uploadEvidenceAttachment(params: {
        transactionId: number;
        fileName: string;
        label?: string;
        sizeBytes?: number;
        disputeId?: number;
    }): Promise<{
        uploadUrl?: string;
        uploadKey?: string;
        attachment?: any;
        message: string;
    }>;
    /**
     * STEP 2 of an evidence upload: confirm the bytes that landed.
     *
     * The server reads the object, SNIFFS its real type from the magic bytes,
     * enforces the real size, takes the SHA-256, and copies it into the evidence
     * store. A file whose contents disagree with its extension is REJECTED, not
     * corrected.
     */
    confirmEvidenceAttachment(params: {
        transactionId: number;
        fileName: string;
        uploadKey: string;
        label?: string;
        disputeId?: number;
    }): Promise<{
        uploadUrl?: string;
        uploadKey?: string;
        attachment?: any;
        message: string;
    }>;
    private evidenceAttachmentCall;
    /**
     * Detach one evidence file (DESIGN 7.4).
     *
     * A REMOVAL, not a deletion: the file drops out of the response bundle, while
     * the row, the stored object and the custody entry for the original upload all
     * remain. An evidence set files can silently disappear from is not a chain of
     * custody.
     */
    removeEvidenceAttachment(params: {
        attachmentId: number;
        reason?: string;
    }): Promise<{
        attachment: any;
        message: string;
    }>;
    /**
     * Assemble and download the Dispute Response Bundle — the single PDF a human
     * forwards to their acquirer (DESIGN 3.2).
     *
     * Built on demand, so it always reflects the evidence uploaded so far. Returns
     * a short-lived signed `downloadUrl` where the evidence store can be signed,
     * and `pdfBase64` otherwise. `sha256` is the hash of exactly the bytes handed
     * over, and `manifest` names every source that went in — including anything
     * that could not be embedded and has to be supplied separately.
     *
     * It has its OWN permission (DISPUTE:READ) rather than riding
     * downloadInvoiceWeb's INVOICE:READ: the bundle carries the cardholder IP, the
     * submitted billing address and the card fragment, which is not the same
     * sensitivity class as an invoice (DESIGN 7.2.1).
     */
    getDisputeBundle(disputeId: number): Promise<{
        downloadUrl?: string;
        pdfBase64?: string;
        filename: string;
        sha256?: string;
        sizeBytes?: number;
        manifest: string[];
        message: string;
    }>;
    /**
     * Lookup a customer by email in CustomerAccountData (KeyDB).
     * Used during account creation to check if the customer already exists.
     */
    lookupCustomerByEmail(email: string): Promise<{
        found: boolean;
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
    }>;
    /**
     * Generate invoice HTML preview for display in the merchant website
     * @param params Object containing preview data (products, customer info, fees, etc.)
     * @returns Object containing the HTML string
     */
    /**
     * Aggregate stats for one Business: attached customers, invoices billed to
     * it, and finalized transaction count/volume across its payment links.
     */
    getBusinessStats(businessId: number): Promise<{
        customerCount: number;
        invoiceCount: number;
        transactionCount: number;
        transactionVolume: number;
    }>;
    /**
     * Clarify-wizard prune-as-you-go: given the merchant's answers so far,
     * which of the remaining wizard questions are already answered? Fail-open —
     * errors return an empty list and the wizard just keeps asking.
     */
    pruneClarify(params: {
        originalRequest?: string;
        answersText: string;
        questions: {
            index: number;
            text: string;
            options?: string[];
        }[];
    }): Promise<{
        answered: {
            index: number;
            value: string;
        }[];
    }>;
    getInvoicePreviewHtml(params: {
        paymentLinkName?: string;
        customerName?: string;
        customerEmail?: string;
        customerPhone?: string;
        dueDate?: string;
        memo?: string;
        products?: Array<{
            id?: number;
            name?: string;
            description?: string;
            price?: number;
            orderQuantity?: number;
            memo?: string;
            discountId?: number;
        }>;
        taxRate?: number;
        serviceFeeRate?: number;
        shippingFee?: number;
        discountId?: number;
        businessId?: number;
        inlineDiscountType?: string;
        inlineDiscountAmount?: number;
        inlineDiscountName?: string;
        businessName?: string;
    }): Promise<{
        html: string;
    }>;
    /**
     * Approve (execute) or reject (dismiss) an AI chat action proposal.
     * messageId = the proposal Message id delivered on the chat stream.
     * Endpoint string has no "Web" suffix — CMMT appends it in the browser
     * (backend service is approveChatActionsWeb).
     */
    approveChatActions(messageId: number, approved?: boolean): Promise<{
        messageId: number;
        todoList: string;
        createdObjects: string;
        completionMessage: string;
    }>;
    /** Convenience wrapper: dismiss an AI chat action proposal without executing it. */
    rejectChatActions(messageId: number): Promise<{
        messageId: number;
        todoList: string;
        createdObjects: string;
        completionMessage: string;
    }>;
    /**
     * STEP 1 — the merchant's SERVER mints a card capture form.
     *
     * Reuses the existing `createPaymentLink` API-key registration; card-capture
     * validation lives in that service keyed on the `isCardCapture` flag, not on which
     * registration was used. Needs PAYMENT_LINK:CREATE on the key.
     *
     * Endpoint string carries no "Web" suffix — CMMT appends it in the browser, where
     * it correctly resolves to the portal's `createPaymentLinkWeb`.
     *
     * Set `emailNotificationDisabled: true` unless you actually want Flux to email the
     * customer a link to the HOSTED form — which is rarely what an embedded page wants.
     *
     * `customerFirstName` and `customerLastName` are REQUIRED when `accountEmail` is a
     * NEW customer (CreateAccountService rejects a blank name); ignored for an existing
     * customer or an explicit `accountId`. See CreateCardCaptureFormParams.
     */
    createCardCaptureForm(params: import("../ajax/Requests/CreateCardCaptureFormRequest").CreateCardCaptureFormParams): Promise<import("../ajax/Responses/CreateCardCaptureFormResponse").CreateCardCaptureFormResult>;
    /**
     * STEP 2 — BROWSER ONLY. What the embedded form must display, above all the
     * `termsText` to render beside the acceptance checkbox.
     *
     * That text is produced by the same server-side builder that snapshots the
     * authorization onto the saved card in step 4, so displayed and recorded cannot
     * drift. Render it; do not compose your own.
     */
    static getCardCaptureForm(paymentLink: string): Promise<import("../ajax/Responses/GetCardCaptureFormResponse").GetCardCaptureFormResult>;
    /**
     * STEP 4 — BROWSER ONLY. Save the card on file against the recorded consent.
     *
     * `termsAccepted` must be a checkbox the customer actually ticked next to the
     * `termsText` from step 2. The server refuses anything else — a saved card with no
     * recorded consent is the one outcome a card capture form exists to prevent.
     *
     * Check `authRejected` on the result: with `autoReauthEnabled` on the form, a
     * declined $0 verification still SAVES the card and returns 200, and the customer
     * should see a success screen carrying `authRejectionReason`.
     */
    static capturePaymentMethod(params: import("../ajax/Requests/CapturePaymentMethodRequest").CapturePaymentMethodParams): Promise<import("../ajax/Responses/CapturePaymentMethodResponse").CapturePaymentMethodResult>;
}
