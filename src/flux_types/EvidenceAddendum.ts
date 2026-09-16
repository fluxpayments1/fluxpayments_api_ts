import { FluxType } from "./FluxType";
import { IEvidenceAddendum } from "./IEvidenceAddendum";

/**
 * READ-ONLY. A post-seal event appended to a transaction's evidence record.
 * The server writes these; serialize() carries identity only.
 */
export class EvidenceAddendum extends FluxType implements IEvidenceAddendum {
    public obName: string = "EvidenceAddendum";

    public getDispName(): string {
        return (this.type || "Addendum") + " #" + this.sequence;
    }

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
    public sequence?: number;
    public type?: string;
    public occurredAt?: number;
    public payloadJson?: string;
    public s3KeyPdf?: string;
    public sha256?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "evidence_addendum";

    constructor(data?: Partial<IEvidenceAddendum>) {
        super(data, EvidenceAddendum);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IEvidenceAddendum>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IEvidenceAddendum>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
