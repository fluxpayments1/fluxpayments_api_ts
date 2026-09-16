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
export declare class Dispute extends FluxType implements IDispute {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        transactionId: number;
        network: string;
        caseNumber: string;
        reasonCode: string;
        reasonCategory: string;
        amount: string | number;
        currency: string;
        status: string;
        openedAt: number;
        respondByAt: number;
        respondedAt: number;
        resolvedAt: number;
        rebuttalText: string;
        activeStatus: boolean;
        metadata: string;
        version: number;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    transactionId?: number;
    network?: string;
    caseNumber?: string;
    reasonCode?: string;
    reasonCategory?: string;
    amount?: number | string;
    currency?: string;
    status?: string;
    openedAt?: number;
    respondByAt?: number;
    respondedAt?: number;
    resolvedAt?: number;
    rebuttalText?: string;
    /** Server-written: signed bundle location. Read-only (not serialized). */
    bundleS3Key?: string;
    /** Server-written: bundle integrity hash. Read-only (not serialized). */
    bundleSha256?: string;
    source?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IDispute>);
    static createInstanceLazy(data: Partial<IDispute>): Promise<Dispute>;
    static createInstanceSafe(data: Partial<IDispute>): Promise<Dispute>;
}
