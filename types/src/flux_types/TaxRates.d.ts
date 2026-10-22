import { FluxType } from './FluxType';
import { ITaxRates } from './ITaxRates';
export declare class TaxRates extends FluxType implements ITaxRates {
    obName: string;
    serialize(): {
        id: number;
        metadata: string;
        uniqueId: string;
        objectType: string;
        taxRate: number;
    };
    uniqueId: string;
    id: number;
    metadata: string;
    /** The rate as a percentage: 8.25 means 8.25%. 0 to 100, up to 4 decimal places. */
    taxRate: number;
    protected objectType: string;
    /** "8.25%". The API sends and returns the rate as a PERCENT (2026-10-21). */
    getDispName(): string;
    constructor(taxRatesUserSpecific?: Partial<TaxRates>);
}
