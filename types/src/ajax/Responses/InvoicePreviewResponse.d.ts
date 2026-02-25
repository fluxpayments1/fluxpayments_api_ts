import { ResponseBodyBase } from "./ResponseBodyBase";
export interface InvoicePreviewResult {
    html: string;
}
export declare class InvoicePreviewResponse extends ResponseBodyBase {
    private html;
    constructor();
    setResponseJSON(jsonString: string): InvoicePreviewResponse;
    getClientReturnValue(): InvoicePreviewResult;
}
