import { BaseQuery } from "./BaseQuery";
import { EvidenceAttachment } from "./EvidenceAttachment";
import { IEvidenceAttachmentQuery } from "./IEvidenceAttachmentQuery";
export declare class EvidenceAttachmentQuery extends BaseQuery<EvidenceAttachment> implements IEvidenceAttachmentQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        transactionId: number;
        disputeId: number;
        label: string;
        fileName: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    disputeId?: number;
    label?: string;
    fileName?: string;
    activeStatus?: boolean;
    metadata?: string;
    objectType: string;
    constructor(query?: IEvidenceAttachmentQuery);
    static createQuery(q: IEvidenceAttachmentQuery): EvidenceAttachmentQuery;
}
