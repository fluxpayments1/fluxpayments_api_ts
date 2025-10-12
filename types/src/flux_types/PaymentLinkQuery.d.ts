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
        accountId: number;
        isInvoice: boolean;
        dueDate: number;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
    };
    id: number;
    metadata: string;
    disableACH: boolean;
    disableCard: boolean;
    uniqueId: string;
    liveStatus: any;
    removeOnSuccess: any;
    createdAt: number;
    paymentLink: string;
    isReusable: boolean;
    accountId: number;
    isInvoice: boolean;
    dueDate: number;
    qbInvoiceId: string;
    hasBeenSyncedToQuickbooks: boolean;
    objectType: string;
    constructor(tokQ?: IPaymentLinkQuery);
    static createQuery(ipq: IPaymentLinkQuery): PaymentLinkQuery;
}
