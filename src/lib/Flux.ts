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
import { ChngProdInvCntRequest } from "../ajax/Requests/ChngProdInvCntRequest";

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
        onChunk: (chunk: { content: string; done: boolean; conversationId?: number; title?: string }) => void,
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
     * @returns Object containing base64 PDF, filename, and message
     */
    public async downloadInvoice(paymentLinkId: string, documentType: "INVOICE" | "RECEIPT" = "INVOICE"): Promise<{ pdfBase64: string; filename: string; message: string; compressed: boolean }> {
        const { DownloadInvoiceRequest } = await import("../ajax/Requests/DownloadInvoiceRequest");
        const { DownloadInvoiceResponse } = await import("../ajax/Responses/DownloadInvoiceResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ pdfBase64: string; filename: string; message: string; compressed: boolean }, typeof DownloadInvoiceRequest.prototype, typeof DownloadInvoiceResponse.prototype>(
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
     * Download invoice or receipt PDF from merchant website
     * @param documentType "INVOICE" or "RECEIPT" - type of document to download
     * @param paymentLinkNumericId Optional: The numeric ID of the payment link
     * @param transactionId Optional: The numeric ID of the transaction
     * @returns Object containing base64 PDF, filename, and message
     */
    public async downloadInvoiceWeb(documentType: "INVOICE" | "RECEIPT" = "INVOICE", paymentLinkNumericId?: number, transactionId?: number): Promise<{ pdfBase64: string; filename: string; message: string; compressed: boolean }> {
        const { DownloadInvoiceWebRequest } = await import("../ajax/Requests/DownloadInvoiceWebRequest");
        const { DownloadInvoiceResponse } = await import("../ajax/Responses/DownloadInvoiceResponse");
        
        // Clone security handle for request isolation
        const isolatedHandle = (this._securityHandle as any).clone ? (this._securityHandle as any).clone() : this._securityHandle;
        
        return CMMT.fetch<{ pdfBase64: string; filename: string; message: string; compressed: boolean }, typeof DownloadInvoiceWebRequest.prototype, typeof DownloadInvoiceResponse.prototype>(
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
     * Generate invoice HTML preview for display in the merchant website
     * @param params Object containing preview data (products, customer info, fees, etc.)
     * @returns Object containing the HTML string
     */
    public async getInvoicePreviewHtml(params: {
        paymentLinkName?: string;
        customerName?: string;
        customerEmail?: string;
        customerPhone?: string;
        dueDate?: string;
        products?: Array<{ id?: number; name?: string; price?: number; orderQuantity?: number }>;
        taxRate?: number;
        serviceFeeRate?: number;
        shippingFee?: number;
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
}

