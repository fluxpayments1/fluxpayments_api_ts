import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Document types the merchant-portal download accepts.
 *
 * EVIDENCE / EVIDENCE_JSON are the sealed chargeback evidence record and its
 * machine-readable sidecar. `ADDENDUM:<id>` names one later event appended to that
 * record — the id travels inside documentType because the request carries no
 * addendum identifier field, and overloading transactionId (which the server also
 * needs, to scope the lookup) would make one numeric field mean two things.
 *
 * Server-side this is a plain String, so a value this union does not list still
 * reaches the backend — the union is compile-time correctness, not a gate.
 */
export type DownloadDocumentType =
    | "INVOICE"
    | "RECEIPT"
    | "REFUND"
    | "EVIDENCE"
    | "EVIDENCE_JSON"
    | `ADDENDUM:${number}`;

export class DownloadInvoiceWebRequest extends RequestBodyBase {
    private paymentLinkNumericId: number;
    private transactionId: number;
    private documentType: DownloadDocumentType;

    constructor() {
        super();
    }

    public loadClientData(documentType: DownloadDocumentType = "INVOICE", paymentLinkNumericId?: number, transactionId?: number): void {
        this.documentType = documentType;
        this.paymentLinkNumericId = paymentLinkNumericId;
        this.transactionId = transactionId;
    }

    public getRequestAsString(): string {
        const data: any = {
            documentType: this.documentType,
        };
        
        if (this.paymentLinkNumericId) {
            data.paymentLinkNumericId = this.paymentLinkNumericId;
        }
        if (this.transactionId) {
            data.transactionId = this.transactionId;
        }
        
        return JSON.stringify(data);
    }
}
