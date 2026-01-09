import { ResponseBodyBase } from "./ResponseBodyBase";

export class ResendPaymentRequestResponse extends ResponseBodyBase {
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): ResendPaymentRequestResponse {
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

