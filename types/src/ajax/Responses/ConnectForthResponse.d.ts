import { ResponseBodyBase } from "./ResponseBodyBase";
import { MerchantForthCredentials } from "../../flux_types/MerchantForthCredentials";
export declare class ConnectForthResponse extends ResponseBodyBase {
    private credentials;
    constructor();
    setResponseJSON(jsonString: string): ConnectForthResponse;
    getClientReturnValue(): {
        credentials: MerchantForthCredentials | null;
    };
}
