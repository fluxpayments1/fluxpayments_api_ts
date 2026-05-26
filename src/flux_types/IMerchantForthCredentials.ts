export interface IMerchantForthCredentials {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    label?: string;
    forthCompanyId?: number;
    forthCompanyName?: string;
    forthCompanyContactName?: string;
    forthCompanyEmail?: string;
    forthAccessTokenExpiresAt?: number;
    notificationEmail?: string;
    autoChargeEnabled?: boolean;
    paused?: boolean;
    lastPollAt?: number;
    lastClientWatermark?: number;
    lastDebitWatermark?: number;
    lastHoldPollAt?: number;
    lastCompanyRefreshAt?: number;
    consecutivePollFailures?: number;
    pollBackoffUntil?: number;
    refreshingAt?: number;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}
