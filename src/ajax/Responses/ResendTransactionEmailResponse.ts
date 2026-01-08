import { ResponseBodyBase } from "./ResponseBodyBase";

export class ResendTransactionEmailResponse extends ResponseBodyBase {
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): ResendTransactionEmailResponse {
        const parsed = JSON.parse(jsonString);
        this.message = parsed.message || '';
        return this;
    }

    public getClientReturnValue(): { message: string } {
        return {
            message: this.message
        };
    }
}

