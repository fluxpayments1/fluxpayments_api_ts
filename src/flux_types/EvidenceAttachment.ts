import { FluxType } from "./FluxType";
import { IEvidenceAttachment } from "./IEvidenceAttachment";

/**
 * A file the merchant attaches as evidence (delivery proof, contract,
 * correspondence). The descriptive fields and the document payload are
 * client-writable; sha256 / uploadedBy* / uploadedAt / removedAt are
 * server-written and are NOT serialized.
 */
export class EvidenceAttachment extends FluxType implements IEvidenceAttachment {
    public obName: string = "EvidenceAttachment";

    public getDispName(): string {
        return this.label || this.fileName || ("Attachment " + this.id);
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            transactionId: this.transactionId,
            disputeId: this.disputeId,
            label: this.label,
            fileName: this.fileName,
            contentType: this.contentType,
            sizeBytes: this.sizeBytes,
            s3Key: this.s3Key,
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
    public disputeId?: number;
    public label?: string;
    public fileName?: string;
    public contentType?: string;
    public sizeBytes?: number;
    public s3Key?: string;
    /** Server-written integrity hash. Read-only (not serialized). */
    public sha256?: string;
    /** Server-written uploader identity. Read-only (not serialized). */
    public uploadedByMacId?: number;
    public uploadedByMerchantId?: number;
    public uploadedAt?: number;
    public removedAt?: number;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "evidence_attachment";

    constructor(data?: Partial<IEvidenceAttachment>) {
        super(data, EvidenceAttachment);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IEvidenceAttachment>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IEvidenceAttachment>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
