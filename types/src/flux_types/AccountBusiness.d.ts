import { FluxType } from './FluxType';
import { IAccountBusiness } from './IAccountBusiness';
/**
 * Join between a customer Account and a Business (many-to-many). One Business
 * can attach to many customers and one customer can have many businesses.
 * `businessName`/`accountName` are denormalized snapshots so a list of links
 * renders the names without an extra lookup.
 */
export declare class AccountBusiness extends FluxType implements IAccountBusiness {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        createdAt: number;
        activeStatus: boolean;
        accountId: number;
        businessId: number;
        businessName: string;
        accountName: string;
    };
    id: number;
    uniqueId: string;
    metadata: string;
    createdAt: number;
    activeStatus: boolean;
    accountId: number;
    businessId: number;
    businessName: string;
    accountName: string;
    protected objectType: string;
    getDispName(): string;
    constructor(accountBusiness?: Partial<AccountBusiness>);
    static createInstanceLazy(data: Partial<IAccountBusiness>): Promise<AccountBusiness>;
    static createInstanceSafe(data: Partial<IAccountBusiness>): Promise<AccountBusiness>;
}
