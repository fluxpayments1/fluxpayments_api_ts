import { ResponseBodyBase } from "./ResponseBodyBase";

export interface EvidenceAttachmentResult {
    /** presign: where to PUT the bytes. Short-lived. */
    uploadUrl?: string;
    /** presign: send this back on confirm. */
    uploadKey?: string;
    /** confirm: the persisted attachment row. */
    attachment?: any;
    message: string;
    /** confirm: still being scanned; ask again after retryAfterMs. */
    scanning?: boolean;
    retryAfterMs?: number;
}

export class EvidenceAttachmentResponse extends ResponseBodyBase {
    private uploadUrl?: string;
    private uploadKey?: string;
    private attachment?: any;
    private message: string;
    private scanning?: boolean;
    private retryAfterMs?: number;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): EvidenceAttachmentResponse {
        const parsed = JSON.parse(jsonString);
        this.uploadUrl = parsed.uploadUrl || undefined;
        this.uploadKey = parsed.uploadKey || undefined;
        this.attachment = parsed.attachment || undefined;
        this.message = parsed.message || '';
        this.scanning = parsed.scanning === true;
        this.retryAfterMs = parsed.retryAfterMs || undefined;
        return this;
    }

    public getClientReturnValue(): EvidenceAttachmentResult {
        return {
            uploadUrl: this.uploadUrl,
            uploadKey: this.uploadKey,
            attachment: this.attachment,
            message: this.message,
            scanning: this.scanning,
            retryAfterMs: this.retryAfterMs
        };
    }
}
