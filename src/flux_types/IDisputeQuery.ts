export interface IDisputeQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    network?: string;
    caseNumber?: string;
    reasonCode?: string;
    reasonCategory?: string;
    status?: string;
    source?: string;
    activeStatus?: boolean;
    metadata?: string;
}
