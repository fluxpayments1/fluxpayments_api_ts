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

export class PruneClarifyRequest extends RequestBodyBase {
    private params: PruneClarifyParams;

    constructor() {
        super();
    }

    public loadClientData(params: PruneClarifyParams): void {
        this.params = params;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            originalRequest: this.params?.originalRequest,
            answersText: this.params?.answersText,
            questions: this.params?.questions?.map(q => ({
                index: q.index,
                text: q.text,
                options: q.options
            }))
        });
    }
}
