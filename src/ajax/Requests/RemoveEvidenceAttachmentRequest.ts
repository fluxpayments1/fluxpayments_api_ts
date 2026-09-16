import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Detach one merchant-uploaded evidence file (DESIGN 7.4).
 *
 * A REMOVAL, not a deletion: the server stamps `removedAt` so the file drops out
 * of the response bundle, while the row, the stored object and the custody entry
 * for the original upload all remain. An evidence set a merchant can make files
 * silently disappear from is not a chain of custody.
 */
export interface RemoveEvidenceAttachmentParams {
    attachmentId: number;
    /** Optional note recorded on the custody entry. */
    reason?: string;
}

export class RemoveEvidenceAttachmentRequest extends RequestBodyBase {
    private attachmentId: number;
    private reason?: string;

    constructor() {
        super();
    }

    public loadClientData(params: RemoveEvidenceAttachmentParams): void {
        this.attachmentId = params.attachmentId;
        this.reason = params.reason;
    }

    public getRequestAsString(): string {
        const data: any = { attachmentId: this.attachmentId };
        if (this.reason !== undefined && this.reason !== null) data.reason = this.reason;
        return JSON.stringify(data);
    }
}
