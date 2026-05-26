import { FluxType } from "./FluxType";
import { IForthClientMapping } from "./IForthClientMapping";

export class ForthClientMapping extends FluxType implements IForthClientMapping {
    public obName: string = "ForthClientMapping";

    public getDispName(): string {
        const n = ((this.forthClientFirstName || "") + " " + (this.forthClientLastName || "")).trim();
        return n || ("Forth client #" + this.forthClientId);
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            credentialsId: this.credentialsId,
            forthClientId: this.forthClientId,
            forthCompanyId: this.forthCompanyId,
            forthClientEmail: this.forthClientEmail,
            forthClientFirstName: this.forthClientFirstName,
            forthClientLastName: this.forthClientLastName,
            forthClientPhone: this.forthClientPhone,
            fluxAccountId: this.fluxAccountId,
            cardIntakePaymentLinkId: this.cardIntakePaymentLinkId,
            intakeSentAt: this.intakeSentAt,
            intakeCompletedAt: this.intakeCompletedAt,
            paymentMethodOnFileId: this.paymentMethodOnFileId,
            enrollmentStatus: this.enrollmentStatus,
            enrollmentPaused: this.enrollmentPaused,
            enrollmentDropped: this.enrollmentDropped,
            enrollmentGraduated: this.enrollmentGraduated,
            waitingForCardRefresh: this.waitingForCardRefresh,
            lastChargedAt: this.lastChargedAt,
            lastChargeStatus: this.lastChargeStatus,
            lastChargeError: this.lastChargeError,
            paused: this.paused,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public credentialsId?: number;
    public forthClientId?: number;
    public forthCompanyId?: number;
    public forthClientEmail?: string;
    public forthClientFirstName?: string;
    public forthClientLastName?: string;
    public forthClientPhone?: string;
    public fluxAccountId?: number;
    public cardIntakePaymentLinkId?: number;
    public intakeSentAt?: number;
    public intakeCompletedAt?: number;
    public paymentMethodOnFileId?: number;
    public enrollmentStatus?: string;
    public enrollmentPaused?: boolean;
    public enrollmentDropped?: boolean;
    public enrollmentGraduated?: boolean;
    public waitingForCardRefresh?: boolean;
    public lastChargedAt?: number;
    public lastChargeStatus?: string;
    public lastChargeError?: string;
    public paused?: boolean;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "forth_client_mapping";

    constructor(data?: Partial<IForthClientMapping>) {
        super(data, ForthClientMapping);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IForthClientMapping>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IForthClientMapping>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
