import { ResponseBodyBase } from "./ResponseBodyBase";
export interface PaymentMethod {
    paymentMethodId: string;
    cardLastFour: string;
    cardBrand: string;
    expiryDate: string;
    cardholderName: string;
    isDefault: boolean;
}
export declare class CreatePaymentMethodResponse extends ResponseBodyBase {
    private _message;
    private _paymentMethod;
    get message(): string;
    set message(message: string);
    get paymentMethod(): PaymentMethod;
    set paymentMethod(paymentMethod: PaymentMethod);
    getClientReturnValue(): CreatePaymentMethodResponse;
}
