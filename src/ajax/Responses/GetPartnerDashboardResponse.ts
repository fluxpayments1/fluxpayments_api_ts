import { ResponseBodyBase } from "./ResponseBodyBase";

export interface PartnerMerchantRow {
    merchantId: number;
    businessName: string;
    volume: string | number;
    transactionCount: number;
    failedCount: number;
    lastActivity: string | number | null;
    /** The business's AI switch (2026-10-19). Absent on an older backend = on. */
    aiEnabled: boolean;
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
    /** True only for the ADMIN tier (unscoped view + Partners management). */
    admin: boolean;
    /**
     * True when the caller's login holds two or more active memberships (MAC split,
     * 2026-10-12 — replaces the pre-split `partnerOnly`). Display-only, never enforcement.
     */
    multiMerchant: boolean;
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

export class GetPartnerDashboardResponse extends ResponseBodyBase {
    private result: PartnerDashboardResult = {
        allowed: false,
        admin: false,
        multiMerchant: false,
        grossVolume: 0,
        transactionCount: 0,
        finalizedCount: 0,
        failedCount: 0,
        activeMerchantCount: 0,
        totalMerchantCount: 0,
        newCustomerCount: 0,
        pendingAchCount: 0,
        merchants: [],
        recentTransactions: [],
        recentAuths: [],
        forthEvents: [],
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): GetPartnerDashboardResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            allowed: !!p.allowed,
            admin: !!p.admin,
            multiMerchant: !!p.multiMerchant,
            grossVolume: p.grossVolume ?? 0,
            transactionCount: p.transactionCount || 0,
            finalizedCount: p.finalizedCount || 0,
            failedCount: p.failedCount || 0,
            activeMerchantCount: p.activeMerchantCount || 0,
            totalMerchantCount: p.totalMerchantCount || 0,
            newCustomerCount: p.newCustomerCount || 0,
            pendingAchCount: p.pendingAchCount || 0,
            merchants: (p.merchants || []).map((r: any) => ({ ...r, aiEnabled: r?.aiEnabled !== false })),
            recentTransactions: p.recentTransactions || [],
            recentAuths: p.recentAuths || [],
            forthEvents: p.forthEvents || [],
        };
        return this;
    }

    public getClientReturnValue(): PartnerDashboardResult {
        return this.result;
    }
}
