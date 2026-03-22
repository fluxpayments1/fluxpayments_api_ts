import { RequestBodyBase } from "./RequestBodyBase";

export class GetLatestInsightsRequest extends RequestBodyBase {
    constructor() {
        super();
    }

    public loadClientData(): void {
        // No parameters needed — returns the latest insights for the authenticated merchant
    }

    public getRequestAsString(): string {
        return JSON.stringify({});
    }
}
