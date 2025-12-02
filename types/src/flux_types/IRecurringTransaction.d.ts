import { PaymentLink } from "./PaymentLink";
import { Transaction } from "./Transaction";
export interface IRecurringTransaction {
    id?: number;
    metadata?: string;
    uniqueid?: string;
    accountId?: number;
    paymentLinkId?: number;
    paymentLink?: PaymentLink;
    transactions?: Transaction[];
    isCurrent: boolean;
    recurringAmount?: number;
    recurringTaxAmount?: number;
    originalTransactionId?: number;
    nextProcessDate: Date;
    productId?: number;
    productDumpId?: number;
    otplId?: number;
    installmentPeriod?: 'MONTHLY' | 'QUARTERLY' | 'ANNUALLY';
    status?: any;
    cancelled?: boolean;
    isInstallmentType?: boolean;
    totalInstallments?: number;
    installmentsMade?: number;
}
