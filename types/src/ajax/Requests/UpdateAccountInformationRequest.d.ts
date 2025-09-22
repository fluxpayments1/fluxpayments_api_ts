import { RequestBodyBase } from "./RequestBodyBase";
export declare class UpdateAccountInformationRequest extends RequestBodyBase {
    private _firstName;
    private _lastName;
    private _phone;
    private _email;
    get firstName(): string;
    set firstName(firstName: string);
    get lastName(): string;
    set lastName(lastName: string);
    get phone(): string;
    set phone(phone: string);
    get email(): string;
    set email(email: string);
    loadClientData(firstName: string, lastName: string, phone: string, email: string): void;
}
