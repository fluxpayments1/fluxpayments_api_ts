import { RequestBodyBase } from "./RequestBodyBase";

export class RollupReportRequest extends RequestBodyBase {
    private startDate: string;
    private endDate: string;

    constructor() {
        super();
    }

    public loadClientData(startDate: string, endDate: string): void {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            startDate: this.startDate,
            endDate: this.endDate,
        });
    }
}
