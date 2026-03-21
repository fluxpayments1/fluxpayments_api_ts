import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class RollupReportResponse extends ResponseBodyBase {
    private message;
    constructor();
    setResponseJSON(jsonString: string): RollupReportResponse;
    getClientReturnValue(): {
        message: string;
    };
}
