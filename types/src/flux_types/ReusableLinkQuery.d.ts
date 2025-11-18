import { PaymentLinkQuery } from './PaymentLinkQuery';
export declare class ReusableLinkQuery extends PaymentLinkQuery {
    obName: string;
    constructor(query?: Partial<ReusableLinkQuery>);
    serialize(): {
        isReusable: boolean;
        id: number;
        metadata: string;
        objectType: string;
        createdAt: number;
        disableACH: boolean;
        disableCard: boolean;
        uniqueId: string;
        liveStatus: any;
        removeOnSuccess: any;
        paymentLink: string;
        accountId: number;
        isInvoice: boolean;
        dueDate: number;
        currentStatus: string;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
    };
}
