import { ResponseBodyBase } from "./ResponseBodyBase";

export interface DownloadInvoiceResult {
    pdfBase64: string;
    filename: string;
    message: string;
    compressed: boolean;
}

export class DownloadInvoiceResponse extends ResponseBodyBase {
    private pdfBase64: string;
    private filename: string;
    private message: string;
    private compressed: boolean;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): DownloadInvoiceResponse {
        const parsed = JSON.parse(jsonString);
        this.pdfBase64 = parsed.pdfBase64 || '';
        this.filename = parsed.filename || 'invoice.pdf';
        this.message = parsed.message || '';
        this.compressed = parsed.compressed || false;
        return this;
    }

    public getClientReturnValue(): DownloadInvoiceResult {
        return {
            pdfBase64: this.pdfBase64,
            filename: this.filename,
            message: this.message,
            compressed: this.compressed
        };
    }
}
