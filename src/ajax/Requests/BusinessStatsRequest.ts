import { RequestBodyBase } from "./RequestBodyBase";

export class BusinessStatsRequest extends RequestBodyBase {
    private businessId: number;

    constructor() {
        super();
    }

    public loadClientData(businessId: number): void {
        this.businessId = businessId;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            businessId: this.businessId
        });
    }
}
