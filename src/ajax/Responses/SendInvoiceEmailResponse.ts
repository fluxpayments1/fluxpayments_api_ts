import { ResponseBodyBase } from "./ResponseBodyBase";

export class SendInvoiceEmailResponse extends ResponseBodyBase {
    private message: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): SendInvoiceEmailResponse {
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

