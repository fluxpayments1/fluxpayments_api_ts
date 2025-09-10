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
    taxRate: number;
    protected objectType: string;
    getDispName(): string;
    constructor(taxRatesUserSpecific?: Partial<TaxRates>);
}
