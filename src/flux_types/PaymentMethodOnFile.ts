import { FluxType } from "./FluxType";
import { IPaymentMethodOnFile } from "./IPaymentMethodOnFile";

export class PaymentMethodOnFile extends FluxType implements IPaymentMethodOnFile {
    public obName: string = "PaymentMethodOnFile";

    public getDispName(): string {
        const brand = this.cardBrand ? this.cardBrand + " " : "";
        const tail = this.lastFour ? "•••• " + this.lastFour : "(no last four)";
        return brand + tail;
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            accountId: this.accountId,
            accountUniqueId: this.accountUniqueId,
            customerSensitiveDataId: this.customerSensitiveDataId,
            customerSensitiveDataUniqueId: this.customerSensitiveDataUniqueId,
            paymentLinkId: this.paymentLinkId,
            payType: this.payType,
            pushConsent: this.pushConsent,
            pullConsent: this.pullConsent,
            lastFour: this.lastFour,
            cardBrand: this.cardBrand,
            zeroDollarAuthTxnId: this.zeroDollarAuthTxnId,
            authRunAt: this.authRunAt,
            termsTextSnapshot: this.termsTextSnapshot,
            termsAcceptedAt: this.termsAcceptedAt,
            termsIp: this.termsIp,
            termsUserAgent: this.termsUserAgent,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public accountId?: number;
    public accountUniqueId?: string;
    public customerSensitiveDataId?: number;
    public customerSensitiveDataUniqueId?: string;
    public paymentLinkId?: number;
    public payType?: string;
    // Visa Direct per-direction consent (read-only from the portal's view).
    public pushConsent?: boolean;
    public pullConsent?: boolean;
    public lastFour?: string;
    public cardBrand?: string;
    public zeroDollarAuthTxnId?: number;
    public authRunAt?: number;
    public termsTextSnapshot?: string;
    public termsAcceptedAt?: number;
    public termsIp?: string;
    public termsUserAgent?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "payment_method_on_file";

    constructor(data?: Partial<IPaymentMethodOnFile>) {
        super(data, PaymentMethodOnFile);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IPaymentMethodOnFile>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IPaymentMethodOnFile>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
