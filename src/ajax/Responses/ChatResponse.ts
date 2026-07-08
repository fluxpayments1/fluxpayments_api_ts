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
    // Write-tool proposal fields (AI proposes → merchant approves → executes)
    private messageId: number;
    private todoList: string;
    private pendingApproval: boolean;
    private previewData: string;
    private clarifyOptions: string;  // JSON array of tappable clarify answers (legacy single-question shape)
    private clarifyQuestions: string;  // JSON array [{text, options[]}] — structured multi-question clarify

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
        this.messageId = parsed.messageId || null;
        this.todoList = parsed.todoList || null;
        this.pendingApproval = parsed.pendingApproval || false;
        this.previewData = parsed.previewData || null;
        this.clarifyOptions = parsed.clarifyOptions || null;
        this.clarifyQuestions = parsed.clarifyQuestions || null;
        return this;
    }

    public getClientReturnValue(): {
        content: string; done: boolean; conversationId: number; title: string;
        statusMessage?: string; toolName?: string; toolDetail?: string;
        toolOutput?: string; toolStatus?: string; interrupted?: boolean;
        messageId?: number; todoList?: string; pendingApproval?: boolean; previewData?: string; clarifyOptions?: string; clarifyQuestions?: string;
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
            interrupted: this.interrupted,
            messageId: this.messageId,
            todoList: this.todoList,
            pendingApproval: this.pendingApproval,
            previewData: this.previewData,
            clarifyOptions: this.clarifyOptions,
            clarifyQuestions: this.clarifyQuestions
        };
    }
}
