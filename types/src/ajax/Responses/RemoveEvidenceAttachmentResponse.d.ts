import { ResponseBodyBase } from "./ResponseBodyBase";
export interface RemoveEvidenceAttachmentResult {
    attachment: any;
    message: string;
}
export declare class RemoveEvidenceAttachmentResponse extends ResponseBodyBase {
    private attachment;
    private message;
    constructor();
    setResponseJSON(jsonString: string): RemoveEvidenceAttachmentResponse;
    getClientReturnValue(): RemoveEvidenceAttachmentResult;
}
