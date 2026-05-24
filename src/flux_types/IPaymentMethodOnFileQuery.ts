export interface IPaymentMethodOnFileQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    accountId?: number;
    paymentLinkId?: number;
    payType?: string;
    activeStatus?: boolean;
    metadata?: string;
}
