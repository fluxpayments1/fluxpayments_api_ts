export interface IEvidenceAddendumQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    type?: string;
    sequence?: number;
    activeStatus?: boolean;
    metadata?: string;
}
