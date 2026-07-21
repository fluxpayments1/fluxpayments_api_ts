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
    /** Fetch the full Forth Pay dashboard payload: connection state, stats, recent activity, paginated mappings.
     *  page is 1-indexed; pageSize defaults to 25 server-side, capped at 100. */
    getPartnerDashboard(range?: string, probe?: boolean): Promise<import("../ajax/Responses/GetPartnerDashboardResponse").PartnerDashboardResult>;
    getForthStatus(page?: number, pageSize?: number): Promise<import("../ajax/Responses/GetForthStatusResponse").ForthStatusResult>;
    /** Pause or un-pause auto-charging for a specific Forth client mapping. */
    pauseForthClient(mappingId: number, paused: boolean): Promise<{
        status: number;
        errorMsg?: string;
    }>;
    /**
     * Get the latest changelog entries (platform release notes).
     */
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
     * Download invoice or receipt PDF from merchant website
     * @param documentType "INVOICE" or "RECEIPT" - type of document to download
     * @param paymentLinkNumericId Optional: The numeric ID of the payment link
     * @param transactionId Optional: The numeric ID of the transaction
     * @returns Object containing downloadUrl (preferred) or pdfBase64 (fallback), filename, and message
     */
    downloadInvoiceWeb(documentType?: "INVOICE" | "RECEIPT", paymentLinkNumericId?: number, transactionId?: number): Promise<{
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
}
