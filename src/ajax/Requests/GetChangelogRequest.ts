import { RequestBodyBase } from "./RequestBodyBase";

export class GetChangelogRequest extends RequestBodyBase {
    constructor() {
        super();
    }

    public loadClientData(): void {
        // No parameters needed — returns the latest changelog entries
    }

    public getRequestAsString(): string {
        return JSON.stringify({});
    }
}
