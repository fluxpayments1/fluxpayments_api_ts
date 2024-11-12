import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class CreateSessionResponse extends ResponseBodyBase {
    _sessionId: string;
    get sessionId(): string;
    set sessionId(sessionId: string);
    getClientReturnValue(): CreateSessionResponse;
}
