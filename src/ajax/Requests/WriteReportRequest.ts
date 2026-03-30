import { RequestBodyBase } from "./RequestBodyBase";

export class WriteReportRequest extends RequestBodyBase {
    private conversationId: number;

    constructor() {
        super();
    }

    public loadClientData(conversationId: number): void {
        this.conversationId = conversationId;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            conversationId: this.conversationId,
        });
    }
}
