
import { FluxType } from './FluxType';
import { ITaxRates } from './ITaxRates';

export class TaxRates extends FluxType implements ITaxRates {
    obName: string = "TaxRates";

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            uniqueId: this.uniqueId,
            objectType: this.objectType,
            taxRate: this.taxRate
        };
    }

    uniqueId: string;
    id: number;
    metadata: string;
    taxRate: number;
    protected objectType: string = "tax_rates";

    getDispName(): string {
        return this.taxRate?.toString() || "0"
    }

    public constructor(taxRatesUserSpecific?: Partial<TaxRates>) {
        super(taxRatesUserSpecific, TaxRates);
        Object.assign(this, taxRatesUserSpecific)
    }

}
