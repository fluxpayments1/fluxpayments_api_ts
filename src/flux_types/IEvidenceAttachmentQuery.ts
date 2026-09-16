export interface IEvidenceAttachmentQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    disputeId?: number;
    label?: string;
    fileName?: string;
    activeStatus?: boolean;
    metadata?: string;
}
