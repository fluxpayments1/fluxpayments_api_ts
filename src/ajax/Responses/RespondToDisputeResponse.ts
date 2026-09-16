import { ResponseBodyBase } from "./ResponseBodyBase";

export interface RespondToDisputeResult {
    /** The full persisted dispute, so callers re-render from server state. */
    dispute: any;
    message: string;
    /** Field-level "old -> new" lines for what actually changed. */
    changedFields: string[];
}

export class RespondToDisputeResponse extends ResponseBodyBase {
    private dispute: any;
    private message: string;
    private changedFields: string[];

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): RespondToDisputeResponse {
        const parsed = JSON.parse(jsonString);
        this.dispute = parsed.dispute || null;
        this.message = parsed.message || '';
        this.changedFields = Array.isArray(parsed.changedFields) ? parsed.changedFields : [];
        return this;
    }

    public getClientReturnValue(): RespondToDisputeResult {
        return {
            dispute: this.dispute,
            message: this.message,
            changedFields: this.changedFields
        };
    }
}
