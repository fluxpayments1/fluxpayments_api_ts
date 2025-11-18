import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class ChatResponse extends ResponseBodyBase {
    private content;
    private done;
    private conversationId;
    private title;
    constructor();
    setResponseJSON(jsonString: string): ChatResponse;
    getClientReturnValue(): {
        content: string;
        done: boolean;
        conversationId: number;
        title: string;
    };
}
