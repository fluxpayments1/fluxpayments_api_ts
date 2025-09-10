import { BaseQuery } from "./BaseQuery";
import { ITaxRatesQuery } from "./ITaxRatesQuery";
import { TaxRates } from "./TaxRates";

/**
 * This is an object that is used to query for tax_rates_user_specifics.
 */
export class TaxRatesQuery extends BaseQuery<TaxRates> {
    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            createdAt: this.createdAt,
            taxRate: this.taxRate
        }
    }
    id: number;
    metadata: string;
    taxRate: number
    objectType: string = "tax_rates";

    public constructor(tokQ?: ITaxRatesQuery){
        super(TaxRates);
        Object.assign(this, tokQ);
    }

}
