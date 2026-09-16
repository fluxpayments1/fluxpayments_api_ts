import { ResponseBodyBase } from "./ResponseBodyBase";

export interface RemoveEvidenceAttachmentResult {
    attachment: any;
    message: string;
}

export class RemoveEvidenceAttachmentResponse extends ResponseBodyBase {
    private attachment: any;
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): RemoveEvidenceAttachmentResponse {
        const parsed = JSON.parse(jsonString);
        this.attachment = parsed.attachment || null;
        this.message = parsed.message || '';
        return this;
    }

    public getClientReturnValue(): RemoveEvidenceAttachmentResult {
        return { attachment: this.attachment, message: this.message };
    }
}
