/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { CreateSessionRequest } from "../ajax/Requests/CreateSessionRequest";
import { GenericCreatorRequest } from "../ajax/Requests/GenericCreatorRequest";
import { GenericGetterRequest } from "../ajax/Requests/GenericGetterRequest";
import { GenericDeleterRequest } from "../ajax/Requests/GenericDeleterRequest";
import { GenericGetByIdRequest } from "../ajax/Requests/GenericGetByIdRequest";
import { GenericUpdaterRequest } from "../ajax/Requests/GenericUpdaterRequest";
import { FullTextSearchRequestBody } from "../ajax/Requests/FullTextSearchRequestBody";
import { DashboardTotalsRequestBody } from "../ajax/Requests/DashboardTotalsRequestBody";
import { DashboardTotalsResponseBody } from "../ajax/Responses/DashboardTotalsResponseBody";
import { ChngProdInvCntRequest } from "../ajax/Requests/ChngProdInvCntRequest";
// Type-only: the request class itself is dynamically imported inside
// downloadInvoiceWeb, so this adds nothing to the bundle.
import type { DownloadDocumentType } from "../ajax/Requests/DownloadInvoiceWebRequest";

import { GenAuthReq } from "../ajax/Requests/GenAuthReq";
import { GenAuthRes, CreateSessionResponse, GenericCreatorResponse, GenericGetterResponse, GenericDeleterResponse, GenericUpdaterResponse, UpdateProductResponse, GetMetadataResponse } from "../ajax/Responses";
import { CMMT } from "../ajax/lib";
import { MerchantEndpointsSecurityHandle, GenAuthDataSecurityHandle, SecurityHandler } from "../ajax/security";
import { FluxIdentifier, Product } from "../flux_types";
import { GetMetadataRequest } from "../ajax/Requests/GetMetadataRequest";
import { IFlux } from "../lib/IFlux";
import { IBaseQuery } from "../flux_types/IBaseQuery";



export class FluxComms<A extends SecurityHandler> {
    protected _isAuthenticated: boolean = false;
    protected _securityHandle: A;
    protected static fb: FluxComms<any>;
    public constructor() {

    }

    public static getInstance<T extends SecurityHandler>(): FluxComms<T> {
        if (FluxComms.fb) {
            return FluxComms.fb;
        }
        FluxComms.fb = new FluxComms<T>();
        return FluxComms.fb
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    set isAuthenticated(b: boolean) {
        this._isAuthenticated = b;
    }

    get securityHandle(): A {
        return this._securityHandle;
    }

    set securityHandle(securityHandle: A) {
        this._securityHandle = securityHandle;
    }

    public async getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string> {
        return CMMT.fetch<string, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "getGeneralAuthorization",
            "POST",
            new GenAuthDataSecurityHandle(),
            customerPublicKey
        );
    }

    /**
     * Creates a Session with an account id
     * 
     * 
     * @param accoundId The account id used to create a session
     * @returns a session id
     */
    public async createSession(id: FluxIdentifier): Promise<string> {
        if (!(this._securityHandle instanceof MerchantEndpointsSecurityHandle))
            throw new Error("sessions must be created server side")
        return CMMT.fetch<string, CreateSessionRequest, CreateSessionResponse>(
            CreateSessionRequest,
            CreateSessionResponse,
            "createSession",
            "POST",
            this._securityHandle,
            id
        );
    }

    public static async exchangeOTPLForSession(otpl: string): Promise<CreateSessionResponse> {
        return CMMT.fetch<CreateSessionResponse, CreateSessionRequest, CreateSessionResponse>(
            CreateSessionRequest,
            CreateSessionResponse,
            "exchangeOTPLForSession",
            "POST",
            new GenAuthDataSecurityHandle(),
            undefined,
            otpl
        );
    }


    public static async getMerchantPublicKeyFromOTPL(otpl: string): Promise<CreateSessionResponse> {
        return CMMT.fetch<CreateSessionResponse, CreateSessionRequest, CreateSessionResponse>(
            CreateSessionRequest,
            CreateSessionResponse,
            "exchangeOTPLForCustomerPublicKey",
            "POST",
            new GenAuthDataSecurityHandle(),
            undefined,
            otpl
        );
    }

    async validatePaymentMethod<T extends IFlux>(
        ob: T,
        secHandle?: SecurityHandler
    ) : Promise<FluxIdentifier[]> {
        return CMMT.fetch<FluxIdentifier[], GenericCreatorRequest, GenericCreatorResponse>(
            GenericCreatorRequest,
            GenericCreatorResponse,
            `validatePaymentMethod`,
            "POST",
            secHandle || this._securityHandle,
            ob
        );
    }

    async validateAndCreatePaymentMethod<T extends IFlux>(
        ob: T,
        secHandle?: SecurityHandler
    ) : Promise<FluxIdentifier[]> {
        return CMMT.fetch<FluxIdentifier[], GenericCreatorRequest, GenericCreatorResponse>(
            GenericCreatorRequest,
            GenericCreatorResponse,
            `validateAndCreatePaymentMethod`,
            "POST",
            secHandle || this._securityHandle,
            ob
        );
    }

    async createObjectGeneric<T extends IFlux>(
        ob: T | T[],
        secHandle? : SecurityHandler
    ): Promise<FluxIdentifier[]> {
        let obName
        if (Array.isArray(ob)) obName = ob[0].obName
        else obName = ob.obName

        // Clone security handle for request isolation
        const handleToUse = secHandle || this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;

        return CMMT.fetch<FluxIdentifier[], GenericCreatorRequest, GenericCreatorResponse>(
            GenericCreatorRequest,
            GenericCreatorResponse,
            `create${obName}`,
            "POST",
            isolatedHandle,
            ob
        );
    }

    async createObjectGenericSafe<T extends IFlux>(
        ob: T | T[],
        secHandle?: SecurityHandler
    ): Promise<T[]> {
        let obName
        let obType
        if (Array.isArray(ob)) {
            obName = ob[0].obName
            obType = ob[0].obType
        }
        else {
            obName = ob.obName
            obType = ob.obType
        }

        // Clone security handle for request isolation
        const handleToUse = secHandle || this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;

        return CMMT.fetchGeneric<GenericCreatorRequest, GenericGetterResponse<T>, T>(
            GenericCreatorRequest,
            GenericGetterResponse<T>,
            obType,
            `create${obName}InstanceSafe`,
            "POST",
            isolatedHandle,
            ob
        );
    }


