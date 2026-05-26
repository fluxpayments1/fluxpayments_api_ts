import { BaseQuery } from "./BaseQuery";
import { IMerchantForthCredentialsQuery } from "./IMerchantForthCredentialsQuery";
import { MerchantForthCredentials } from "./MerchantForthCredentials";
export declare class MerchantForthCredentialsQuery extends BaseQuery<MerchantForthCredentials> implements IMerchantForthCredentialsQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        forthCompanyId: number;
        paused: boolean;
        autoChargeEnabled: boolean;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    forthCompanyId?: number;
    paused?: boolean;
    autoChargeEnabled?: boolean;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(query?: IMerchantForthCredentialsQuery);
    static createQuery(q: IMerchantForthCredentialsQuery): MerchantForthCredentialsQuery;
}
