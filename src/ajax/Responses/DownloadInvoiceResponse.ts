import { ResponseBodyBase } from "./ResponseBodyBase";

export interface DownloadInvoiceResult {
    pdfBase64: string;
    filename: string;
    message: string;
}

export class DownloadInvoiceResponse extends ResponseBodyBase {
    private pdfBase64: string;
    private filename: string;
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): DownloadInvoiceResponse {
        const parsed = JSON.parse(jsonString);
        this.pdfBase64 = parsed.pdfBase64 || '';
        this.filename = parsed.filename || 'invoice.pdf';
        this.message = parsed.message || '';
        return this;
    }

    public getClientReturnValue(): DownloadInvoiceResult {
        return {
            pdfBase64: this.pdfBase64,
            filename: this.filename,
            message: this.message
        };
    }
}
