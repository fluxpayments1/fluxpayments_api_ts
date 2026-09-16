/**
 * The sealed evidence packet snapshot for one transaction.
 *
 * APPEND-ONLY by policy: the server writes it once at seal time and the
 * generic updater rejects it. Every field here is read-only to a client.
 */
export interface ITransactionEvidence {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    /** Full JSON snapshot of the evidence captured at seal time. */
    snapshotJson?: string;
    /** Exact checkout terms text the customer accepted. */
    termsTextSnapshot?: string;
    /** Exact refund policy text shown at checkout. */
    refundPolicySnapshot?: string;
    /** Exact recurring-authorization text the customer accepted. */
    recurringAuthText?: string;
    /** Exact ACH authorization text the customer accepted. */
    achAuthText?: string;
    snapshotSha256?: string;
    sealedAt?: number;
    /**
     * Evidence packet SCHEMA version — the column VERSION_NUMBER, exposed by
     * the server as `packetVersion`. Parse packet shape off THIS, never off
     * `version`.
     */
    packetVersion?: number;
    /**
     * Hibernate optimistic-lock counter (VersionedEntity), which owns the
     * property name `version` server-side. It increments on every row write
     * and says nothing about the packet schema.
     */
    version?: number;
    /** PENDING | SEALED | FAILED | BACKFILL */
    status?: string;
    activeStatus?: boolean;
    metadata?: string;
    createdAt?: number;
    updatedAt?: Date;
}
