import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class WriteReportResponse extends ResponseBodyBase {
    private message;
    constructor();
    setResponseJSON(jsonString: string): WriteReportResponse;
    getClientReturnValue(): {
        message: string;
    };
}
