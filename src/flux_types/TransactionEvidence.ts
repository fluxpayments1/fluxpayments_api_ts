import { FluxType } from "./FluxType";
import { ITransactionEvidence } from "./ITransactionEvidence";

/**
 * READ-ONLY. The sealed evidence packet for a transaction — append-only on the
 * server (no update service; the generic updater rejects it). serialize() only
 * carries the identity fields a read/query needs; nothing here is client-writable.
 */
export class TransactionEvidence extends FluxType implements ITransactionEvidence {
    public obName: string = "TransactionEvidence";

    public getDispName(): string {
        return "Evidence packet for transaction " + this.transactionId;
    }

    /**
     * Identity only — this entity is append-only server-side, so no content
     * field is sent back up. A create/update attempt is rejected by the backend.
     */
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
    public transactionId?: number;
    public snapshotJson?: string;
    public termsTextSnapshot?: string;
    public refundPolicySnapshot?: string;
    public recurringAuthText?: string;
    public achAuthText?: string;
    public snapshotSha256?: string;
    public sealedAt?: number;
    /** Packet SCHEMA version (column VERSION_NUMBER). Not the lock counter. */
    public packetVersion?: number;
    /** Hibernate optimistic-lock counter. Says nothing about packet shape. */
    public version?: number;
    public status?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    protected objectType: string = "transaction_evidence";

    constructor(data?: Partial<ITransactionEvidence>) {
        super(data, TransactionEvidence);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<ITransactionEvidence>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<ITransactionEvidence>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
