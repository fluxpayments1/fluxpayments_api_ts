import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetForthStatusRequest extends RequestBodyBase {
    private page?;
    private pageSize?;
    /** Optional server-side client search. Blank/absent = unfiltered (byte-identical to the
     *  pre-search request, since JSON.stringify drops an undefined value). */
    private search?;
    /** When true, the mapping list includes clients deleted in Forth — the Clients tab shows
     *  EVERY client ever discovered. Absent/false = the dashboard's active-only view. The
     *  headline counts stay active-only regardless. */
    private includeInactive?;
    constructor();
    loadClientData(page?: number, pageSize?: number, search?: string, includeInactive?: boolean): void;
    getRequestAsString(): string;
}
