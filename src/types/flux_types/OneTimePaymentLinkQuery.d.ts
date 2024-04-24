import { BaseQuery } from "./BaseQuery";
import { IOneTimePaymentLinkQuery } from "./IOneTimePaymentLinkQuery";
import { OneTimePaymentLink } from "./OneTimePaymentLink";
/**
 * This is an object that is used to query for one_time_payment_links.
 */
export declare class OneTimePaymentLinkQuery extends BaseQuery<OneTimePaymentLink> {
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
    constructor(tokQ?: IOneTimePaymentLinkQuery);
    static createQuery(ipq: IOneTimePaymentLinkQuery): OneTimePaymentLinkQuery;
}
