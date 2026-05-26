import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetForthStatusRequest extends RequestBodyBase {
    private page?;
    private pageSize?;
    constructor();
    loadClientData(page?: number, pageSize?: number): void;
    getRequestAsString(): string;
}
