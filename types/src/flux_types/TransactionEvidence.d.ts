import { FluxType } from "./FluxType";
import { ITransactionEvidence } from "./ITransactionEvidence";
/**
 * READ-ONLY. The sealed evidence packet for a transaction — append-only on the
 * server (no update service; the generic updater rejects it). serialize() only
 * carries the identity fields a read/query needs; nothing here is client-writable.
 */
export declare class TransactionEvidence extends FluxType implements ITransactionEvidence {
    obName: string;
    getDispName(): string;
    /**
     * Identity only — this entity is append-only server-side, so no content
     * field is sent back up. A create/update attempt is rejected by the backend.
     */
    serialize(): {
        id: number;
        uniqueId: string;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    transactionId?: number;
    snapshotJson?: string;
    termsTextSnapshot?: string;
    refundPolicySnapshot?: string;
    recurringAuthText?: string;
    achAuthText?: string;
    snapshotSha256?: string;
    sealedAt?: number;
    /** Packet SCHEMA version (column VERSION_NUMBER). Not the lock counter. */
    packetVersion?: number;
    /** Hibernate optimistic-lock counter. Says nothing about packet shape. */
    version?: number;
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    protected objectType: string;
    constructor(data?: Partial<ITransactionEvidence>);
    static createInstanceLazy(data: Partial<ITransactionEvidence>): Promise<TransactionEvidence>;
    static createInstanceSafe(data: Partial<ITransactionEvidence>): Promise<TransactionEvidence>;
}
