import { FluxType } from './FluxType';
export class TaxNexusTotals extends FluxType {
    obName: string = "TaxNexusTotals";

    public serialize() {
        return {
            id: this.id,
            version: this.version,
            email: this.email,
            metadata: this.metadata,
            objectType: this.objectType,
            stateCode: this.stateCode,
            transactionCount: this.transactionCount,
            transactionSum: this.transactionSum,
            startDateOnThisRecord: this.startDateOnThisRecord,
        };
    }

    id: number;
    version: number;
    email: string;
    metadata: string;
    stateCode: string;
    transactionCount: number;
    transactionSum: number;
    startDateOnThisRecord: Date;
    protected objectType: string = "tax_nexus_totals";

    getDispName(): string {
        return this.email
    }

    public constructor(taxNexusTotals?: Partial<TaxNexusTotals>) {
        super(taxNexusTotals, TaxNexusTotals);
        Object.assign(this, taxNexusTotals)
    }

}
