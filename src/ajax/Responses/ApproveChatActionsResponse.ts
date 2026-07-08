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

export class ApproveChatActionsResponse extends ResponseBodyBase {
    private messageId: number;
    private todoList: string;
    private createdObjects: string;
    private completionMessage: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): ApproveChatActionsResponse {
        const parsed = JSON.parse(jsonString);
        this.messageId = parsed.messageId || null;
        this.todoList = parsed.todoList || null;
        this.createdObjects = parsed.createdObjects || null;
        this.completionMessage = parsed.completionMessage || null;
        return this;
    }

    public getClientReturnValue(): ApproveChatActionsResult {
        return {
            messageId: this.messageId,
            todoList: this.todoList,
            createdObjects: this.createdObjects,
            completionMessage: this.completionMessage
        };
    }
}
