import { BaseQuery } from "./BaseQuery";
import { ITransactionEvidenceQuery } from "./ITransactionEvidenceQuery";
import { TransactionEvidence } from "./TransactionEvidence";
export declare class TransactionEvidenceQuery extends BaseQuery<TransactionEvidence> implements ITransactionEvidenceQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        transactionId: number;
        status: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string;
    constructor(query?: ITransactionEvidenceQuery);
    static createQuery(q: ITransactionEvidenceQuery): TransactionEvidenceQuery;
}
