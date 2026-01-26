import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class ResendPaymentRequestResponse extends ResponseBodyBase {
    private message;
    constructor();
    setResponseJSON(jsonString: string): ResendPaymentRequestResponse;
    getClientReturnValue(): {
        message: string;
    };
}
