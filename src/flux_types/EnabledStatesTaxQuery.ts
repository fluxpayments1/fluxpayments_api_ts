import { IEnabledStatesTaxQuery } from "./IEnabledStatesTaxQuery";
import { BaseQuery } from "./BaseQuery";
import { EnabledStatesTax } from "./EnabledStatesTax";

/**
 * This is an object that is used to query for enabled_states_taxs.
 */
export class EnabledStatesTaxQuery extends BaseQuery<EnabledStatesTax> {
    public serialize() {
        return {
            id: this.id,
            activeStatus: this.activeStatus,
            uniqueid: this.uniqueid,
            version: this.version,
            email: this.email,
            metadata: this.metadata,
            createdAt: this.createdAt,
            enabled: this.enabled,
            objectType: this.objectType,
            stateCode: this.stateCode,
        }
    }
    id: number;
    activeStatus: any;
    uniqueid: string;
    version: number;
    email: string;
    metadata: string;
    enabled: any;
    stateCode: string;
    objectType: string = "enabled_states_tax";

    public constructor(tokQ?: IEnabledStatesTaxQuery){
        super(EnabledStatesTax);
        Object.assign(this, tokQ);
    }


    public static createQuery(ipq:  IEnabledStatesTaxQuery) {
        return new EnabledStatesTaxQuery(ipq);
    }
}
