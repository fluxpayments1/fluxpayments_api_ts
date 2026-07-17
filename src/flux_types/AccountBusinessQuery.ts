import { BaseQuery } from "./BaseQuery";
import { IAccountBusinessQuery } from "./IAccountBusinessQuery";
import { AccountBusiness } from "./AccountBusiness";

export class AccountBusinessQuery extends BaseQuery<AccountBusiness> {
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
    activeStatus: boolean;
    accountId: number;
    businessId: number;
    businessName: string;
    accountName: string;
    objectType: string = "account_business";

    public constructor(q?: IAccountBusinessQuery) {
        super(AccountBusiness);
        Object.assign(this, q);
    }
}
