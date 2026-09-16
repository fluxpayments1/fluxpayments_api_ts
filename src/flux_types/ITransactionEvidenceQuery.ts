export interface ITransactionEvidenceQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
}
