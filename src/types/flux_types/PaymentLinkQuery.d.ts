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
        uniqueId: string;
        liveStatus: any;
        removeOnSuccess: any;
        paymentLink: string;
        accountId: number;
    };
    id: number;
    metadata: string;
    uniqueId: string;
    liveStatus: any;
    removeOnSuccess: any;
    paymentLink: string;
    accountId: number;
    protected objectType: string;
    constructor(tokQ?: IPaymentLinkQuery);
    static createQuery(ipq: IPaymentLinkQuery): PaymentLinkQuery;
}
