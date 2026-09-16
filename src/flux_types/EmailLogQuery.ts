import { BaseQuery } from "./BaseQuery";
import { EmailLog } from "./EmailLog";
import { IEmailLogQuery } from "./IEmailLogQuery";

export class EmailLogQuery extends BaseQuery<EmailLog> implements IEmailLogQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            providerMessageId: this.providerMessageId,
            transactionId: this.transactionId,
            paymentLinkId: this.paymentLinkId,
            accountId: this.accountId,
            recipient: this.recipient,
            template: this.template,
            provider: this.provider,
            status: this.status,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

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
    objectType: string = "email_log";

    constructor(query?: IEmailLogQuery) {
        super(EmailLog);
        Object.assign(this, query);
    }

    public static createQuery(q: IEmailLogQuery) {
        return new EmailLogQuery(q);
    }
}
