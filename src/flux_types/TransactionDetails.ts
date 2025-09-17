import { FluxType } from './FluxType';
import { ITransactionDetails } from './ITransactionDetails';

export class TransactionDetails extends FluxType implements ITransactionDetails {
    obName: string = "TransactionDetails";

    getDispName(): string {
        return this.description || `Transaction #${this.transactionId}`
    }

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
    protected objectType: string = "transaction_details";

    public constructor(transactionDetails?: Partial<TransactionDetails>) {
        super(transactionDetails, TransactionDetails);
        Object.assign(this, transactionDetails);
    }
}
