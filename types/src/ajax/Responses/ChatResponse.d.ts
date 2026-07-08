import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class ChatResponse extends ResponseBodyBase {
    private content;
    private done;
    private conversationId;
    private title;
    private statusMessage;
    private toolName;
    private toolDetail;
    private toolOutput;
    private toolStatus;
    private interrupted;
    private messageId;
    private todoList;
    private pendingApproval;
    private previewData;
    private clarifyOptions;
    private clarifyQuestions;
    constructor();
    setResponseJSON(jsonString: string): ChatResponse;
    getClientReturnValue(): {
        content: string;
        done: boolean;
        conversationId: number;
        title: string;
        statusMessage?: string;
        toolName?: string;
        toolDetail?: string;
        toolOutput?: string;
        toolStatus?: string;
        interrupted?: boolean;
        messageId?: number;
        todoList?: string;
        pendingApproval?: boolean;
        previewData?: string;
        clarifyOptions?: string;
        clarifyQuestions?: string;
    };
}
