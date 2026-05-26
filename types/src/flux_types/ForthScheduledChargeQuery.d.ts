import { BaseQuery } from "./BaseQuery";
import { IForthScheduledChargeQuery } from "./IForthScheduledChargeQuery";
import { ForthScheduledCharge } from "./ForthScheduledCharge";
export declare class ForthScheduledChargeQuery extends BaseQuery<ForthScheduledCharge> implements IForthScheduledChargeQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        mappingId: number;
        forthDebitId: number;
        status: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    mappingId?: number;
    forthDebitId?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(query?: IForthScheduledChargeQuery);
    static createQuery(q: IForthScheduledChargeQuery): ForthScheduledChargeQuery;
}
