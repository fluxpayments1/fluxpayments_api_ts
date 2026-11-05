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
export declare class EvidenceAttachmentResponse extends ResponseBodyBase {
    private uploadUrl?;
    private uploadKey?;
    private attachment?;
    private message;
    private scanning?;
    private retryAfterMs?;
    constructor();
    setResponseJSON(jsonString: string): EvidenceAttachmentResponse;
    getClientReturnValue(): EvidenceAttachmentResult;
}
