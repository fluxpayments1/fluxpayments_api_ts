import { PaymentLink } from "./PaymentLink";
export interface IRecurringTransaction {
    id?: number;
    metadata?: string;
    uniqueid?: string;
    accountId?: number;
    paymentLinks: PaymentLink[];
    recurringAmount?: number;
    recurringTaxAmount?: number;
    originalTransactionId?: number;
    nextProcessDate: Date;
    productId?: number;
    productDumpId?: number;
    otplId?: number;
    status?: any;
}
