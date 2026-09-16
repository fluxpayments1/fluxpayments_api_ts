import { BaseQuery } from "./BaseQuery";
import { EmailLog } from "./EmailLog";
import { IEmailLogQuery } from "./IEmailLogQuery";
export declare class EmailLogQuery extends BaseQuery<EmailLog> implements IEmailLogQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        providerMessageId: string;
        transactionId: number;
        paymentLinkId: number;
        accountId: number;
        recipient: string;
        template: string;
        provider: string;
        status: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    providerMessageId?: string;
    transactionId?: number;
    paymentLinkId?: number;
    accountId?: number;
    recipient?: string;
    template?: string;
    provider?: string;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string;
    constructor(query?: IEmailLogQuery);
    static createQuery(q: IEmailLogQuery): EmailLogQuery;
}
