import { BaseQuery } from "./BaseQuery";
import { IPaymentLinkQuery } from "./IPaymentLinkQuery";
import { PaymentLink } from "./PaymentLink";
/**
 * This is an object that is used to query for one_time_payment_links.
 */
export declare class PaymentLinkQuery extends BaseQuery<PaymentLink> implements IPaymentLinkQuery {
    obName: string;
    serialize(): {
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
        hasBeenSent: boolean;
        transferDirection: "PUSH" | "PULL";
        transferStatus: string;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
        businessId: number;
    };
    id: number;
    transferDirection?: 'PUSH' | 'PULL';
    transferStatus?: string;
    metadata: string;
    disableACH: boolean;
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    disableCard: boolean;
    name?: string;
    uniqueId: string;
    liveStatus: any;
    removeOnSuccess: any;
    createdAt: number;
    paymentLink: string;
    isReusable: boolean;
    accountId: number;
    isInvoice: boolean;
    dueDate: number;
    currentStatus: string;
    hasBeenSent: boolean;
    qbInvoiceId: string;
    hasBeenSyncedToQuickbooks: boolean;
    /** Filters links/invoices billed to one Business (Business detail page). */
    businessId: number;
    objectType: string;
    constructor(tokQ?: IPaymentLinkQuery);
    static createQuery(ipq: IPaymentLinkQuery): PaymentLinkQuery;
}
