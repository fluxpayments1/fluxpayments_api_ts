export interface IForthActivityEvent {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    credentialsId?: number;
    mappingId?: number;
    eventType?: string;
    severity?: string;
    message?: string;
    payload?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}
