import { BaseQuery } from "./BaseQuery";
import { IForthActivityEventQuery } from "./IForthActivityEventQuery";
import { ForthActivityEvent } from "./ForthActivityEvent";

export class ForthActivityEventQuery extends BaseQuery<ForthActivityEvent> implements IForthActivityEventQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            credentialsId: this.credentialsId,
            mappingId: this.mappingId,
            eventType: this.eventType,
            severity: this.severity,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    credentialsId?: number;
    mappingId?: number;
    eventType?: string;
    severity?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string = "forth_activity_event";

    constructor(query?: IForthActivityEventQuery) {
        super(ForthActivityEvent);
        Object.assign(this, query);
    }

    public static createQuery(q: IForthActivityEventQuery) {
        return new ForthActivityEventQuery(q);
    }
}
