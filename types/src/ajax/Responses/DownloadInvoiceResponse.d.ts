import { ResponseBodyBase } from "./ResponseBodyBase";
export interface DownloadInvoiceResult {
    downloadUrl?: string;
    pdfBase64?: string;
    filename: string;
    message: string;
    compressed?: boolean;
}
export declare class DownloadInvoiceResponse extends ResponseBodyBase {
    private downloadUrl?;
    private pdfBase64?;
    private filename;
    private message;
    private compressed?;
    constructor();
    setResponseJSON(jsonString: string): DownloadInvoiceResponse;
    getClientReturnValue(): DownloadInvoiceResult;
}
