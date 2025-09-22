import { RequestBodyBase } from "./RequestBodyBase";
export declare class ConfirmEmailCodeRequest extends RequestBodyBase {
    private _email;
    private _code;
    get email(): string;
    set email(email: string);
    get code(): string;
    set code(code: string);
    loadClientData(email: string, code: string): void;
}
