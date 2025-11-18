import { RequestBody } from "./RequestBody";
import { RequestBodyBase } from "./RequestBodyBase";

export class ChatRequest extends RequestBodyBase {
    private message: string;
    private conversationId?: number;

    constructor() {
        super();
    }

    public loadClientData(message: string, conversationId?: number): void {
        this.message = message;
        this.conversationId = conversationId;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            message: this.message,
            conversationId: this.conversationId,
        });
    }
}
