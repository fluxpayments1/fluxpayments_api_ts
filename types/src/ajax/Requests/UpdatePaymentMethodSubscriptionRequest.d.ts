import { RequestBodyBase } from "./RequestBodyBase";
export declare class UpdatePaymentMethodSubscriptionRequest extends RequestBodyBase {
    private _subscriptionId;
    private _paymentMethodId;
    get subscriptionId(): number;
    set subscriptionId(subscriptionId: number);
    get paymentMethodId(): number;
    set paymentMethodId(paymentMethodId: number);
    loadClientData(subscriptionId: number, paymentMethodId: number): void;
}
