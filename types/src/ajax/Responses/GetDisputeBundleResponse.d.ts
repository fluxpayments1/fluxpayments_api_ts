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
export declare class GetDisputeBundleResponse extends ResponseBodyBase {
    private downloadUrl?;
    private pdfBase64?;
    private filename;
    private sha256?;
    private sizeBytes?;
    private manifest;
    private message;
    constructor();
    setResponseJSON(jsonString: string): GetDisputeBundleResponse;
    getClientReturnValue(): GetDisputeBundleResult;
}
