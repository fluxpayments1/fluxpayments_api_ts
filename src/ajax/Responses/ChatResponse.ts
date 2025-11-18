import { ResponseBody } from "./ResponseBody";
import { ResponseBodyBase } from "./ResponseBodyBase";

export class ChatResponse extends ResponseBodyBase {
    private content: string;
    private done: boolean;
    private conversationId: number;
    private title: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): ChatResponse {
        const parsed = JSON.parse(jsonString);
        this.content = parsed.content || parsed.responseText || parsed.message || '';
        this.done = parsed.done || false;
        this.conversationId = parsed.conversationId || null;
        this.title = parsed.title || null;
        return this;
    }

    public getClientReturnValue(): { content: string; done: boolean; conversationId: number; title: string } {
        return {
            content: this.content,
            done: this.done,
            conversationId: this.conversationId,
            title: this.title
        };
    }
}
