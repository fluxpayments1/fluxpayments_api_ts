/**
 * A merchant-supplied file attached to a transaction's evidence record or to a
 * dispute (delivery proof, signed contract, correspondence).
 *
 * Merchant-writable: transactionId, disputeId, label, fileName, contentType,
 * sizeBytes and the document payload (s3Key — a @FluxDocument field, so the
 * client sends the document and the server stores it and writes back the key,
 * exactly like Merchant.merchantLogo). The hash, uploader identity and
 * timestamps are server-written.
 */
export interface IEvidenceAttachment {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    disputeId?: number;
    label?: string;
    fileName?: string;
    contentType?: string;
    sizeBytes?: number;
    /** Document payload on the way up, S3 key on the way back down. */
    s3Key?: string;
    sha256?: string;
    uploadedByMacId?: number;
    uploadedByMerchantId?: number;
    uploadedAt?: number;
    removedAt?: number;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    createdAt?: number;
    updatedAt?: Date;
}
