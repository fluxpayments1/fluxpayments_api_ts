import { ResponseBodyBase } from "./ResponseBodyBase";

export type ProcessForthChargeNowResult = {
    status: number;
    errorMsg?: string;
    /** REFUSED | SENT | NOT_CHARGED | CLEARED | IN_PROGRESS | UNKNOWN. A refusal is still HTTP 200. */
    outcome?: string;
    /** The sentence to show the rep. */
    message?: string;
};

export class ProcessForthChargeNowResponse extends ResponseBodyBase {
    private errorMsg?: string;
    private outcome?: string;
    private message?: string;

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ProcessForthChargeNowResponse {
        const p = JSON.parse(jsonString);
        if (typeof p.status === "number") this.status = p.status;
        this.errorMsg = p.errorMsg;
        this.outcome = p.outcome;
        this.message = p.message;
        return this;
    }

    public getClientReturnValue(): ProcessForthChargeNowResult {
        return {
            status: this.status,
            errorMsg: this.errorMsg,
            outcome: this.outcome,
            message: this.message,
        };
    }
}
