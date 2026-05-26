import { FluxType } from "./FluxType";
import { IForthScheduledCharge } from "./IForthScheduledCharge";

export class ForthScheduledCharge extends FluxType implements IForthScheduledCharge {
    public obName: string = "ForthScheduledCharge";

    public getDispName(): string {
        return "Forth debit " + this.forthDebitId + " ($" + this.amount + ")";
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            mappingId: this.mappingId,
            forthDebitId: this.forthDebitId,
            amount: this.amount,
            processDate: this.processDate,
            memo: this.memo,
            status: this.status,
            attemptCount: this.attemptCount,
            lastAttemptAt: this.lastAttemptAt,
            nextAttemptAt: this.nextAttemptAt,
            fluxTransactionId: this.fluxTransactionId,
            errorMessage: this.errorMessage,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public mappingId?: number;
    public forthDebitId?: number;
    public amount?: number | string;
    public processDate?: number;
    public memo?: string;
    public status?: string;
    public attemptCount?: number;
    public lastAttemptAt?: number;
    public nextAttemptAt?: number;
    public fluxTransactionId?: number;
    public errorMessage?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "forth_scheduled_charge";

    constructor(data?: Partial<IForthScheduledCharge>) {
        super(data, ForthScheduledCharge);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IForthScheduledCharge>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IForthScheduledCharge>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
