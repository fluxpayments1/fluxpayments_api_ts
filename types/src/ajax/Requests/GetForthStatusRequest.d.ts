import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetForthStatusRequest extends RequestBodyBase {
    private page?;
    private pageSize?;
    /** Optional server-side client search. Blank/absent = unfiltered (byte-identical to the
     *  pre-search request, since JSON.stringify drops an undefined value). */
    private search?;
    constructor();
    loadClientData(page?: number, pageSize?: number, search?: string): void;
    getRequestAsString(): string;
}
