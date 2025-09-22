import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class RemovePaymentMethodResponse extends ResponseBodyBase {
    private _message;
    private _removed;
    get message(): string;
    set message(message: string);
    get removed(): boolean;
    set removed(removed: boolean);
    getClientReturnValue(): RemovePaymentMethodResponse;
}
