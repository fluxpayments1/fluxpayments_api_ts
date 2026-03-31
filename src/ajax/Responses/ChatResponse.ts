import { ResponseBody } from "./ResponseBody";
import { ResponseBodyBase } from "./ResponseBodyBase";

export class ChatResponse extends ResponseBodyBase {
    private content: string;
    private done: boolean;
    private conversationId: number;
    private title: string;
    private statusMessage: string;
    private toolName: string;
    private toolDetail: string;
    private toolOutput: string;
    private toolStatus: string;
    private interrupted: boolean;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): ChatResponse {
        const parsed = JSON.parse(jsonString);
        this.content = parsed.content || parsed.responseText || parsed.message || '';
        this.done = parsed.done || false;
        this.conversationId = parsed.conversationId || null;
        this.title = parsed.title || null;
        this.statusMessage = parsed.statusMessage || null;
        this.toolName = parsed.toolName || null;
        this.toolDetail = parsed.toolDetail || null;
        this.toolOutput = parsed.toolOutput || null;
        this.toolStatus = parsed.toolStatus || null;
        this.interrupted = parsed.interrupted || false;
        return this;
    }

    public getClientReturnValue(): {
        content: string; done: boolean; conversationId: number; title: string;
        statusMessage?: string; toolName?: string; toolDetail?: string;
        toolOutput?: string; toolStatus?: string; interrupted?: boolean;
    } {
        return {
            content: this.content,
            done: this.done,
            conversationId: this.conversationId,
            title: this.title,
            statusMessage: this.statusMessage,
            toolName: this.toolName,
            toolDetail: this.toolDetail,
            toolOutput: this.toolOutput,
            toolStatus: this.toolStatus,
            interrupted: this.interrupted
        };
    }
}
