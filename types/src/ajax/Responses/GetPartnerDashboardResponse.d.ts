import { ResponseBodyBase } from "./ResponseBodyBase";
export interface PartnerMerchantRow {
    merchantId: number;
    businessName: string;
    volume: string | number;
    transactionCount: number;
    failedCount: number;
    lastActivity: string | number | null;
}
export interface PartnerFeedRow {
    transactionId: number;
    merchantId: number;
    merchantName: string;
    total: string | number | null;
    transactionType: string;
    approvalStatus: string;
    cardBrand: string | null;
    processorError: string | null;
    createdAt: string | number | null;
}
export interface PartnerEventRow {
    merchantId: number;
    merchantName: string;
    eventType: string;
    severity: string;
    message: string;
    createdAt: string | number | null;
}
export interface PartnerDashboardResult {
    allowed: boolean;
    grossVolume: string | number;
    transactionCount: number;
    finalizedCount: number;
    failedCount: number;
    activeMerchantCount: number;
    totalMerchantCount: number;
    newCustomerCount: number;
    pendingAchCount: number;
    merchants: PartnerMerchantRow[];
    recentTransactions: PartnerFeedRow[];
    /**
     * Authorization feed ($0 card verifications + decline bookkeeping rows).
     * NOTE: AUTH rows are always approvalStatus=FINALIZED by backend
     * convention — a DECLINED auth is the one with a non-null processorError.
     */
    recentAuths: PartnerFeedRow[];
    forthEvents: PartnerEventRow[];
}
export declare class GetPartnerDashboardResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): GetPartnerDashboardResponse;
    getClientReturnValue(): PartnerDashboardResult;
}
