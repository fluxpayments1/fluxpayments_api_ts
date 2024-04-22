export interface IRecurringTransaction {
    id?: number;
    metadata?: string;
    uniqueid?: string;
    recurringAmount?: number;
    recurringTaxAmount?: number;
    originalTransactionId?: number;
    productId?: number;
    productDumpId?: number;
    otplId?: number;
    status?: any;
}
