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
    createdAt: number;
    updatedAt: Date;
    uniqueId: string;
    metadata: string;
}
