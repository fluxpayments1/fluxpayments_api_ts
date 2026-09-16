import { BaseQuery } from "./BaseQuery";
import { EvidenceAddendum } from "./EvidenceAddendum";
import { IEvidenceAddendumQuery } from "./IEvidenceAddendumQuery";
export declare class EvidenceAddendumQuery extends BaseQuery<EvidenceAddendum> implements IEvidenceAddendumQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        transactionId: number;
        type: string;
        sequence: number;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    type?: string;
    sequence?: number;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string;
    constructor(query?: IEvidenceAddendumQuery);
    static createQuery(q: IEvidenceAddendumQuery): EvidenceAddendumQuery;
}
