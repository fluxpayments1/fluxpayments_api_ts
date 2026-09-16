import { BaseQuery } from "./BaseQuery";
import { Dispute } from "./Dispute";
import { IDisputeQuery } from "./IDisputeQuery";

export class DisputeQuery extends BaseQuery<Dispute> implements IDisputeQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            transactionId: this.transactionId,
            network: this.network,
            caseNumber: this.caseNumber,
            reasonCode: this.reasonCode,
            reasonCategory: this.reasonCategory,
            status: this.status,
            source: this.source,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

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
    objectType: string = "dispute";

    constructor(query?: IDisputeQuery) {
        super(Dispute);
        Object.assign(this, query);
    }

    public static createQuery(q: IDisputeQuery) {
        return new DisputeQuery(q);
    }
}
