import { RequestBodyBase } from "./RequestBodyBase";

export interface ApproveChatActionsParams {
    messageId: number;
    /** true (default) = execute the proposal; false = dismiss it */
    approved?: boolean;
}

export class ApproveChatActionsRequest extends RequestBodyBase {
    private params: ApproveChatActionsParams;

    constructor() {
        super();
    }

    public loadClientData(params: ApproveChatActionsParams): void {
        this.params = params;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            messageId: this.params?.messageId,
            approved: this.params?.approved !== undefined ? this.params.approved : true
        });
    }
}
