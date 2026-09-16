import { BaseQuery } from "./BaseQuery";
import { ITransactionEvidenceQuery } from "./ITransactionEvidenceQuery";
import { TransactionEvidence } from "./TransactionEvidence";

export class TransactionEvidenceQuery extends BaseQuery<TransactionEvidence> implements ITransactionEvidenceQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            transactionId: this.transactionId,
            status: this.status,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string = "transaction_evidence";

    constructor(query?: ITransactionEvidenceQuery) {
        super(TransactionEvidence);
        Object.assign(this, query);
    }

    public static createQuery(q: ITransactionEvidenceQuery) {
        return new TransactionEvidenceQuery(q);
    }
}
