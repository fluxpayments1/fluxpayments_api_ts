import { RequestBodyBase } from "./RequestBodyBase";
export declare class RemovePaymentMethodRequest extends RequestBodyBase {
    private _paymentMethodId;
    get paymentMethodId(): string;
    set paymentMethodId(paymentMethodId: string);
    loadClientData(paymentMethodId: string): void;
}
