import { MerchantAccessCredentialsQuery } from "../../flux_types/MerchantAccessCredentialsQuery";
import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetMacRequest extends RequestBodyBase {
    _lookupPage: string;
    loadClientData(arg: MerchantAccessCredentialsQuery): void;
    constructor();
}
