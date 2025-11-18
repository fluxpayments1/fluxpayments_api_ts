import { RequestBodyBase } from "./RequestBodyBase";
export declare class ChatRequest extends RequestBodyBase {
    private message;
    private conversationId?;
    constructor();
    loadClientData(message: string, conversationId?: number): void;
    getRequestAsString(): string;
}
