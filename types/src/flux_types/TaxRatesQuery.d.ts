import { BaseQuery } from "./BaseQuery";
import { ITaxRatesQuery } from "./ITaxRatesQuery";
import { TaxRates } from "./TaxRates";
/**
 * This is an object that is used to query for tax_rates_user_specifics.
 */
export declare class TaxRatesQuery extends BaseQuery<TaxRates> {
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        createdAt: number;
        taxRate: number;
    };
    id: number;
    metadata: string;
    taxRate: number;
    objectType: string;
    constructor(tokQ?: ITaxRatesQuery);
}
