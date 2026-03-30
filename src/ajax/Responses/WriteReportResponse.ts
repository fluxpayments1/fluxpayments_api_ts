import { ResponseBodyBase } from "./ResponseBodyBase";

export class WriteReportResponse extends ResponseBodyBase {
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): WriteReportResponse {
        const parsed = JSON.parse(jsonString);
        this.message = parsed.message || 'Report saved';
        return this;
    }

    public getClientReturnValue(): { message: string } {
        return {
            message: this.message
        };
    }
}
