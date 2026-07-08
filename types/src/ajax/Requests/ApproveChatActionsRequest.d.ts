import { RequestBodyBase } from "./RequestBodyBase";
export interface ApproveChatActionsParams {
    messageId: number;
    /** true (default) = execute the proposal; false = dismiss it */
    approved?: boolean;
}
export declare class ApproveChatActionsRequest extends RequestBodyBase {
    private params;
    constructor();
    loadClientData(params: ApproveChatActionsParams): void;
    getRequestAsString(): string;
}
