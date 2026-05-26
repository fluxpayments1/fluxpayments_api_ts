export interface IMerchantForthCredentialsQuery {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    forthCompanyId?: number;
    paused?: boolean;
    autoChargeEnabled?: boolean;
    activeStatus?: boolean;
    metadata?: string;
}
