export interface ITransactionProduct {
    uniqueId?: string;
    id?: number;
    metadata?: string;
    productId?: number;
    productVersion?: number;
    productDumpId?: number;
    productUniqueId?: string;
    transactionId?: number;
    transactionUniqueId?: string;
    quantity: number;
    backOrdered?: boolean;
}
