import { ResponseBodyBase } from "./ResponseBodyBase";

export interface PrunedAnswer {
    /** 1-based index in the ORIGINAL question numbering. */
    index: number;
    value: string;
}

export interface PruneClarifyResult {
    answered: PrunedAnswer[];
}

export class PruneClarifyResponse extends ResponseBodyBase {
    private answered: PrunedAnswer[] = [];

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): PruneClarifyResponse {
        const parsed = JSON.parse(jsonString);
        this.answered = Array.isArray(parsed.answered)
            ? parsed.answered
                .filter((a: any) => a && typeof a.index === 'number' && typeof a.value === 'string')
                .map((a: any) => ({ index: a.index, value: a.value }))
            : [];
        return this;
    }

    public getClientReturnValue(): PruneClarifyResult {
        return { answered: this.answered };
    }
}
