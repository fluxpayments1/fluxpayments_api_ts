import { BaseQuery } from "./BaseQuery";
import { IForthClientMappingQuery } from "./IForthClientMappingQuery";
import { ForthClientMapping } from "./ForthClientMapping";
export declare class ForthClientMappingQuery extends BaseQuery<ForthClientMapping> implements IForthClientMappingQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        credentialsId: number;
        forthClientId: number;
        fluxAccountId: number;
        enrollmentStatus: string;
        paused: boolean;
        waitingForCardRefresh: boolean;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    credentialsId?: number;
    forthClientId?: number;
    fluxAccountId?: number;
    enrollmentStatus?: string;
    paused?: boolean;
    waitingForCardRefresh?: boolean;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(query?: IForthClientMappingQuery);
    static createQuery(q: IForthClientMappingQuery): ForthClientMappingQuery;
}
