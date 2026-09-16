import { FluxType } from "./FluxType";
import { IEmailLog } from "./IEmailLog";
/**
 * READ-ONLY. An outbound email plus its delivery/open/click/bounce timeline.
 * Written by the mail engine and the provider webhooks; serialize() carries
 * identity only.
 */
export declare class EmailLog extends FluxType implements IEmailLog {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    providerMessageId?: string;
    transactionId?: number;
    paymentLinkId?: number;
    accountId?: number;
    recipient?: string;
    template?: string;
    provider?: string;
    sentAt?: number;
    deliveredAt?: number;
    openedAt?: number;
    clickedAt?: number;
    bounceReason?: string;
    status?: string;
    bodyS3Key?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IEmailLog>);
    static createInstanceLazy(data: Partial<IEmailLog>): Promise<EmailLog>;
    static createInstanceSafe(data: Partial<IEmailLog>): Promise<EmailLog>;
}
