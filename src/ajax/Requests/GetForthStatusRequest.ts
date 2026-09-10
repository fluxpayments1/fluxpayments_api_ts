import { RequestBodyBase } from "./RequestBodyBase";

export class GetForthStatusRequest extends RequestBodyBase {
    private page?: number;
    private pageSize?: number;
    /** Optional server-side client search. Blank/absent = unfiltered (byte-identical to the
     *  pre-search request, since JSON.stringify drops an undefined value). */
    private search?: string;

    constructor() { super(); }

    public loadClientData(page?: number, pageSize?: number, search?: string): void {
        this.page = page;
        this.pageSize = pageSize;
        this.search = search;
    }

    public getRequestAsString(): string {
        return JSON.stringify({ page: this.page, pageSize: this.pageSize, search: this.search });
    }
}
