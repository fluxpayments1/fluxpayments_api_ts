import { ResponseBodyBase } from "./ResponseBodyBase";

export class RollupReportResponse extends ResponseBodyBase {
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): RollupReportResponse {
        const parsed = JSON.parse(jsonString);
        this.message = parsed.message || 'Rollup reports generated';
        return this;
    }

    public getClientReturnValue(): { message: string } {
        return {
            message: this.message
        };
    }
}
