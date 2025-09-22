import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class SendConfirmationEmailResponse extends ResponseBodyBase {
    private _message;
    get message(): string;
    set message(message: string);
    getClientReturnValue(): SendConfirmationEmailResponse;
}
