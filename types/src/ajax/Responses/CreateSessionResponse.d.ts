import { GuestPaymentLink } from "../../flux_types";
import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class CreateSessionResponse extends ResponseBodyBase {
    _sessionId: string;
    _payLink: GuestPaymentLink;
    getSessionId(): string;
    setSessionId(sessionId: string): void;
    getClientReturnValue(): CreateSessionResponse;
}