    public async getObjects<T extends IFlux, U extends IBaseQuery<T>>(
        query: U,
        secHandle?: SecurityHandler
    ): Promise<T[]> {
        let obType = query.attachedObject
        let name = new obType().obName

        if ((query as any).accountSession) {
            name += "SensitiveData"
        }

        // Clone security handle for request isolation (parallel requests support)
        const handleToUse = secHandle || this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;

        return CMMT.fetchGeneric<GenericGetterRequest<T, U>, GenericGetterResponse<T>, T>(
            GenericGetterRequest<T, U>,
            GenericGetterResponse<T>,
            obType,
            `get${name}`,
            "POST",
            isolatedHandle,
            query
        );
    }

    public async getDashboardTotals(): Promise<any> {
        const handleToUse = this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;

        return CMMT.fetch<any, DashboardTotalsRequestBody, DashboardTotalsResponseBody>(
            DashboardTotalsRequestBody,
            DashboardTotalsResponseBody,
            "getDashboardTotals",
            "POST",
            isolatedHandle
        );
    }

    public async fulltextSearch<T extends IFlux>(
        entityType: new (o?: any) => T,
        params: {
            searchTerm: string;
            objectType: string;
            lookupPage?: string;
            pageNumber?: number;
            itemsPerPage?: number;
            subType?: string;
        }
    ): Promise<T[]> {
        const handleToUse = this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;

        return CMMT.fetchGeneric<FullTextSearchRequestBody, GenericGetterResponse<T>, T>(
            FullTextSearchRequestBody,
            GenericGetterResponse<T>,
            entityType,
            "fulltextSearch",
            "POST",
            isolatedHandle,
            params
        );
    }

    public async deleteObjects<T extends IFlux>(
        ids: FluxIdentifier | FluxIdentifier[],
        obType: new (o?: any) => T,
        secHandle?: SecurityHandler
    ): Promise<FluxIdentifier[]> {
        let obName = new obType().obName
        
        // Clone security handle for request isolation
        const handleToUse = secHandle || this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;
        
        return CMMT.fetch<FluxIdentifier[], GenericDeleterRequest, GenericDeleterResponse>(
            GenericDeleterRequest,
            GenericDeleterResponse,
            `delete${obName}`,
            "POST",
            isolatedHandle,
            ids
        );
    }

    public async getObjectsById<T extends IFlux>(
        fi: FluxIdentifier | FluxIdentifier[],
        obType: new (o?: any) => T
    ): Promise<T[]> {
        let obName = new obType().obName
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetchGeneric<GenericGetByIdRequest, GenericGetterResponse<T>, T>(
            GenericGetByIdRequest,
            GenericGetterResponse<T>,
            obType,
            `get${obName}ById`,
            "POST",
            isolatedHandle,
            fi
        )
    }

    public async getLinkedObjectsById<T extends IFlux, U extends IFlux>(
        fi: FluxIdentifier | FluxIdentifier[],
        obType: new (o?: any) => T,
        obType2: new (o?: any) => U
    ): Promise<U[]> {
        let obName = new obType().obName
        let obName2 = new obType2().obName
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetchGeneric<GenericGetByIdRequest, GenericGetterResponse<U>, U>(
            GenericGetByIdRequest,
            GenericGetterResponse<U>,
            obType2,
            `get${obName.concat(obName2)}ById`,
            "POST",
            isolatedHandle,
            fi
        )
    }


    public async updateObjects<T extends IFlux>(
        ob: T | T[],
        securityHandle?: SecurityHandler
    ): Promise<T[]> {
        let obType
        let obName
        if (Array.isArray(ob)) {
            obName = ob[0].obName
            obType = ob[0].obType
        }
        else {
            obName = ob.obName
            obType = ob.obType
        }
        
        // Clone security handle for request isolation
        const handleToUse = securityHandle || this._securityHandle;
        const isolatedHandle = (handleToUse as any).clone ? (handleToUse as any).clone() : handleToUse;
        
        return CMMT.fetchGeneric<GenericUpdaterRequest<T>, GenericUpdaterResponse<T>, T>(
            GenericUpdaterRequest<T>,
            GenericUpdaterResponse<T>,
            obType,
            `update${obName}`,
            "POST",
            isolatedHandle,
            ob
        );
    }

    public async getMetadata(metadataNames: string[]) {
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<string[], GetMetadataRequest, GetMetadataResponse>(
            GetMetadataRequest,
            GetMetadataResponse,
            "getMetadata",
            "POST",
            isolatedHandle,
            metadataNames
        )
    }

