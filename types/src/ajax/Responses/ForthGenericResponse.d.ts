import { ResponseBodyBase } from "./ResponseBodyBase";
/**
 * Generic response for Forth Pay action endpoints (disconnect, resend
 * intake, charge now, pause). They don't return a payload — just success
 * via the inherited `status` from ResponseBodyBase.
 */
export declare class ForthGenericResponse extends ResponseBodyBase {
    private errorMsg?;
    constructor();
    setResponseJSON(jsonString: string): ForthGenericResponse;
    getClientReturnValue(): {
        status: number;
        errorMsg?: string;
    };
}
