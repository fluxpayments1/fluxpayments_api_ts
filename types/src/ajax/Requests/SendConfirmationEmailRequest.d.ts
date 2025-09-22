import { RequestBodyBase } from "./RequestBodyBase";
export declare class SendConfirmationEmailRequest extends RequestBodyBase {
    private _email;
    get email(): string;
    set email(email: string);
    loadClientData(email: string): void;
}
