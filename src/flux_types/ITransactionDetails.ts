export interface ITransactionDetails {
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
    objectType: string;
}
