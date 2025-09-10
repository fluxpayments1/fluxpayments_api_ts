import { BaseQuery } from "./BaseQuery";
import { ITaxNexusTotalsQuery } from "./ITaxNexusTotalsQuery";
import { TaxNexusTotals } from "./TaxNexusTotals";
/**
 * This is an object that is used to query for tax_nexus_totalss.
 */
export declare class TaxNexusTotalsQuery extends BaseQuery<TaxNexusTotals> {
    serialize(): {
        id: number;
        version: number;
        email: string;
        metadata: string;
        createdAt: number;
        objectType: string;
        stateCode: string;
        transactionCount: number;
        transactionSum: number;
        startDateOnThisRecord: Date;
    };
    id: number;
    version: number;
    email: string;
    metadata: string;
    stateCode: string;
    transactionCount: number;
    transactionSum: number;
    startDateOnThisRecord: Date;
    objectType: string;
    constructor(tokQ?: ITaxNexusTotalsQuery);
}
