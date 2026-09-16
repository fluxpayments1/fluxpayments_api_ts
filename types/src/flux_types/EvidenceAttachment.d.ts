import { FluxType } from "./FluxType";
import { IEvidenceAttachment } from "./IEvidenceAttachment";
/**
 * A file the merchant attaches as evidence (delivery proof, contract,
 * correspondence). The descriptive fields and the document payload are
 * client-writable; sha256 / uploadedBy* / uploadedAt / removedAt are
 * server-written and are NOT serialized.
 */
export declare class EvidenceAttachment extends FluxType implements IEvidenceAttachment {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        transactionId: number;
        disputeId: number;
        label: string;
        fileName: string;
        contentType: string;
        sizeBytes: number;
        s3Key: string;
        activeStatus: boolean;
        metadata: string;
        version: number;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    transactionId?: number;
    disputeId?: number;
    label?: string;
    fileName?: string;
    contentType?: string;
    sizeBytes?: number;
    s3Key?: string;
    /** Server-written integrity hash. Read-only (not serialized). */
    sha256?: string;
    /** Server-written uploader identity. Read-only (not serialized). */
    uploadedByMacId?: number;
    uploadedByMerchantId?: number;
    uploadedAt?: number;
    removedAt?: number;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IEvidenceAttachment>);
    static createInstanceLazy(data: Partial<IEvidenceAttachment>): Promise<EvidenceAttachment>;
    static createInstanceSafe(data: Partial<IEvidenceAttachment>): Promise<EvidenceAttachment>;
}
