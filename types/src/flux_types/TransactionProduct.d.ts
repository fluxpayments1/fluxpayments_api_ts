import { FluxType } from "./FluxType";
import { ITransactionProduct } from "./ITransactionProduct";
export declare class TransactionProduct extends FluxType implements ITransactionProduct {
    getDispName(): string;
    obName: string;
    serialize(): {
        uniqueId: string;
        id: number;
        metadata: string;
        productId: number;
        productVersion: number;
        productDumpId: number;
        productUniqueId: string;
        transactionId: number;
        transactionUniqueId: string;
        quantity: number;
        backOrdered: boolean;
        objectType: string;
    };
    uniqueId: string;
    id: number;
    metadata: string;
    productId: number;
    productVersion: number;
    productDumpId: number;
    productUniqueId: string;
    transactionId: number;
    transactionUniqueId: string;
    quantity: number;
    backOrdered: boolean;
    protected objectType: string;
    constructor(transactionProduct?: Partial<ITransactionProduct>);
    static createInstanceLazy(tp: Partial<ITransactionProduct>): Promise<TransactionProduct>;
    static createInstanceSafe(tp: Partial<ITransactionProduct>): Promise<TransactionProduct>;
}
