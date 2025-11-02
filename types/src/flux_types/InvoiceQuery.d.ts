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
        accountId: number;
        dueDate: number;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
    };
}
