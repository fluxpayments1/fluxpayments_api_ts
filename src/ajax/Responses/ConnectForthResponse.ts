import { ResponseBodyBase } from "./ResponseBodyBase";
import { MerchantForthCredentials } from "../../flux_types/MerchantForthCredentials";

export class ConnectForthResponse extends ResponseBodyBase {
    private credentials: MerchantForthCredentials | null = null;

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ConnectForthResponse {
        const parsed = JSON.parse(jsonString);
        this.credentials = parsed.credentials ? new MerchantForthCredentials(parsed.credentials) : null;
        return this;
    }

    public getClientReturnValue(): { credentials: MerchantForthCredentials | null } {
        return { credentials: this.credentials };
    }
}
