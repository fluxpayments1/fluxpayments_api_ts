import { BaseQuery } from "./BaseQuery";
import { ITransactionDetailsQuery } from "./ITransactionDetailsQuery";
import { TransactionDetails } from "./TransactionDetails";
/**
 * This is an object that is used to query for transaction details.
 */
export declare class TransactionDetailsQuery extends BaseQuery<TransactionDetails> {
    serialize(): {
        id: number;
        transactionId: number;
        accountId: number;
        amount: number;
        transactionType: string;
        transactionStatus: string;
        description: string;
        timestamp: Date;
        dateCreated: Date;
        timeCreated: string;
        paymentMethodId: number;
        currency: string;
        merchantId: number;
        createdAt: number;
        updatedAt: Date;
        uniqueId: string;
        metadata: string;
        objectType: string;
    };
    id: number;
    transactionId: number;
    accountId: number;
    amount: number;
    transactionType: string;
    transactionStatus: string;
    description: string;
    timestamp: Date;
    dateCreated: Date;
    timeCreated: string;
    paymentMethodId: number;
    currency: string;
    merchantId: number;
    createdAt: number;
    updatedAt: Date;
    uniqueId: string;
    metadata: string;
    objectType: string;
    constructor(tokQ?: ITransactionDetailsQuery);
    static createQuery(ipq: ITransactionDetailsQuery): TransactionDetailsQuery;
}
