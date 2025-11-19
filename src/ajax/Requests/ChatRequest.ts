import { RequestBody } from "./RequestBody";
import { RequestBodyBase } from "./RequestBodyBase";

export class ChatRequest extends RequestBodyBase {
    private message: string;
    private conversationId?: number;
    private isSupportTicket?: boolean;

    constructor() {
        super();
    }

    public loadClientData(message: string, conversationId?: number, isSupportTicket?: boolean): void {
        this.message = message;
        this.conversationId = conversationId;
        this.isSupportTicket = isSupportTicket;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            message: this.message,
            conversationId: this.conversationId,
            isSupportTicket: this.isSupportTicket,
        });
    }
}
