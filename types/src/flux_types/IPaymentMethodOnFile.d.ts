export interface IPaymentMethodOnFile {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    accountId?: number;
    accountUniqueId?: string;
    customerSensitiveDataId?: number;
    customerSensitiveDataUniqueId?: string;
    paymentLinkId?: number;
    payType?: string;
    lastFour?: string;
    cardBrand?: string;
    zeroDollarAuthTxnId?: number;
    authRunAt?: number;
    termsTextSnapshot?: string;
    termsAcceptedAt?: number;
    termsIp?: string;
    termsUserAgent?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}
