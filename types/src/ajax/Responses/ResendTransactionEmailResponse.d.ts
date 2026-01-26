import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class ResendTransactionEmailResponse extends ResponseBodyBase {
    private message;
    constructor();
    setResponseJSON(jsonString: string): ResendTransactionEmailResponse;
    getClientReturnValue(): {
        message: string;
    };
}
