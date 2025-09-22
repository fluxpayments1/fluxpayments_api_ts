import { GuestPaymentLink } from "../../flux_types";
import { ResponseBodyBase    } from "./ResponseBodyBase";


export class CreateSessionResponse extends ResponseBodyBase {
    _sessionId: string;
    _payLink: GuestPaymentLink

    public getSessionId(): string {
        return this._sessionId;
    }

    public setSessionId(sessionId: string) {
        this._sessionId = sessionId;
    }

    public getClientReturnValue(): CreateSessionResponse {
        return this;
    }


}