import { BaseQuery } from "./BaseQuery";
import { EvidenceAddendum } from "./EvidenceAddendum";
import { IEvidenceAddendumQuery } from "./IEvidenceAddendumQuery";

export class EvidenceAddendumQuery extends BaseQuery<EvidenceAddendum> implements IEvidenceAddendumQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            transactionId: this.transactionId,
            type: this.type,
            sequence: this.sequence,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    type?: string;
    sequence?: number;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string = "evidence_addendum";

    constructor(query?: IEvidenceAddendumQuery) {
        super(EvidenceAddendum);
        Object.assign(this, query);
    }

    public static createQuery(q: IEvidenceAddendumQuery) {
        return new EvidenceAddendumQuery(q);
    }
}
