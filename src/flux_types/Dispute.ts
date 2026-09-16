import { FluxType } from "./FluxType";
import { IDispute } from "./IDispute";

/**
 * A dispute (chargeback) case against a transaction.
 *
 * The merchant-editable surface is the rebuttal narrative and the case
 * metadata a manually-opened case needs (network, caseNumber, reasonCode,
 * amount, openedAt, respondByAt). The bundle key/hash are never serialized,
 * and `source` is server-owned — see serialize().
 *
 * NOTE FOR THE BACKEND OWNER: there is no dispute service, so this rides
 * GenericCreator/GenericUpdater, and GenericUpdater's evidence strip is gated
 * on `ob instanceof Transaction` — it does not cover Dispute, and Dispute has
 * no certifyUpdatedFields override. Until a Dispute strip lands, a client can
 * still flip a REPORTING_API-ingested case to WON with a resolvedAt. Dropping
 * `source` here closes provenance laundering only; the resolution fields need
 * the server-side strip to be durably safe.
 */
export class Dispute extends FluxType implements IDispute {
    public obName: string = "Dispute";

    public getDispName(): string {
        return this.caseNumber || ("Dispute " + this.id);
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            transactionId: this.transactionId,
            network: this.network,
            caseNumber: this.caseNumber,
            reasonCode: this.reasonCode,
            reasonCategory: this.reasonCategory,
            amount: this.amount,
            currency: this.currency,
            status: this.status,
            openedAt: this.openedAt,
            respondByAt: this.respondByAt,
            respondedAt: this.respondedAt,
            resolvedAt: this.resolvedAt,
            rebuttalText: this.rebuttalText,
            // `source` is DELIBERATELY NOT SENT. It is the provenance of the
            // case — REPORTING_API (processor-ingested) vs MANUAL
            // (merchant-typed) — and a client that can assert it can make a
            // hand-entered case read as processor-ingested in the evidence
            // record. The server owns it: it forces MANUAL on every
            // client-side create. Readable below, never writable.
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public transactionId?: number;
    public network?: string;
    public caseNumber?: string;
    public reasonCode?: string;
    public reasonCategory?: string;
    public amount?: number | string;
    public currency?: string;
    public status?: string;
    public openedAt?: number;
    public respondByAt?: number;
    public respondedAt?: number;
    public resolvedAt?: number;
    public rebuttalText?: string;
    /** Server-written: signed bundle location. Read-only (not serialized). */
    public bundleS3Key?: string;
    /** Server-written: bundle integrity hash. Read-only (not serialized). */
    public bundleSha256?: string;
    public source?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "dispute";

    constructor(data?: Partial<IDispute>) {
        super(data, Dispute);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IDispute>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IDispute>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
