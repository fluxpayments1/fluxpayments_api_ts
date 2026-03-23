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
export declare class GetChangelogResponse extends ResponseBodyBase {
    private entries;
    constructor();
    setResponseJSON(jsonString: string): GetChangelogResponse;
    getClientReturnValue(): ChangelogResult;
}
