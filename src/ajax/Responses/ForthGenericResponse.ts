import { ResponseBodyBase } from "./ResponseBodyBase";

/**
 * Generic response for Forth Pay action endpoints (disconnect, resend
 * intake, charge now, pause). They don't return a payload — just success
 * via the inherited `status` from ResponseBodyBase.
 */
export class ForthGenericResponse extends ResponseBodyBase {
    private errorMsg?: string;

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ForthGenericResponse {
        const p = JSON.parse(jsonString);
        if (typeof p.status === "number") this.status = p.status;
        this.errorMsg = p.errorMsg;
        return this;
    }

    public getClientReturnValue(): { status: number; errorMsg?: string } {
        return { status: this.status, errorMsg: this.errorMsg };
    }
}
