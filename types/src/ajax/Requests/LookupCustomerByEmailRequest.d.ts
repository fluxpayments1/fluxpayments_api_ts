import { RequestBodyBase } from "./RequestBodyBase";
export interface LookupCustomerByEmailParams {
    email: string;
}
export declare class LookupCustomerByEmailRequest extends RequestBodyBase {
    private email;
    constructor();
    loadClientData(params: LookupCustomerByEmailParams): void;
    getRequestAsString(): string;
}
