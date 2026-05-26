export interface IForthScheduledCharge {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    mappingId?: number;
    forthDebitId?: number;
    amount?: number | string;
    processDate?: number;
    memo?: string;
    status?: string;
    attemptCount?: number;
    lastAttemptAt?: number;
    nextAttemptAt?: number;
    fluxTransactionId?: number;
    errorMessage?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}
