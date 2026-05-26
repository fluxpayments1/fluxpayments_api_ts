export interface IForthActivityEventQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    credentialsId?: number;
    mappingId?: number;
    eventType?: string;
    severity?: string;
    activeStatus?: boolean;
    metadata?: string;
}
