import { RequestBodyBase } from "./RequestBodyBase";
export interface PruneQuestion {
    /** 1-based index in the ORIGINAL question numbering. */
    index: number;
    text: string;
    /** Choice questions: a pruned answer must be one of these verbatim. */
    options?: string[];
}
export interface PruneClarifyParams {
    /** The merchant message that triggered the clarify round. */
    originalRequest?: string;
    /** Numbered answers the merchant has given so far in the wizard. */
    answersText: string;
    /** The questions still unanswered. */
    questions: PruneQuestion[];
}
export declare class PruneClarifyRequest extends RequestBodyBase {
    private params;
    constructor();
    loadClientData(params: PruneClarifyParams): void;
    getRequestAsString(): string;
}
