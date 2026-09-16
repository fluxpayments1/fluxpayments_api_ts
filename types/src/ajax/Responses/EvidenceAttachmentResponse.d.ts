import { ResponseBodyBase } from "./ResponseBodyBase";
export interface EvidenceAttachmentResult {
    /** presign: where to PUT the bytes. Short-lived. */
    uploadUrl?: string;
    /** presign: send this back on confirm. */
    uploadKey?: string;
    /** confirm: the persisted attachment row. */
    attachment?: any;
    message: string;
}
export declare class EvidenceAttachmentResponse extends ResponseBodyBase {
    private uploadUrl?;
    private uploadKey?;
    private attachment?;
    private message;
    constructor();
    setResponseJSON(jsonString: string): EvidenceAttachmentResponse;
    getClientReturnValue(): EvidenceAttachmentResult;
}
