import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class SendInvoiceEmailResponse extends ResponseBodyBase {
    private message;
    constructor();
    setResponseJSON(jsonString: string): SendInvoiceEmailResponse;
    getClientReturnValue(): {
        message: string;
    };
}
