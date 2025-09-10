import { IEnabledStatesTaxQuery } from "./IEnabledStatesTaxQuery";
import { BaseQuery } from "./BaseQuery";
import { EnabledStatesTax } from "./EnabledStatesTax";
/**
 * This is an object that is used to query for enabled_states_taxs.
 */
export declare class EnabledStatesTaxQuery extends BaseQuery<EnabledStatesTax> {
    serialize(): {
        id: number;
        activeStatus: any;
        uniqueid: string;
        version: number;
        email: string;
        metadata: string;
        createdAt: number;
        enabled: any;
        objectType: string;
        stateCode: string;
    };
    id: number;
    activeStatus: any;
    uniqueid: string;
    version: number;
    email: string;
    metadata: string;
    enabled: any;
    stateCode: string;
    objectType: string;
    constructor(tokQ?: IEnabledStatesTaxQuery);
    static createQuery(ipq: IEnabledStatesTaxQuery): EnabledStatesTaxQuery;
}
