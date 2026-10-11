import { RequestBodyBase } from "./RequestBodyBase";

export class GetForthStatusRequest extends RequestBodyBase {
    private page?: number;
    private pageSize?: number;
    /** Optional server-side client search. Blank/absent = unfiltered (byte-identical to the
     *  pre-search request, since JSON.stringify drops an undefined value). */
    private search?: string;
    /** When true, the mapping list includes clients deleted in Forth — the Clients tab shows
     *  EVERY client ever discovered. Absent/false = the dashboard's active-only view. The
     *  headline counts stay active-only regardless. */
    private includeInactive?: boolean;

    constructor() { super(); }

    public loadClientData(page?: number, pageSize?: number, search?: string, includeInactive?: boolean): void {
        this.page = page;
        this.pageSize = pageSize;
        this.search = search;
        this.includeInactive = includeInactive;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ page: this.page, pageSize: this.pageSize, search: this.search, includeInactive: this.includeInactive });
    }
}
