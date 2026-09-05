import { PaymentLinkQuery } from './PaymentLinkQuery';
export declare class InvoiceQuery extends PaymentLinkQuery {
    obName: string;
    constructor(query?: Partial<InvoiceQuery>);
    serialize(): {
        isInvoice: boolean;
        id: number;
        metadata: string;
        objectType: string;
        createdAt: number;
        disableACH: boolean;
        disableCard: boolean;
        uniqueId: string;
        isReusable: boolean;
        liveStatus: any;
        removeOnSuccess: any;
        paymentLink: string;
        name: string;
        customerEmail: string;
        customerFirstName: string;
        customerLastName: string;
        customerPhone: string;
        accountId: number;
        dueDate: number;
        currentStatus: string;
        hasBeenSent: boolean;
        transferDirection: "PUSH" | "PULL";
        transferStatus: string;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
        businessId: number;
    };
}
