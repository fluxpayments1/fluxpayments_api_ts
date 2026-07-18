import { ResponseBodyBase } from "./ResponseBodyBase";

export interface BusinessStatsResult {
    customerCount: number;
    invoiceCount: number;
    transactionCount: number;
    transactionVolume: number;
}

export class BusinessStatsResponse extends ResponseBodyBase {
    private customerCount: number;
    private invoiceCount: number;
    private transactionCount: number;
    private transactionVolume: number;

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): BusinessStatsResponse {
        const parsed = JSON.parse(jsonString);
        this.customerCount = Number(parsed.customerCount) || 0;
        this.invoiceCount = Number(parsed.invoiceCount) || 0;
        this.transactionCount = Number(parsed.transactionCount) || 0;
        this.transactionVolume = Number(parsed.transactionVolume) || 0;
        return this;
    }

    public getClientReturnValue(): BusinessStatsResult {
        return {
            customerCount: this.customerCount,
            invoiceCount: this.invoiceCount,
            transactionCount: this.transactionCount,
            transactionVolume: this.transactionVolume
        };
    }
}
