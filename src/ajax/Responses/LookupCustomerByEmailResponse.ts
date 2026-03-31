import { ResponseBodyBase } from "./ResponseBodyBase";

export interface LookupCustomerByEmailResult {
    found: boolean;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
}

export class LookupCustomerByEmailResponse extends ResponseBodyBase {
    private found: boolean;
    private firstName?: string;
    private lastName?: string;
    private phoneNumber?: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): LookupCustomerByEmailResponse {
        const parsed = JSON.parse(jsonString);
        this.found = parsed.found || false;
        this.firstName = parsed.firstName || null;
        this.lastName = parsed.lastName || null;
        this.phoneNumber = parsed.phoneNumber || null;
        return this;
    }

    public getClientReturnValue(): LookupCustomerByEmailResult {
        return {
            found: this.found,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
        };
    }
}
