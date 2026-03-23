import { ResponseBodyBase } from "./ResponseBodyBase";

export interface ChangelogEntry {
    date: string;
    filename: string;
    content: string;
    downloadUrl: string;
}

export interface ChangelogResult {
    entries: ChangelogEntry[];
}

export class GetChangelogResponse extends ResponseBodyBase {
    private entries: ChangelogEntry[] = [];

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): GetChangelogResponse {
        const parsed = JSON.parse(jsonString);
        this.entries = parsed.entries || [];
        return this;
    }

    public getClientReturnValue(): ChangelogResult {
        return {
            entries: this.entries,
        };
    }
}
