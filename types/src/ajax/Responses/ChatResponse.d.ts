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
    };
}
