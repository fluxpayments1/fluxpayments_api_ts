import { PaymentLinkQuery } from './PaymentLinkQuery';
export declare class CardCaptureFormQuery extends PaymentLinkQuery {
    obName: string;
    isCardCapture: boolean;
    constructor(query?: Partial<CardCaptureFormQuery>);
    serialize(): {
        isCardCapture: boolean;
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
        isInvoice: boolean;
        dueDate: number;
        currentStatus: string;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
    };
}
