import { RequestBodyBase } from "./RequestBodyBase";

export interface LookupCustomerByEmailParams {
    email: string;
}

export class LookupCustomerByEmailRequest extends RequestBodyBase {
    private email: string;

    constructor() {
        super();
    }

    public loadClientData(params: LookupCustomerByEmailParams): void {
        this.email = params.email;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ email: this.email });
    }
}
