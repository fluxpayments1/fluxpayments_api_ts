import { RequestBodyBase } from "./RequestBodyBase";
export declare class BusinessStatsRequest extends RequestBodyBase {
    private businessId;
    constructor();
    loadClientData(businessId: number): void;
    getRequestAsString(): string;
}
