export interface IEmailLogQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    providerMessageId?: string;
    transactionId?: number;
    paymentLinkId?: number;
    accountId?: number;
    recipient?: string;
    template?: string;
    provider?: string;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
}
