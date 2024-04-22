export interface IOneTimePaymentLink {
    id?: number;
    metadata?: string;
    uniqueId?: string;
    liveStatus?: any;
    removeOnSuccess?: any;
    paymentLink?: string;
    accountId?: number;
}
