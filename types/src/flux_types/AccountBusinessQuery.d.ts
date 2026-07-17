import { BaseQuery } from "./BaseQuery";
import { IAccountBusinessQuery } from "./IAccountBusinessQuery";
import { AccountBusiness } from "./AccountBusiness";
export declare class AccountBusinessQuery extends BaseQuery<AccountBusiness> {
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
    activeStatus: boolean;
    accountId: number;
    businessId: number;
    businessName: string;
    accountName: string;
    objectType: string;
    constructor(q?: IAccountBusinessQuery);
}
