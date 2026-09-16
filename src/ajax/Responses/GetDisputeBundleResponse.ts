import { ResponseBodyBase } from "./ResponseBodyBase";

export interface GetDisputeBundleResult {
    /** Preferred: a short-lived signed URL. */
    downloadUrl?: string;
    /** Fallback when the evidence store cannot be signed. */
    pdfBase64?: string;
    filename: string;
    /** SHA-256 of the assembled bytes, so the merchant can verify what they sent. */
    sha256?: string;
    sizeBytes?: number;
    /** Per-source outcomes, including anything that could not be embedded. */
    manifest: string[];
    message: string;
}

export class GetDisputeBundleResponse extends ResponseBodyBase {
    private downloadUrl?: string;
    private pdfBase64?: string;
    private filename: string;
    private sha256?: string;
    private sizeBytes?: number;
    private manifest: string[];
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): GetDisputeBundleResponse {
        const parsed = JSON.parse(jsonString);
        this.downloadUrl = parsed.downloadUrl || undefined;
        this.pdfBase64 = parsed.pdfBase64 || undefined;
        this.filename = parsed.filename || 'dispute-response.pdf';
        this.sha256 = parsed.sha256 || undefined;
        this.sizeBytes = parsed.sizeBytes || undefined;
        this.manifest = Array.isArray(parsed.manifest) ? parsed.manifest : [];
        this.message = parsed.message || '';
        return this;
    }

    public getClientReturnValue(): GetDisputeBundleResult {
        return {
            downloadUrl: this.downloadUrl,
            pdfBase64: this.pdfBase64,
            filename: this.filename,
            sha256: this.sha256,
            sizeBytes: this.sizeBytes,
            manifest: this.manifest,
            message: this.message
        };
    }
}
