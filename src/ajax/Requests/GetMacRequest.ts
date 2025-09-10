
import { MerchantAccessCredentialsQuery } from "../../flux_types/MerchantAccessCredentialsQuery";
import { RequestBodyBase } from "./RequestBodyBase";

export class GetMacRequest extends RequestBodyBase {
    _lookupPage: string
    public loadClientData(arg: MerchantAccessCredentialsQuery): void {
        this._lookupPage = arg.lookupPage
    }

    constructor() {
        super();
    }
}
