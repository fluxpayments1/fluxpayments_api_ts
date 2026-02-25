import { ResponseBodyBase } from "./ResponseBodyBase";

export interface InvoicePreviewResult {
    html: string;
}

export class InvoicePreviewResponse extends ResponseBodyBase {
    private html: string;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): InvoicePreviewResponse {
        const parsed = JSON.parse(jsonString);
        this.html = parsed.html || '';
        return this;
    }

    public getClientReturnValue(): InvoicePreviewResult {
        return {
            html: this.html
        };
    }
}
