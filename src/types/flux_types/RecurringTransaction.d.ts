import { FluxType } from "./";
export declare class RecurringTransaction extends FluxType {
    obName: string;
    serialize(): {
        id: number;
        metadata: string;
        uniqueId: string;
        objectType: string;
        recurringAmount: number;
        recurringTaxAmount: number;
        originalTransactionId: number;
        productId: number;
        productDumpId: number;
        otplId: number;
        status: any;
    };
    id: number;
    metadata: string;
    uniqueId: string;
    recurringAmount: number;
    recurringTaxAmount: number;
    originalTransactionId: number;
    productId: number;
    productDumpId: number;
    otplId: number;
    status: any;
    protected objectType: string;
    constructor(recurringTransaction?: Partial<RecurringTransaction>);
}
