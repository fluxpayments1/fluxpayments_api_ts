import { GuestPaymentLink } from "../../flux_types";
import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class CreateSessionResponse extends ResponseBodyBase {
    _payLink: GuestPaymentLink;
    getClientReturnValue(): GuestPaymentLink;
}
