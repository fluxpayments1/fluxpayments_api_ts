import { GuestPaymentLink } from "../../flux_types";
import { ResponseBodyBase    } from "./ResponseBodyBase";


export class CreateSessionResponse extends ResponseBodyBase {
    
    _payLink: GuestPaymentLink

    public getClientReturnValue(): GuestPaymentLink {
        return this._payLink;
    }

}