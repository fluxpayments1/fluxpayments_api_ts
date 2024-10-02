import { FluxType } from './FluxType';
import { IRecurringTransaction } from './IRecurringTransaction';
import { PaymentLink } from './PaymentLink';
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
        accountId: number;
        productId: number;
        productDumpId: number;
        otplId: number;
        nextProcessDate: Date;
        paymentLinks: PaymentLink[];
        status: any;
    };
    id: number;
    metadata: string;
    uniqueId: string;
    recurringAmount: number;
    recurringTaxAmount: number;
    nextProcessDate: Date;
    originalTransactionId: number;
    accountId: number;
    paymentLinks: PaymentLink[];
    productId: number;
    productDumpId: number;
    otplId: number;
    status: any;
    protected objectType: string;
    constructor(recurringTransaction?: Partial<RecurringTransaction>);
    static createInstanceLazy(acc: Partial<IRecurringTransaction>): Promise<RecurringTransaction>;
    static createInstanceSafe(acc: Partial<IRecurringTransaction>): Promise<RecurringTransaction>;
}
