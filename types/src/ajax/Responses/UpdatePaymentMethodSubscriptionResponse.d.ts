import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class UpdatePaymentMethodSubscriptionResponse extends ResponseBodyBase {
    private _message;
    private _updated;
    get message(): string;
    set message(message: string);
    get updated(): boolean;
    set updated(updated: boolean);
    getClientReturnValue(): UpdatePaymentMethodSubscriptionResponse;
}
