import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class CancelSubscriptionResponse extends ResponseBodyBase {
    private _message;
    private _cancelled;
    get message(): string;
    set message(message: string);
    get cancelled(): boolean;
    set cancelled(cancelled: boolean);
    getClientReturnValue(): CancelSubscriptionResponse;
}
