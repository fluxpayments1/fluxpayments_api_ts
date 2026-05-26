import { BaseQuery } from "./BaseQuery";
import { IForthActivityEventQuery } from "./IForthActivityEventQuery";
import { ForthActivityEvent } from "./ForthActivityEvent";
export declare class ForthActivityEventQuery extends BaseQuery<ForthActivityEvent> implements IForthActivityEventQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        credentialsId: number;
        mappingId: number;
        eventType: string;
        severity: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
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
    objectType: string;
    constructor(query?: IForthActivityEventQuery);
    static createQuery(q: IForthActivityEventQuery): ForthActivityEventQuery;
}
