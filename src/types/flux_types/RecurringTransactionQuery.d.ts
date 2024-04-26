import { BaseQuery } from "./BaseQuery";
import { IRecurringTransactionQuery } from "./IRecurringTransactionQuery";
import { RecurringTransaction } from "./RecurringTransaction";
export declare class RecurringTransactionQuery extends BaseQuery<RecurringTransaction> implements IRecurringTransactionQuery {
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
    constructor(tokQ?: IRecurringTransactionQuery);
    static createQuery(ipq: IRecurringTransactionQuery): RecurringTransactionQuery;
}
