import { FluxType } from "./FluxType";
import { IMerchantForthCredentials } from "./IMerchantForthCredentials";

export class MerchantForthCredentials extends FluxType implements IMerchantForthCredentials {
    public obName: string = "MerchantForthCredentials";

    public getDispName(): string {
        return this.label || this.forthCompanyName || "Forth Pay";
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            label: this.label,
            forthCompanyId: this.forthCompanyId,
            forthCompanyName: this.forthCompanyName,
            forthCompanyContactName: this.forthCompanyContactName,
            forthCompanyEmail: this.forthCompanyEmail,
            forthAccessTokenExpiresAt: this.forthAccessTokenExpiresAt,
            notificationEmail: this.notificationEmail,
            notificationEmails: this.notificationEmails,
            discoveryListId: this.discoveryListId,
            autoChargeEnabled: this.autoChargeEnabled,
            paused: this.paused,
            lastPollAt: this.lastPollAt,
            lastClientWatermark: this.lastClientWatermark,
            lastDebitWatermark: this.lastDebitWatermark,
            lastHoldPollAt: this.lastHoldPollAt,
            lastCompanyRefreshAt: this.lastCompanyRefreshAt,
            consecutivePollFailures: this.consecutivePollFailures,
            pollBackoffUntil: this.pollBackoffUntil,
            refreshingAt: this.refreshingAt,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public label?: string;
    public forthCompanyId?: number;
    public forthCompanyName?: string;
    public forthCompanyContactName?: string;
    public forthCompanyEmail?: string;
    public forthAccessTokenExpiresAt?: number;
    public notificationEmail?: string;
    public notificationEmails?: string;
    public discoveryListId?: number;
    public autoChargeEnabled?: boolean;
    public paused?: boolean;
    public lastPollAt?: number;
    public lastClientWatermark?: number;
    public lastDebitWatermark?: number;
    public lastHoldPollAt?: number;
    public lastCompanyRefreshAt?: number;
    public consecutivePollFailures?: number;
    public pollBackoffUntil?: number;
    public refreshingAt?: number;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "merchant_forth_credentials";

    constructor(data?: Partial<IMerchantForthCredentials>) {
        super(data, MerchantForthCredentials);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IMerchantForthCredentials>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IMerchantForthCredentials>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
