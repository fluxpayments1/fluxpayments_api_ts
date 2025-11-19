import { RequestBodyBase } from "./RequestBodyBase";
export declare class ChatRequest extends RequestBodyBase {
    private message;
    private conversationId?;
    private isSupportTicket?;
    constructor();
    loadClientData(message: string, conversationId?: number, isSupportTicket?: boolean): void;
    getRequestAsString(): string;
}
