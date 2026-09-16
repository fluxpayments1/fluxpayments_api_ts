import { FluxType } from "./FluxType";
import { IEvidenceAddendum } from "./IEvidenceAddendum";
/**
 * READ-ONLY. A post-seal event appended to a transaction's evidence record.
 * The server writes these; serialize() carries identity only.
 */
export declare class EvidenceAddendum extends FluxType implements IEvidenceAddendum {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    transactionId?: number;
    sequence?: number;
    type?: string;
    occurredAt?: number;
    payloadJson?: string;
    s3KeyPdf?: string;
    sha256?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IEvidenceAddendum>);
    static createInstanceLazy(data: Partial<IEvidenceAddendum>): Promise<EvidenceAddendum>;
    static createInstanceSafe(data: Partial<IEvidenceAddendum>): Promise<EvidenceAddendum>;
}
