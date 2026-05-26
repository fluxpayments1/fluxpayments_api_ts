import { BaseQuery } from "./BaseQuery";
import { IForthScheduledChargeQuery } from "./IForthScheduledChargeQuery";
import { ForthScheduledCharge } from "./ForthScheduledCharge";

export class ForthScheduledChargeQuery extends BaseQuery<ForthScheduledCharge> implements IForthScheduledChargeQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            mappingId: this.mappingId,
            forthDebitId: this.forthDebitId,
            status: this.status,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    mappingId?: number;
    forthDebitId?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string = "forth_scheduled_charge";

    constructor(query?: IForthScheduledChargeQuery) {
        super(ForthScheduledCharge);
        Object.assign(this, query);
    }

    public static createQuery(q: IForthScheduledChargeQuery) {
        return new ForthScheduledChargeQuery(q);
    }
}
