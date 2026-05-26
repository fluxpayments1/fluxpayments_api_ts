import { BaseQuery } from "./BaseQuery";
import { IForthClientMappingQuery } from "./IForthClientMappingQuery";
import { ForthClientMapping } from "./ForthClientMapping";

export class ForthClientMappingQuery extends BaseQuery<ForthClientMapping> implements IForthClientMappingQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            credentialsId: this.credentialsId,
            forthClientId: this.forthClientId,
            fluxAccountId: this.fluxAccountId,
            enrollmentStatus: this.enrollmentStatus,
            paused: this.paused,
            waitingForCardRefresh: this.waitingForCardRefresh,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

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
    objectType: string = "forth_client_mapping";

    constructor(query?: IForthClientMappingQuery) {
        super(ForthClientMapping);
        Object.assign(this, query);
    }

    public static createQuery(q: IForthClientMappingQuery) {
        return new ForthClientMappingQuery(q);
    }
}
