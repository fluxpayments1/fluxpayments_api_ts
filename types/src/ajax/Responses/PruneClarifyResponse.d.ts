import { ResponseBodyBase } from "./ResponseBodyBase";
export interface PrunedAnswer {
    /** 1-based index in the ORIGINAL question numbering. */
    index: number;
    value: string;
}
export interface PruneClarifyResult {
    answered: PrunedAnswer[];
}
export declare class PruneClarifyResponse extends ResponseBodyBase {
    private answered;
    constructor();
    setResponseJSON(jsonString: string): PruneClarifyResponse;
    getClientReturnValue(): PruneClarifyResult;
}
