import { BaseQuery } from "./BaseQuery";
import { ITransactionDetailsQuery } from "./ITransactionDetailsQuery";
import { TransactionDetails } from "./TransactionDetails";

/**
 * This is an object that is used to query for transaction details.
 */
export class TransactionDetailsQuery extends BaseQuery<TransactionDetails> {
    public serialize() {
        return {
            id: this.id,
            transactionId: this.transactionId,
            accountId: this.accountId,
            amount: this.amount,
            transactionType: this.transactionType,
            transactionStatus: this.transactionStatus,
            description: this.description,
            timestamp: this.timestamp,
            dateCreated: this.dateCreated,
            timeCreated: this.timeCreated,
            paymentMethodId: this.paymentMethodId,
            currency: this.currency,
            merchantId: this.merchantId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType
        };
    }

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
    createdAt: Date;
    updatedAt: Date;
    uniqueId: string;
    metadata: string;
    objectType: string = "transaction_details";

    public constructor(tokQ?: ITransactionDetailsQuery) {
        super(TransactionDetails);
        Object.assign(this, tokQ);
    }

    public static createQuery(ipq: ITransactionDetailsQuery) {
        return new TransactionDetailsQuery(ipq);
    }
}
