import { FluxType } from './FluxType';
import { IAccountBusiness } from './IAccountBusiness';

/**
 * Join between a customer Account and a Business (many-to-many). One Business
 * can attach to many customers and one customer can have many businesses.
 * `businessName`/`accountName` are denormalized snapshots so a list of links
 * renders the names without an extra lookup.
 */
export class AccountBusiness extends FluxType implements IAccountBusiness {
    obName: string = "AccountBusiness";

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            createdAt: this.createdAt,
            activeStatus: this.activeStatus,
            accountId: this.accountId,
            businessId: this.businessId,
            businessName: this.businessName,
            accountName: this.accountName
        };
    }

    id: number;
    uniqueId: string;
    metadata: string;
    createdAt: number;
    activeStatus: boolean;
    accountId: number;
    businessId: number;
    businessName: string;
    accountName: string;
    protected objectType: string = "account_business";

    getDispName(): string {
        return this.businessName || "";
    }

    public constructor(accountBusiness?: Partial<AccountBusiness>) {
        super(accountBusiness, AccountBusiness);
        Object.assign(this, accountBusiness);
    }

    public static async createInstanceLazy(data: Partial<IAccountBusiness>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IAccountBusiness>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
