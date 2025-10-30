import { BaseQuery } from "./BaseQuery";
import { ITransactionProductQuery } from "./ITransactionProductQuery";
import { TransactionProduct } from "./TransactionProduct";
/**
 * This is an object that is used to query for transaction products.
 */
export declare class TransactionProductQuery extends BaseQuery<TransactionProduct> implements ITransactionProductQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        productId: number;
        productVersion: number;
        productDumpId: number;
        productUniqueId: string;
        transactionId: number;
        transactionUniqueId: string;
        quantity: number;
        backOrdered: boolean;
        createdAt: number;
        objectType: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
    };
    metadata: string;
    id: number;
    uniqueId?: string;
    productId?: number;
    productVersion?: number;
    productDumpId?: number;
    productUniqueId?: string;
    transactionId?: number;
    transactionUniqueId?: string;
    quantity?: number;
    backOrdered?: boolean;
    objectType: string;
    constructor(transactionProductQuery?: ITransactionProductQuery);
    static createQuery(itpq: ITransactionProductQuery): TransactionProductQuery;
}
