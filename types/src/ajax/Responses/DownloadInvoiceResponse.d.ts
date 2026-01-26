import { ResponseBodyBase } from "./ResponseBodyBase";
export interface DownloadInvoiceResult {
    pdfBase64: string;
    filename: string;
    message: string;
}
export declare class DownloadInvoiceResponse extends ResponseBodyBase {
    private pdfBase64;
    private filename;
    private message;
    constructor();
    setResponseJSON(jsonString: string): DownloadInvoiceResponse;
    getClientReturnValue(): DownloadInvoiceResult;
}
