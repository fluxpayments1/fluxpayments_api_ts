import { BaseQuery } from "./BaseQuery";
import { IPaymentMethodOnFileQuery } from "./IPaymentMethodOnFileQuery";
import { PaymentMethodOnFile } from "./PaymentMethodOnFile";
export declare class PaymentMethodOnFileQuery extends BaseQuery<PaymentMethodOnFile> implements IPaymentMethodOnFileQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        accountId: number;
        paymentLinkId: number;
        payType: string;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    accountId?: number;
    paymentLinkId?: number;
    payType?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(query?: IPaymentMethodOnFileQuery);
    static createQuery(q: IPaymentMethodOnFileQuery): PaymentMethodOnFileQuery;
}
