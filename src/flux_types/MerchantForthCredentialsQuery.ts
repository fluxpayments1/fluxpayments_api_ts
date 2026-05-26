import { BaseQuery } from "./BaseQuery";
import { IMerchantForthCredentialsQuery } from "./IMerchantForthCredentialsQuery";
import { MerchantForthCredentials } from "./MerchantForthCredentials";

export class MerchantForthCredentialsQuery extends BaseQuery<MerchantForthCredentials> implements IMerchantForthCredentialsQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            forthCompanyId: this.forthCompanyId,
            paused: this.paused,
            autoChargeEnabled: this.autoChargeEnabled,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    forthCompanyId?: number;
    paused?: boolean;
    autoChargeEnabled?: boolean;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string = "merchant_forth_credentials";

    constructor(query?: IMerchantForthCredentialsQuery) {
        super(MerchantForthCredentials);
        Object.assign(this, query);
    }

    public static createQuery(q: IMerchantForthCredentialsQuery) {
        return new MerchantForthCredentialsQuery(q);
    }
}
