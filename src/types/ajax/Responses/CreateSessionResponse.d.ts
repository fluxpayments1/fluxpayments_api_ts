import { ResponseBodyBase } from "./";
export declare class CreateSessionResponse extends ResponseBodyBase {
    _sessionId: String;
    get sessionId(): String;
    set sessionId(sessionId: String);
    getClientReturnValue(): String;
}
