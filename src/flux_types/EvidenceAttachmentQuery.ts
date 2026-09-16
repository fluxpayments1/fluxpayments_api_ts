import { BaseQuery } from "./BaseQuery";
import { EvidenceAttachment } from "./EvidenceAttachment";
import { IEvidenceAttachmentQuery } from "./IEvidenceAttachmentQuery";

export class EvidenceAttachmentQuery extends BaseQuery<EvidenceAttachment> implements IEvidenceAttachmentQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            transactionId: this.transactionId,
            disputeId: this.disputeId,
            label: this.label,
            fileName: this.fileName,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    disputeId?: number;
    label?: string;
    fileName?: string;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string = "evidence_attachment";

    constructor(query?: IEvidenceAttachmentQuery) {
        super(EvidenceAttachment);
        Object.assign(this, query);
    }

    public static createQuery(q: IEvidenceAttachmentQuery) {
        return new EvidenceAttachmentQuery(q);
    }
}
