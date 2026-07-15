import { RequestBodyBase } from "./RequestBodyBase";

export class GetPartnerDashboardRequest extends RequestBodyBase {
    private range?: string;
    private probe?: boolean;

    constructor() { super(); }

    public loadClientData(range?: string, probe?: boolean): void {
        this.range = range;
        this.probe = probe;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ range: this.range, probe: this.probe });
    }
}
