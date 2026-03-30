import { RequestBodyBase } from "./RequestBodyBase";
export declare class WriteReportRequest extends RequestBodyBase {
    private conversationId;
    constructor();
    loadClientData(conversationId: number): void;
    getRequestAsString(): string;
}
