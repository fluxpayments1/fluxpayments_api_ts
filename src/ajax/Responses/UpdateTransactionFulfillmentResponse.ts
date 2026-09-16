import { ResponseBodyBase } from "./ResponseBodyBase";

export interface UpdateTransactionFulfillmentResult {
    /** The full persisted transaction, so callers re-render from server state. */
    transaction: any;
    message: string;
    /** "field: old -> new" lines for what actually changed (may be empty). */
    changedFields: string[];
}

export class UpdateTransactionFulfillmentResponse extends ResponseBodyBase {
    private transaction: any;
    private message: string;
    private changedFields: string[];

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): UpdateTransactionFulfillmentResponse {
        const parsed = JSON.parse(jsonString);
        this.transaction = parsed.transaction || null;
        this.message = parsed.message || '';
        this.changedFields = Array.isArray(parsed.changedFields) ? parsed.changedFields : [];
        return this;
    }

    public getClientReturnValue(): UpdateTransactionFulfillmentResult {
        return {
            transaction: this.transaction,
            message: this.message,
            changedFields: this.changedFields
        };
    }
}
