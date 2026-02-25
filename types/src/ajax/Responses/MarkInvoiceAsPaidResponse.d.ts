import { ResponseBodyBase } from "./ResponseBodyBase";
export interface MarkInvoiceAsPaidResult {
    transaction: any;
    message: string;
}
export declare class MarkInvoiceAsPaidResponse extends ResponseBodyBase {
    private transaction;
    private message;
    constructor();
    setResponseJSON(jsonString: string): MarkInvoiceAsPaidResponse;
    getClientReturnValue(): MarkInvoiceAsPaidResult;
}