    public async updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]> {
        if (!(this._securityHandle instanceof MerchantEndpointsSecurityHandle))
            throw new Error("inventory must be changed server side")
        return CMMT.fetch<Product[], ChngProdInvCntRequest, UpdateProductResponse>(
            ChngProdInvCntRequest,
            UpdateProductResponse,
            "updateProductQuantity",
            "POST",
            this._securityHandle,
            multiplier,
            quantity,
            fi
        )
    }

    public async sendChatStreamingMessage(
        message: string,
        onChunk: (chunk: { content: string; done: boolean; conversationId?: number; title?: string; statusMessage?: string; toolName?: string; toolDetail?: string; toolOutput?: string; toolStatus?: string; interrupted?: boolean; messageId?: number; todoList?: string; pendingApproval?: boolean; previewData?: string; clarifyOptions?: string; clarifyQuestions?: string }) => void,
        conversationId?: number,
        isSupportTicket?: boolean
    ): Promise<void> {
        const { ChatRequest } = await import('../ajax/Requests/ChatRequest');
        const { ChatResponse } = await import('../ajax/Responses/ChatResponse');
        
        return CMMT.fetchStreaming(
            ChatRequest,
            ChatResponse,
            "chat",
            "POST",
            this._securityHandle,
            onChunk,
            message,
            conversationId,
            isSupportTicket
        );
    }

    /**
     * Resend transaction confirmation email with PDF attachments
     * @param transactionId The ID of the transaction to resend email for
     * @param recipientType "MERCHANT" or "CUSTOMER" - who should receive the email
     */
    public async resendTransactionEmail(transactionId: number, recipientType: "MERCHANT" | "CUSTOMER"): Promise<{ message: string }> {
        const { ResendTransactionEmailRequest } = await import('../ajax/Requests/ResendTransactionEmailRequest');
        const { ResendTransactionEmailResponse } = await import('../ajax/Responses/ResendTransactionEmailResponse');
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ message: string }, typeof ResendTransactionEmailRequest.prototype, typeof ResendTransactionEmailResponse.prototype>(
            ResendTransactionEmailRequest,
            ResendTransactionEmailResponse,
            "resendTransactionEmail",
            "POST",
            isolatedHandle,
            transactionId,
            recipientType
        );
    }

    /**
     * Resend payment request email for an unpaid payment link
     * @param paymentLinkId The ID of the payment link
     */
    public async resendPaymentRequest(paymentLinkId: number): Promise<{ message: string }> {
        const { ResendPaymentRequestRequest } = await import("../ajax/Requests/ResendPaymentRequestRequest");
        const { ResendPaymentRequestResponse } = await import("../ajax/Responses/ResendPaymentRequestResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ message: string }, typeof ResendPaymentRequestRequest.prototype, typeof ResendPaymentRequestResponse.prototype>(
            ResendPaymentRequestRequest,
            ResendPaymentRequestResponse,
            "resendPaymentRequest",
            "POST",
            isolatedHandle,
            paymentLinkId
        );
    }

    /**
     * Generate a rollup report across a date range.
     * @param startDate Start date in YYYY-MM-DD format
     * @param endDate End date in YYYY-MM-DD format
     */
    public async generateRollupReport(startDate: string, endDate: string): Promise<{ message: string }> {
        const { RollupReportRequest } = await import("../ajax/Requests/RollupReportRequest");
        const { RollupReportResponse } = await import("../ajax/Responses/RollupReportResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ message: string }, typeof RollupReportRequest.prototype, typeof RollupReportResponse.prototype>(
            RollupReportRequest,
            RollupReportResponse,
            "generateRollupReportWeb",
            "POST",
            isolatedHandle,
            startDate,
            endDate
        );
    }

    /**
     * Save an AI chat response as a branded PDF report.
     * Creates a DailyReport record with type AI_GENERATED.
     */
    public async writeReport(conversationId: number): Promise<{ message: string }> {
        const { WriteReportRequest } = await import("../ajax/Requests/WriteReportRequest");
        const { WriteReportResponse } = await import("../ajax/Responses/WriteReportResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ message: string }, typeof WriteReportRequest.prototype, typeof WriteReportResponse.prototype>(
            WriteReportRequest,
            WriteReportResponse,
            "writeReport",
            "POST",
            isolatedHandle,
            conversationId
        );
    }

    /**
     * Get the latest AI-generated weekly and monthly insights for the merchant dashboard.
     */
    public async getLatestInsights(): Promise<import("../ajax/Responses/GetLatestInsightsResponse").InsightsResult> {
        const { GetLatestInsightsRequest } = await import("../ajax/Requests/GetLatestInsightsRequest");
        const { GetLatestInsightsResponse } = await import("../ajax/Responses/GetLatestInsightsResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<import("../ajax/Responses/GetLatestInsightsResponse").InsightsResult, typeof GetLatestInsightsRequest.prototype, typeof GetLatestInsightsResponse.prototype>(
            GetLatestInsightsRequest,
            GetLatestInsightsResponse,
            "getLatestInsights",
            "POST",
            isolatedHandle
        );
    }

    // ────────────────────────────────────────────────────────────────
    // Forth Pay integration
    // ────────────────────────────────────────────────────────────────

    /** Connect or re-connect Forth Pay for this merchant. Verifies the supplied client_id / secret by exchanging them for an access token, then stores them encrypted. */
    public async connectForth(forthClientId: string, forthClientSecret: string, opts?: {
        label?: string;
        notificationEmail?: string;
        notificationEmails?: string;
        discoveryListId?: number;
        autoChargeEnabled?: boolean;
    }) {
        const { ConnectForthRequest } = await import("../ajax/Requests/ConnectForthRequest");
        const { ConnectForthResponse } = await import("../ajax/Responses/ConnectForthResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<{ credentials: any }, typeof ConnectForthRequest.prototype, typeof ConnectForthResponse.prototype>(
            ConnectForthRequest, ConnectForthResponse, "connectForth", "POST", isolatedHandle,
            forthClientId, forthClientSecret, opts
        );
    }

    /** Disconnect Forth Pay — clears credentials, stops polling. Mappings and history are preserved. */
    public async disconnectForth() {
        const { ForthMappingActionRequest } = await import("../ajax/Requests/ForthMappingActionRequest");
        const { ForthGenericResponse } = await import("../ajax/Responses/ForthGenericResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<{ status: number; errorMsg?: string }, typeof ForthMappingActionRequest.prototype, typeof ForthGenericResponse.prototype>(
            ForthMappingActionRequest, ForthGenericResponse, "disconnectForth", "POST", isolatedHandle
        );
    }

    public async getPartnerDashboard(range?: string, probe?: boolean): Promise<import("../ajax/Responses/GetPartnerDashboardResponse").PartnerDashboardResult> {
        const { GetPartnerDashboardRequest } = await import("../ajax/Requests/GetPartnerDashboardRequest");
        const { GetPartnerDashboardResponse } = await import("../ajax/Responses/GetPartnerDashboardResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/GetPartnerDashboardResponse").PartnerDashboardResult, typeof GetPartnerDashboardRequest.prototype, typeof GetPartnerDashboardResponse.prototype>(
            GetPartnerDashboardRequest, GetPartnerDashboardResponse, "getPartnerDashboard", "POST", isolatedHandle,
            range, probe
        );
    }

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
    public async getEvidenceCoverage(): Promise<import("../ajax/Responses/GetEvidenceCoverageResponse").EvidenceCoverageResult> {
        const { GetEvidenceCoverageRequest } = await import("../ajax/Requests/GetEvidenceCoverageRequest");
        const { GetEvidenceCoverageResponse } = await import("../ajax/Responses/GetEvidenceCoverageResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/GetEvidenceCoverageResponse").EvidenceCoverageResult, typeof GetEvidenceCoverageRequest.prototype, typeof GetEvidenceCoverageResponse.prototype>(
            GetEvidenceCoverageRequest, GetEvidenceCoverageResponse, "getEvidenceCoverage", "POST", isolatedHandle
        );
    }

    /** ADMIN-only partner account management. action: "list" | "create" | "update" | "remove";
     *  opts carries partnerId / partnerEmail / partnerName / merchantIds (complete replacement list).
     *  Every action returns the fresh full partner list. */
    public async managePartners(action: string, opts?: import("../ajax/Requests/ManagePartnersRequest").ManagePartnersOpts): Promise<import("../ajax/Responses/ManagePartnersResponse").ManagePartnersResult> {
        const { ManagePartnersRequest } = await import("../ajax/Requests/ManagePartnersRequest");
        const { ManagePartnersResponse } = await import("../ajax/Responses/ManagePartnersResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/ManagePartnersResponse").ManagePartnersResult, typeof ManagePartnersRequest.prototype, typeof ManagePartnersResponse.prototype>(
            ManagePartnersRequest, ManagePartnersResponse, "managePartners", "POST", isolatedHandle,
            action, opts
        );
    }

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
    public async reviewMerchantApplications(action: string, opts?: import("../ajax/Requests/ReviewMerchantApplicationsRequest").ReviewMerchantApplicationsOpts): Promise<import("../ajax/Responses/ReviewMerchantApplicationsResponse").ReviewMerchantApplicationsResult> {
        const { ReviewMerchantApplicationsRequest } = await import("../ajax/Requests/ReviewMerchantApplicationsRequest");
        const { ReviewMerchantApplicationsResponse } = await import("../ajax/Responses/ReviewMerchantApplicationsResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/ReviewMerchantApplicationsResponse").ReviewMerchantApplicationsResult, typeof ReviewMerchantApplicationsRequest.prototype, typeof ReviewMerchantApplicationsResponse.prototype>(
            ReviewMerchantApplicationsRequest, ReviewMerchantApplicationsResponse, "reviewMerchantApplications", "POST", isolatedHandle,
            action, opts
        );
    }

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
    public async createMerchantAccount(opts: import("../ajax/Requests/CreateMerchantAccountRequest").CreateMerchantAccountOpts): Promise<import("../ajax/Responses/CreateMerchantAccountResponse").CreateMerchantAccountResult> {
        const { CreateMerchantAccountRequest } = await import("../ajax/Requests/CreateMerchantAccountRequest");
        const { CreateMerchantAccountResponse } = await import("../ajax/Responses/CreateMerchantAccountResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/CreateMerchantAccountResponse").CreateMerchantAccountResult, typeof CreateMerchantAccountRequest.prototype, typeof CreateMerchantAccountResponse.prototype>(
            CreateMerchantAccountRequest, CreateMerchantAccountResponse, "createMerchantAccount", "POST", isolatedHandle,
            opts
        );
    }

    /** Fetch the full Forth Pay dashboard payload: connection state, stats, recent activity, paginated mappings.
     *  page is 1-indexed; pageSize defaults to 25 server-side, capped at 100.
     *  search (optional) filters clients SERVER-side across the whole list rather than just the
     *  current page; blank/absent behaves exactly as before. GOTCHA: the portal runs the prebuilt
     *  dist_web/lib.js, so the browser cannot send search until that bundle is rebuilt. */
    public async getForthStatus(page?: number, pageSize?: number, search?: string): Promise<import("../ajax/Responses/GetForthStatusResponse").ForthStatusResult> {
        const { GetForthStatusRequest } = await import("../ajax/Requests/GetForthStatusRequest");
        const { GetForthStatusResponse } = await import("../ajax/Responses/GetForthStatusResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/GetForthStatusResponse").ForthStatusResult, typeof GetForthStatusRequest.prototype, typeof GetForthStatusResponse.prototype>(
            GetForthStatusRequest, GetForthStatusResponse, "getForthStatus", "POST", isolatedHandle,
            page, pageSize, search
        );
    }


    /** Pause or un-pause auto-charging for a specific Forth client mapping. */
    public async pauseForthClient(mappingId: number, paused: boolean) {
        const { ForthMappingActionRequest } = await import("../ajax/Requests/ForthMappingActionRequest");
        const { ForthGenericResponse } = await import("../ajax/Responses/ForthGenericResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<{ status: number; errorMsg?: string }, typeof ForthMappingActionRequest.prototype, typeof ForthGenericResponse.prototype>(
            ForthMappingActionRequest, ForthGenericResponse, "pauseForthClient", "POST", isolatedHandle,
            mappingId, paused
        );
    }

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
    public async sendForthCardIntake(mappingId: number) {
        const { ForthMappingActionRequest } = await import("../ajax/Requests/ForthMappingActionRequest");
        const { SendForthCardIntakeResponse } = await import("../ajax/Responses/SendForthCardIntakeResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/SendForthCardIntakeResponse").SendForthCardIntakeResult, typeof ForthMappingActionRequest.prototype, typeof SendForthCardIntakeResponse.prototype>(
            ForthMappingActionRequest, SendForthCardIntakeResponse, "sendForthCardIntake", "POST", isolatedHandle,
            mappingId
        );
    }

    /**
     * Get the latest changelog entries (platform release notes).
     */
    /** One-call aggregate for the portal Invoices page: money-bar dollars +
     *  smart-filter chip counts. Endpoint getInvoiceMetrics (browser appends Web). */
    public async getInvoiceMetrics(): Promise<import("../ajax/Responses/GetInvoiceMetricsResponse").InvoiceMetrics> {
        const { GetInvoiceMetricsRequest } = await import("../ajax/Requests/GetInvoiceMetricsRequest");
        const { GetInvoiceMetricsResponse } = await import("../ajax/Responses/GetInvoiceMetricsResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<import("../ajax/Responses/GetInvoiceMetricsResponse").InvoiceMetrics, typeof GetInvoiceMetricsRequest.prototype, typeof GetInvoiceMetricsResponse.prototype>(
            GetInvoiceMetricsRequest,
            GetInvoiceMetricsResponse,
            "getInvoiceMetrics",
            "POST",
            isolatedHandle
        );
    }

    public async getChangelog(): Promise<import("../ajax/Responses/GetChangelogResponse").ChangelogResult> {
        const { GetChangelogRequest } = await import("../ajax/Requests/GetChangelogRequest");
        const { GetChangelogResponse } = await import("../ajax/Responses/GetChangelogResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<import("../ajax/Responses/GetChangelogResponse").ChangelogResult, typeof GetChangelogRequest.prototype, typeof GetChangelogResponse.prototype>(
            GetChangelogRequest,
            GetChangelogResponse,
            "getChangelog",
            "POST",
            isolatedHandle
        );
    }

    // ---- Passkeys (WebAuthn) -------------------------------------------------

    private async webauthnCall(endpoint: string, data?: any): Promise<import("../ajax/Responses/WebAuthnResponse").WebAuthnResult> {
        const { WebAuthnRequest } = await import("../ajax/Requests/WebAuthnRequest");
        const { WebAuthnResponse } = await import("../ajax/Responses/WebAuthnResponse");
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        return CMMT.fetch<import("../ajax/Responses/WebAuthnResponse").WebAuthnResult, typeof WebAuthnRequest.prototype, typeof WebAuthnResponse.prototype>(
            WebAuthnRequest,
            WebAuthnResponse,
            endpoint,
            "POST",
            isolatedHandle,
            data || {}
        );
    }

    /** Enroll step 1: PublicKeyCredentialCreationOptions JSON for navigator.credentials.create(). */
    public async webauthnRegisterOptions(): Promise<string> {
        const r = await this.webauthnCall("webauthnRegisterOptions");
        if (!r || !r.optionsJson) throw new Error(r?.errorMsg || "Could not start passkey registration");
        return r.optionsJson;
    }

    /** Enroll step 2: verify the attestation and persist the credential. */
    public async webauthnRegisterVerify(attestationObject: string, clientDataJSON: string, label?: string): Promise<{ credentialId?: string; label?: string }> {
        const r = await this.webauthnCall("webauthnRegisterVerify", { attestationObject, clientDataJSON, label });
        if (!r || (r.status && r.status !== 200) || r.errorMsg) throw new Error(r?.errorMsg || "Could not save the passkey");
        return { credentialId: r.createdCredentialId, label: r.createdLabel };
    }

    /** The current user's registered passkeys (safe metadata for the manage screen). */
    public async getWebauthnCredentials(): Promise<import("../ajax/Responses/WebAuthnResponse").WebAuthnCredentialInfo[]> {
        const r = await this.webauthnCall("getWebauthnCredentials");
        return r?.credentials || [];
    }

    /** Remove one of the current user's passkeys. */
    public async deleteWebauthnCredential(credentialDbId: number): Promise<void> {
        const r = await this.webauthnCall("deleteWebauthnCredential", { credentialDbId });
        if (r && ((r.status && r.status !== 200) || r.errorMsg)) throw new Error(r.errorMsg || "Could not remove the passkey");
    }

    /** Sign-in step 1 (pre-2FA): PublicKeyCredentialRequestOptions JSON for navigator.credentials.get(). */
    public async webauthnAssertionOptions(): Promise<string> {
        const r = await this.webauthnCall("webauthnAssertionOptions");
        if (!r || !r.optionsJson) throw new Error(r?.errorMsg || "No passkeys are registered for this account");
        return r.optionsJson;
    }

    /** Sign-in step 2 (pre-2FA): verify the assertion; returns the 2FA secret used to complete sign-in. */
    public async webauthnAssertionVerify(credentialId: string, authenticatorData: string, clientDataJSON: string, signature: string, userHandle: string | null): Promise<string> {
        const r = await this.webauthnCall("webauthnAssertionVerify", { credentialId, authenticatorData, clientDataJSON, signature, userHandle });
        if (!r || !r.twoFactorSecret) throw new Error(r?.errorMsg || "Passkey verification failed");
        return r.twoFactorSecret;
    }

    /**
     * Send invoice email for an unpaid payment link
     * @param paymentLinkId The ID of the payment link
     * @param recipientType "MERCHANT" or "CUSTOMER" - who should receive the email
     */
    public async sendInvoiceEmail(paymentLinkId: number, recipientType: "MERCHANT" | "CUSTOMER"): Promise<{ message: string }> {
        const { SendInvoiceEmailRequest } = await import("../ajax/Requests/SendInvoiceEmailRequest");
        const { SendInvoiceEmailResponse } = await import("../ajax/Responses/SendInvoiceEmailResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ message: string }, typeof SendInvoiceEmailRequest.prototype, typeof SendInvoiceEmailResponse.prototype>(
            SendInvoiceEmailRequest,
            SendInvoiceEmailResponse,
            "sendInvoiceEmail",
            "POST",
            isolatedHandle,
            paymentLinkId,
            recipientType
        );
    }

    /**
     * Download invoice or receipt PDF for a completed payment (customer-facing)
     * @param paymentLinkId The UUID of the payment link
     * @param documentType "INVOICE" or "RECEIPT" - type of document to download
     * @returns Object containing downloadUrl (preferred) or pdfBase64 (fallback), filename, and message
     */
    public async downloadInvoice(paymentLinkId: string, documentType: "INVOICE" | "RECEIPT" = "INVOICE"): Promise<{ downloadUrl?: string; pdfBase64?: string; filename: string; message: string; compressed?: boolean }> {
        const { DownloadInvoiceRequest } = await import("../ajax/Requests/DownloadInvoiceRequest");
        const { DownloadInvoiceResponse } = await import("../ajax/Responses/DownloadInvoiceResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ downloadUrl?: string; pdfBase64?: string; filename: string; message: string; compressed?: boolean }, typeof DownloadInvoiceRequest.prototype, typeof DownloadInvoiceResponse.prototype>(
            DownloadInvoiceRequest,
            DownloadInvoiceResponse,
            "downloadInvoiceSensitiveData",
            "POST",
            isolatedHandle,
            paymentLinkId,
            documentType
        );
    }

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
    public async downloadInvoiceWeb(documentType: DownloadDocumentType = "INVOICE", paymentLinkNumericId?: number, transactionId?: number): Promise<{ downloadUrl?: string; pdfBase64?: string; filename: string; message: string; compressed?: boolean }> {
        const { DownloadInvoiceWebRequest } = await import("../ajax/Requests/DownloadInvoiceWebRequest");
        const { DownloadInvoiceResponse } = await import("../ajax/Responses/DownloadInvoiceResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ downloadUrl?: string; pdfBase64?: string; filename: string; message: string; compressed?: boolean }, typeof DownloadInvoiceWebRequest.prototype, typeof DownloadInvoiceResponse.prototype>(
            DownloadInvoiceWebRequest,
            DownloadInvoiceResponse,
            "downloadInvoice",
            "POST",
            isolatedHandle,
            documentType,
            paymentLinkNumericId,
            transactionId
        );
    }

    /**
     * Mark an invoice/payment link as paid with an external payment method
     * @param params Object containing paymentLinkId, paymentMethod, and optional referenceNumber and notes
     * @returns Object containing the created transaction and a success message
     */
    public async markInvoiceAsPaidWeb(params: {
        paymentLinkId: number;
        paymentMethod: "WIRE" | "VENMO" | "ZELLE" | "PAYPAL" | "CHECK" | "CASH" | "OTHER";
        referenceNumber?: string;
        notes?: string;
    }): Promise<{ transaction: any; message: string }> {
        const { MarkInvoiceAsPaidRequest } = await import("../ajax/Requests/MarkInvoiceAsPaidRequest");
        const { MarkInvoiceAsPaidResponse } = await import("../ajax/Responses/MarkInvoiceAsPaidResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ transaction: any; message: string }, typeof MarkInvoiceAsPaidRequest.prototype, typeof MarkInvoiceAsPaidResponse.prototype>(
            MarkInvoiceAsPaidRequest,
            MarkInvoiceAsPaidResponse,
            "markInvoiceAsPaid",
            "POST",
            isolatedHandle,
            params
        );
    }

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
    public async updateTransactionFulfillment(params: {
        transactionId: number;
        fulfillmentCarrier?: string;
        fulfillmentTracking?: string;
        shippedAt?: string;
        deliveredAt?: string;
        refundReason?: string;
    }): Promise<{ transaction: any; message: string; changedFields: string[] }> {
        const { UpdateTransactionFulfillmentRequest } = await import("../ajax/Requests/UpdateTransactionFulfillmentRequest");
        const { UpdateTransactionFulfillmentResponse } = await import("../ajax/Responses/UpdateTransactionFulfillmentResponse");

        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ transaction: any; message: string; changedFields: string[] }, typeof UpdateTransactionFulfillmentRequest.prototype, typeof UpdateTransactionFulfillmentResponse.prototype>(
            UpdateTransactionFulfillmentRequest,
            UpdateTransactionFulfillmentResponse,
            "updateTransactionFulfillment",
            "POST",
            isolatedHandle,
            params
        );
    }

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
    public async respondToDispute(params: {
        disputeId: number;
        rebuttalText?: string;
        markResponded?: boolean;
    }): Promise<{ dispute: any; message: string; changedFields: string[] }> {
        const { RespondToDisputeRequest } = await import("../ajax/Requests/RespondToDisputeRequest");
        const { RespondToDisputeResponse } = await import("../ajax/Responses/RespondToDisputeResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ dispute: any; message: string; changedFields: string[] }, typeof RespondToDisputeRequest.prototype, typeof RespondToDisputeResponse.prototype>(
            RespondToDisputeRequest,
            RespondToDisputeResponse,
            "respondToDispute",
            "POST",
            isolatedHandle,
            params
        );
    }

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
    public async uploadEvidenceAttachment(params: {
        transactionId: number;
        fileName: string;
        label?: string;
        sizeBytes?: number;
        disputeId?: number;
    }): Promise<{ uploadUrl?: string; uploadKey?: string; attachment?: any; message: string }> {
        return this.evidenceAttachmentCall({ ...params, action: "presign" });
    }

    /**
     * STEP 2 of an evidence upload: confirm the bytes that landed.
     *
     * The server reads the object, SNIFFS its real type from the magic bytes,
     * enforces the real size, takes the SHA-256, and copies it into the evidence
     * store. A file whose contents disagree with its extension is REJECTED, not
     * corrected.
     */
    public async confirmEvidenceAttachment(params: {
        transactionId: number;
        fileName: string;
        uploadKey: string;
        label?: string;
        disputeId?: number;
    }): Promise<{ uploadUrl?: string; uploadKey?: string; attachment?: any; message: string }> {
        return this.evidenceAttachmentCall({ ...params, action: "confirm" });
    }

    private async evidenceAttachmentCall(params: any): Promise<{ uploadUrl?: string; uploadKey?: string; attachment?: any; message: string }> {
        const { EvidenceAttachmentRequest } = await import("../ajax/Requests/EvidenceAttachmentRequest");
        const { EvidenceAttachmentResponse } = await import("../ajax/Responses/EvidenceAttachmentResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ uploadUrl?: string; uploadKey?: string; attachment?: any; message: string }, typeof EvidenceAttachmentRequest.prototype, typeof EvidenceAttachmentResponse.prototype>(
            EvidenceAttachmentRequest,
            EvidenceAttachmentResponse,
            "uploadEvidenceAttachment",
            "POST",
            isolatedHandle,
            params
        );
    }

    /**
     * Detach one evidence file (DESIGN 7.4).
     *
     * A REMOVAL, not a deletion: the file drops out of the response bundle, while
     * the row, the stored object and the custody entry for the original upload all
     * remain. An evidence set files can silently disappear from is not a chain of
     * custody.
     */
    public async removeEvidenceAttachment(params: {
        attachmentId: number;
        reason?: string;
    }): Promise<{ attachment: any; message: string }> {
        const { RemoveEvidenceAttachmentRequest } = await import("../ajax/Requests/RemoveEvidenceAttachmentRequest");
        const { RemoveEvidenceAttachmentResponse } = await import("../ajax/Responses/RemoveEvidenceAttachmentResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ attachment: any; message: string }, typeof RemoveEvidenceAttachmentRequest.prototype, typeof RemoveEvidenceAttachmentResponse.prototype>(
            RemoveEvidenceAttachmentRequest,
            RemoveEvidenceAttachmentResponse,
            "removeEvidenceAttachment",
            "POST",
            isolatedHandle,
            params
        );
    }

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
    public async getDisputeBundle(disputeId: number): Promise<{ downloadUrl?: string; pdfBase64?: string; filename: string; sha256?: string; sizeBytes?: number; manifest: string[]; message: string }> {
        const { GetDisputeBundleRequest } = await import("../ajax/Requests/GetDisputeBundleRequest");
        const { GetDisputeBundleResponse } = await import("../ajax/Responses/GetDisputeBundleResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ downloadUrl?: string; pdfBase64?: string; filename: string; sha256?: string; sizeBytes?: number; manifest: string[]; message: string }, typeof GetDisputeBundleRequest.prototype, typeof GetDisputeBundleResponse.prototype>(
            GetDisputeBundleRequest,
            GetDisputeBundleResponse,
            "getDisputeBundle",
            "POST",
            isolatedHandle,
            { disputeId }
        );
    }

    /**
     * Lookup a customer by email in CustomerAccountData (KeyDB).
     * Used during account creation to check if the customer already exists.
     */
    public async lookupCustomerByEmail(email: string): Promise<{ found: boolean; firstName?: string; lastName?: string; phoneNumber?: string }> {
        const { LookupCustomerByEmailRequest } = await import("../ajax/Requests/LookupCustomerByEmailRequest");
        const { LookupCustomerByEmailResponse } = await import("../ajax/Responses/LookupCustomerByEmailResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ found: boolean; firstName?: string; lastName?: string; phoneNumber?: string }, typeof LookupCustomerByEmailRequest.prototype, typeof LookupCustomerByEmailResponse.prototype>(
            LookupCustomerByEmailRequest,
            LookupCustomerByEmailResponse,
            "lookupCustomerByEmail",
            "POST",
            isolatedHandle,
            { email }
        );
    }

    /**
     * Generate invoice HTML preview for display in the merchant website
     * @param params Object containing preview data (products, customer info, fees, etc.)
     * @returns Object containing the HTML string
     */
    /**
     * Aggregate stats for one Business: attached customers, invoices billed to
     * it, and finalized transaction count/volume across its payment links.
     */
    public async getBusinessStats(businessId: number): Promise<{
        customerCount: number;
        invoiceCount: number;
        transactionCount: number;
        transactionVolume: number;
    }> {
        const { BusinessStatsRequest } = await import("../ajax/Requests/BusinessStatsRequest");
        const { BusinessStatsResponse } = await import("../ajax/Responses/BusinessStatsResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ customerCount: number; invoiceCount: number; transactionCount: number; transactionVolume: number },
            typeof BusinessStatsRequest.prototype, typeof BusinessStatsResponse.prototype>(
            BusinessStatsRequest,
            BusinessStatsResponse,
            "getBusinessStats",
            "POST",
            isolatedHandle,
            businessId
        );
    }

    /**
     * Clarify-wizard prune-as-you-go: given the merchant's answers so far,
     * which of the remaining wizard questions are already answered? Fail-open —
     * errors return an empty list and the wizard just keeps asking.
     */
    public async pruneClarify(params: {
        originalRequest?: string;
        answersText: string;
        questions: { index: number; text: string; options?: string[] }[];
    }): Promise<{ answered: { index: number; value: string }[] }> {
        const { PruneClarifyRequest } = await import("../ajax/Requests/PruneClarifyRequest");
        const { PruneClarifyResponse } = await import("../ajax/Responses/PruneClarifyResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ answered: { index: number; value: string }[] },
            typeof PruneClarifyRequest.prototype, typeof PruneClarifyResponse.prototype>(
            PruneClarifyRequest,
            PruneClarifyResponse,
            "pruneClarify",
            "POST",
            isolatedHandle,
            params
        );
    }

    public async getInvoicePreviewHtml(params: {
        paymentLinkName?: string;
        customerName?: string;
        customerEmail?: string;
        customerPhone?: string;
        dueDate?: string;
        memo?: string;
        products?: Array<{ id?: number; name?: string; description?: string; price?: number; orderQuantity?: number; memo?: string; discountId?: number }>;
        taxRate?: number;
        serviceFeeRate?: number;
        shippingFee?: number;
        discountId?: number;
        businessId?: number;
        // Inline (not-yet-persisted) global discount — AI proposal previews
        // where a sibling action creates the discount at approval time.
        inlineDiscountType?: string;
        inlineDiscountAmount?: number;
        inlineDiscountName?: string;
        // Business the invoice bills to — server renders it in the BILL TO block.
        businessName?: string;
    }): Promise<{ html: string }> {
        const { InvoicePreviewRequest } = await import("../ajax/Requests/InvoicePreviewRequest");
        const { InvoicePreviewResponse } = await import("../ajax/Responses/InvoicePreviewResponse");
        
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ html: string }, typeof InvoicePreviewRequest.prototype, typeof InvoicePreviewResponse.prototype>(
            InvoicePreviewRequest,
            InvoicePreviewResponse,
            "invoicePreview",
            "POST",
            isolatedHandle,
            params
        );
    }

    /**
     * Approve (execute) or reject (dismiss) an AI chat action proposal.
     * messageId = the proposal Message id delivered on the chat stream.
     * Endpoint string has no "Web" suffix — CMMT appends it in the browser
     * (backend service is approveChatActionsWeb).
     */
    public async approveChatActions(messageId: number, approved: boolean = true): Promise<{
        messageId: number; todoList: string; createdObjects: string; completionMessage: string;
    }> {
        const { ApproveChatActionsRequest } = await import("../ajax/Requests/ApproveChatActionsRequest");
        const { ApproveChatActionsResponse } = await import("../ajax/Responses/ApproveChatActionsResponse");

        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<{ messageId: number; todoList: string; createdObjects: string; completionMessage: string },
                typeof ApproveChatActionsRequest.prototype, typeof ApproveChatActionsResponse.prototype>(
            ApproveChatActionsRequest,
            ApproveChatActionsResponse,
            "approveChatActions",
            "POST",
            isolatedHandle,
            { messageId, approved }
        );
    }

    /** Convenience wrapper: dismiss an AI chat action proposal without executing it. */
    public async rejectChatActions(messageId: number): Promise<{
        messageId: number; todoList: string; createdObjects: string; completionMessage: string;
    }> {
        return this.approveChatActions(messageId, false);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // EMBEDDED CARD CAPTURE — save a card on file, without charging it, from a
    // merchant's OWN site. The embedded equivalent of a Card Capture Form.
    //
    // FOUR CALLS, and only the first needs merchant credentials:
    //
    //   1. MERCHANT SERVER  flux.createCardCaptureForm({ accountEmail, ... })
    //                       -> { paymentLink }                       [API keys]
    //   2. BROWSER          FluxComms.getCardCaptureForm(paymentLink)
    //                       -> { termsText, customerEmail, ... }     [no keys]
    //   3. BROWSER          FluxHostedFields.forPaymentLink(paymentLink)
    //                       ... mount fields ... createToken()
    //                       -> { token }                             [no keys]
    //   4. BROWSER          FluxComms.capturePaymentMethod({ paymentLink,
    //                          cardToken, termsAccepted: true })     [no keys]
    //
    // Steps 2-4 are authenticated by the LINK STRING alone, which is why they are
    // STATIC: they need no authenticated Flux instance, and a merchant's API keys
    // must never reach a browser. Exactly the shape `exchangeOTPLForSession` and
    // `getMerchantPublicKeyFromOTPL` already use.
    //
    // NO SERVER-SIDE SIBLING EXISTS for steps 2-4 — only the `...Web` registrations
    // do, and CMMT appends that suffix in the browser. Calling them from Node
    // resolves to endpoints that do not exist. That is deliberate: see
    // CapturePaymentMethodRequest for why the consent record needs the browser.
    //
    // EXACTLY ONE $0 HOLD, and it is $0: minting the auth token for a card-capture
    // link tags it `skipCardAuth`, so tokenization skips its own verification and
    // the capture in step 4 runs the single authoritative establishment auth.
    // ═══════════════════════════════════════════════════════════════════════

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
    public async createCardCaptureForm(
        params: import("../ajax/Requests/CreateCardCaptureFormRequest").CreateCardCaptureFormParams
    ): Promise<import("../ajax/Responses/CreateCardCaptureFormResponse").CreateCardCaptureFormResult> {
        const { CreateCardCaptureFormRequest } = await import("../ajax/Requests/CreateCardCaptureFormRequest");
        const { CreateCardCaptureFormResponse } = await import("../ajax/Responses/CreateCardCaptureFormResponse");

        const isolatedHandle = (this._securityHandle as any).clone
            ? (this._securityHandle as any).clone() : this._securityHandle;

        return CMMT.fetch<import("../ajax/Responses/CreateCardCaptureFormResponse").CreateCardCaptureFormResult,
                typeof CreateCardCaptureFormRequest.prototype, typeof CreateCardCaptureFormResponse.prototype>(
            CreateCardCaptureFormRequest,
            CreateCardCaptureFormResponse,
            "createPaymentLink",
            "POST",
            isolatedHandle,
            params
        );
    }

    /**
     * STEP 2 — BROWSER ONLY. What the embedded form must display, above all the
     * `termsText` to render beside the acceptance checkbox.
     *
     * That text is produced by the same server-side builder that snapshots the
     * authorization onto the saved card in step 4, so displayed and recorded cannot
     * drift. Render it; do not compose your own.
     */
    public static async getCardCaptureForm(
        paymentLink: string
    ): Promise<import("../ajax/Responses/GetCardCaptureFormResponse").GetCardCaptureFormResult> {
        const { GetCardCaptureFormRequest } = await import("../ajax/Requests/GetCardCaptureFormRequest");
        const { GetCardCaptureFormResponse } = await import("../ajax/Responses/GetCardCaptureFormResponse");

        return CMMT.fetch<import("../ajax/Responses/GetCardCaptureFormResponse").GetCardCaptureFormResult,
                typeof GetCardCaptureFormRequest.prototype, typeof GetCardCaptureFormResponse.prototype>(
            GetCardCaptureFormRequest,
            GetCardCaptureFormResponse,
            "getCardCaptureForm",
            "POST",
            new GenAuthDataSecurityHandle(),
            paymentLink
        );
    }

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
    public static async capturePaymentMethod(
        params: import("../ajax/Requests/CapturePaymentMethodRequest").CapturePaymentMethodParams
    ): Promise<import("../ajax/Responses/CapturePaymentMethodResponse").CapturePaymentMethodResult> {
        const { CapturePaymentMethodRequest } = await import("../ajax/Requests/CapturePaymentMethodRequest");
        const { CapturePaymentMethodResponse } = await import("../ajax/Responses/CapturePaymentMethodResponse");

        return CMMT.fetch<import("../ajax/Responses/CapturePaymentMethodResponse").CapturePaymentMethodResult,
                typeof CapturePaymentMethodRequest.prototype, typeof CapturePaymentMethodResponse.prototype>(
            CapturePaymentMethodRequest,
            CapturePaymentMethodResponse,
            "capturePaymentMethod",
            "POST",
            new GenAuthDataSecurityHandle(),
            params
        );
    }
}

