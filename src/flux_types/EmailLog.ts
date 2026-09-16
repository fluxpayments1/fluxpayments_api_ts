import { FluxType } from "./FluxType";
import { IEmailLog } from "./IEmailLog";

/**
 * READ-ONLY. An outbound email plus its delivery/open/click/bounce timeline.
 * Written by the mail engine and the provider webhooks; serialize() carries
 * identity only.
 */
export class EmailLog extends FluxType implements IEmailLog {
    public obName: string = "EmailLog";

    public getDispName(): string {
        return (this.template || "Email") + " to " + (this.recipient || "");
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public providerMessageId?: string;
    public transactionId?: number;
    public paymentLinkId?: number;
    public accountId?: number;
    public recipient?: string;
    public template?: string;
    public provider?: string;
    public sentAt?: number;
    public deliveredAt?: number;
    public openedAt?: number;
    public clickedAt?: number;
    public bounceReason?: string;
    public status?: string;
    public bodyS3Key?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "email_log";

    constructor(data?: Partial<IEmailLog>) {
        super(data, EmailLog);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IEmailLog>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IEmailLog>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
