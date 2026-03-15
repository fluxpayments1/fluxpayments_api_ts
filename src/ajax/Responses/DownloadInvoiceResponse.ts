import { ResponseBodyBase } from "./ResponseBodyBase";

export interface DownloadInvoiceResult {
    downloadUrl?: string;  // Presigned URL for direct download (preferred)
    pdfBase64?: string;    // Base64 encoded PDF - fallback for legacy records
    filename: string;
    message: string;
    compressed?: boolean;  // Only relevant for pdfBase64 fallback
}

export class DownloadInvoiceResponse extends ResponseBodyBase {
    private downloadUrl?: string;
    private pdfBase64?: string;
    private filename: string;
    private message: string;
    private compressed?: boolean;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): DownloadInvoiceResponse {
        const parsed = JSON.parse(jsonString);
        this.downloadUrl = parsed.downloadUrl;
        this.pdfBase64 = parsed.pdfBase64;
        this.filename = parsed.filename || 'invoice.pdf';
        this.message = parsed.message || '';
        this.compressed = parsed.compressed;
        return this;
    }

    public getClientReturnValue(): DownloadInvoiceResult {
        return {
            downloadUrl: this.downloadUrl,
            pdfBase64: this.pdfBase64,
            filename: this.filename,
            message: this.message,
            compressed: this.compressed
        };
    }
}
