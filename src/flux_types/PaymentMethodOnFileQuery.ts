import { BaseQuery } from "./BaseQuery";
import { IPaymentMethodOnFileQuery } from "./IPaymentMethodOnFileQuery";
import { PaymentMethodOnFile } from "./PaymentMethodOnFile";

export class PaymentMethodOnFileQuery extends BaseQuery<PaymentMethodOnFile> implements IPaymentMethodOnFileQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            accountId: this.accountId,
            paymentLinkId: this.paymentLinkId,
            payType: this.payType,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    accountId?: number;
    paymentLinkId?: number;
    payType?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string = "payment_method_on_file";

    constructor(query?: IPaymentMethodOnFileQuery) {
        super(PaymentMethodOnFile);
        Object.assign(this, query);
    }

    public static createQuery(q: IPaymentMethodOnFileQuery) {
        return new PaymentMethodOnFileQuery(q);
    }
}
