import { ResponseBodyBase } from "./ResponseBodyBase";
/** setMerchantAiEnabledWeb: the merchant and its AI switch as now stored. */
export interface SetMerchantAiEnabledResult {
    ok: boolean;
    merchantId: number | null;
    /** The switch as stored after the call (true = AI features on). */
    aiEnabled: boolean;
}
export declare class SetMerchantAiEnabledResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): SetMerchantAiEnabledResponse;
    getClientReturnValue(): SetMerchantAiEnabledResult;
}
