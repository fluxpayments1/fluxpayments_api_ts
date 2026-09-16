/**
 * An event appended to a transaction's evidence record AFTER the packet was
 * sealed (refund, dispute movement, delivery proof, attachment, rebuttal,
 * legal hold, redaction, backfill). Server-written; read-only to a client.
 */
export interface IEvidenceAddendum {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    /** Position in the addendum chain for this transaction (1-based). */
    sequence?: number;
    /** REFUND | DISPUTE_OPENED | DISPUTE_UPDATED | DELIVERY_PROOF | ATTACHMENT | REBUTTAL | LEGAL_HOLD | REDACTION | BACKFILL */
    type?: string;
    occurredAt?: number;
    payloadJson?: string;
    s3KeyPdf?: string;
    sha256?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    createdAt?: number;
    updatedAt?: Date;
}
