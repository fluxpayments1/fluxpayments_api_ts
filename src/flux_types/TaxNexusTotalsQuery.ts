import { BaseQuery } from "./BaseQuery";
import { ITaxNexusTotalsQuery } from "./ITaxNexusTotalsQuery";
import { TaxNexusTotals } from "./TaxNexusTotals";

/**
 * This is an object that is used to query for tax_nexus_totalss.
 */
export class TaxNexusTotalsQuery extends BaseQuery<TaxNexusTotals> {
    public serialize() {
        return {
            id: this.id,
            version: this.version,
            email: this.email,
            metadata: this.metadata,
            createdAt: this.createdAt,
            objectType: this.objectType,
            stateCode: this.stateCode,
            transactionCount: this.transactionCount,
            transactionSum: this.transactionSum,
            startDateOnThisRecord: this.startDateOnThisRecord,
        }
    }
    id: number;
    version: number;
    email: string;
    metadata: string;
    stateCode: string;
    transactionCount: number;
    transactionSum: number;
    startDateOnThisRecord: Date;
    objectType: string = "tax_nexus_totals";

    public constructor(tokQ?: ITaxNexusTotalsQuery){
        super(TaxNexusTotals);
        Object.assign(this, tokQ);
    }

}
