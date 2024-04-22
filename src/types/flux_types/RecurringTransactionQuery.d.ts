import { BaseQuery, IRecurringTransactionQuery } from "./";
export declare class RecurringTransactionQuery extends BaseQuery {
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