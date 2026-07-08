import { ResponseBodyBase } from "./ResponseBodyBase";
export interface ApproveChatActionsResult {
    messageId: number;
    /** Updated todo list JSON (statuses flipped to completed/cancelled) */
    todoList: string;
    /** JSON array of {id, type, name, url?} for the created records */
    createdObjects: string;
    /** Server-authored completion markdown (with flux: record links) */
    completionMessage: string;
}
export declare class ApproveChatActionsResponse extends ResponseBodyBase {
    private messageId;
    private todoList;
    private createdObjects;
    private completionMessage;
    constructor();
    setResponseJSON(jsonString: string): ApproveChatActionsResponse;
    getClientReturnValue(): ApproveChatActionsResult;
}
