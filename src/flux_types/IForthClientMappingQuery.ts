export interface IForthClientMappingQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    credentialsId?: number;
    forthClientId?: number;
    fluxAccountId?: number;
    enrollmentStatus?: string;
    paused?: boolean;
    waitingForCardRefresh?: boolean;
    activeStatus?: boolean;
    metadata?: string;
}
