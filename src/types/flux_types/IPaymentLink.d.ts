export interface IPaymentLink {
    id?: number;
    metadata?: string;
    uniqueId?: string;
    redirectUrl: string;
    oneTimeUse: boolean;
    liveStatus?: any;
    removeOnSuccess?: any;
    paymentLink?: string;
    accountId?: number;
}
