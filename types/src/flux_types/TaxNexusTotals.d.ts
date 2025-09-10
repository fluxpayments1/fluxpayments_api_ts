import { FluxType } from './FluxType';
export declare class TaxNexusTotals extends FluxType {
    obName: string;
    serialize(): {
        id: number;
        version: number;
        email: string;
        metadata: string;
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
    protected objectType: string;
    getDispName(): string;
    constructor(taxNexusTotals?: Partial<TaxNexusTotals>);
}
