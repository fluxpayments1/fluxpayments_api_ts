import { ResponseBodyBase } from "./ResponseBodyBase";
/** setMerchantThreeDsEnabledWeb: the merchant and its 3-D Secure switch as now stored. */
export interface SetMerchantThreeDsEnabledResult {
    ok: boolean;
    merchantId: number | null;
    /** The switch as stored after the call (true = 3-D Secure on). Off unless the server says true. */
    threeDsEnabled: boolean;
}
export declare class SetMerchantThreeDsEnabledResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): SetMerchantThreeDsEnabledResponse;
    getClientReturnValue(): SetMerchantThreeDsEnabledResult;
}
