import { ResponseBodyBase } from "./ResponseBodyBase";
export interface LookupCustomerByEmailResult {
    found: boolean;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
}
export declare class LookupCustomerByEmailResponse extends ResponseBodyBase {
    private found;
    private firstName?;
    private lastName?;
    private phoneNumber?;
    constructor();
    setResponseJSON(jsonString: string): LookupCustomerByEmailResponse;
    getClientReturnValue(): LookupCustomerByEmailResult;
}
