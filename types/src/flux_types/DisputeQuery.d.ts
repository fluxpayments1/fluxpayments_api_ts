import { BaseQuery } from "./BaseQuery";
import { Dispute } from "./Dispute";
import { IDisputeQuery } from "./IDisputeQuery";
export declare class DisputeQuery extends BaseQuery<Dispute> implements IDisputeQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        transactionId: number;
        network: string;
        caseNumber: string;
        reasonCode: string;
        reasonCategory: string;
        status: string;
        source: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    network?: string;
    caseNumber?: string;
    reasonCode?: string;
    reasonCategory?: string;
    status?: string;
    source?: string;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string;
    constructor(query?: IDisputeQuery);
    static createQuery(q: IDisputeQuery): DisputeQuery;
}
