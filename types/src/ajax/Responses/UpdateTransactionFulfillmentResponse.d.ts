import { ResponseBodyBase } from "./ResponseBodyBase";
export interface UpdateTransactionFulfillmentResult {
    /** The full persisted transaction, so callers re-render from server state. */
    transaction: any;
    message: string;
    /** "field: old -> new" lines for what actually changed (may be empty). */
    changedFields: string[];
}
export declare class UpdateTransactionFulfillmentResponse extends ResponseBodyBase {
    private transaction;
    private message;
    private changedFields;
    constructor();
    setResponseJSON(jsonString: string): UpdateTransactionFulfillmentResponse;
    getClientReturnValue(): UpdateTransactionFulfillmentResult;
}
