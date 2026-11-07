import { ResponseBodyBase } from "./ResponseBodyBase";
export type ProcessForthChargeNowResult = {
    status: number;
    errorMsg?: string;
    /** REFUSED | SENT | NOT_CHARGED | CLEARED | IN_PROGRESS | UNKNOWN. A refusal is still HTTP 200. */
    outcome?: string;
    /** The sentence to show the rep. */
    message?: string;
};
export declare class ProcessForthChargeNowResponse extends ResponseBodyBase {
    private errorMsg?;
    private outcome?;
    private message?;
    constructor();
    setResponseJSON(jsonString: string): ProcessForthChargeNowResponse;
    getClientReturnValue(): ProcessForthChargeNowResult;
}
