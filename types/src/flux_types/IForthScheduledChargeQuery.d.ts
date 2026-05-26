export interface IForthScheduledChargeQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    mappingId?: number;
    forthDebitId?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
}
