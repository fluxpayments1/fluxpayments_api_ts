import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetPartnerDashboardRequest extends RequestBodyBase {
    private range?;
    private probe?;
    constructor();
    loadClientData(range?: string, probe?: boolean): void;
    getRequestAsString(): string;
}
