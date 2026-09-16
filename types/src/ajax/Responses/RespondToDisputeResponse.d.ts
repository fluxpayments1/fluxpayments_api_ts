import { ResponseBodyBase } from "./ResponseBodyBase";
export interface RespondToDisputeResult {
    /** The full persisted dispute, so callers re-render from server state. */
    dispute: any;
    message: string;
    /** Field-level "old -> new" lines for what actually changed. */
    changedFields: string[];
}
export declare class RespondToDisputeResponse extends ResponseBodyBase {
    private dispute;
    private message;
    private changedFields;
    constructor();
    setResponseJSON(jsonString: string): RespondToDisputeResponse;
    getClientReturnValue(): RespondToDisputeResult;
}
