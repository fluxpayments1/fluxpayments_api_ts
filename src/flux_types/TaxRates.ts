
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
    /** The rate as a percentage: 8.25 means 8.25%. 0 to 100, up to 4 decimal places. */
    taxRate: number;
    protected objectType: string = "tax_rates";

    /** "8.25%". The API sends and returns the rate as a PERCENT (2026-10-21). */
    getDispName(): string {
        return this.taxRate === undefined || this.taxRate === null ? "0%" : `${Number(this.taxRate)}%`;
    }

    public constructor(taxRatesUserSpecific?: Partial<TaxRates>) {
        super(taxRatesUserSpecific, TaxRates);
        Object.assign(this, taxRatesUserSpecific)
    }

}
