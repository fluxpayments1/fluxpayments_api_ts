import { ResponseBodyBase } from "./ResponseBodyBase";
export interface BusinessStatsResult {
    customerCount: number;
    invoiceCount: number;
    transactionCount: number;
    transactionVolume: number;
}
export declare class BusinessStatsResponse extends ResponseBodyBase {
    private customerCount;
    private invoiceCount;
    private transactionCount;
    private transactionVolume;
    constructor();
    setResponseJSON(jsonString: string): BusinessStatsResponse;
    getClientReturnValue(): BusinessStatsResult;
}
