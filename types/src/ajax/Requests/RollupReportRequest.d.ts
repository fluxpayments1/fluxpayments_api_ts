import { RequestBodyBase } from "./RequestBodyBase";
export declare class RollupReportRequest extends RequestBodyBase {
    private startDate;
    private endDate;
    constructor();
    loadClientData(startDate: string, endDate: string): void;
    getRequestAsString(): string;
}
