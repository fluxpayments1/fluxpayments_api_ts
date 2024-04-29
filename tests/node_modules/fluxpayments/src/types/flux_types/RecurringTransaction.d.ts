import { FluxType } from './FluxType';
import { IRecurringTransaction } from './IRecurringTransaction';
export declare class RecurringTransaction extends FluxType implements IRecurringTransaction {
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
    static createInstanceLazy(acc: Partial<IRecurringTransaction>): Promise<RecurringTransaction>;
    static createInstanceSafe(acc: Partial<IRecurringTransaction>): Promise<RecurringTransaction>;
}
