import { ResponseBodyBase } from "./ResponseBodyBase";
/** setMerchantWalletsWeb: the merchant and both wallet switches as now stored. */
export interface SetMerchantWalletsResult {
    ok: boolean;
    merchantId: number | null;
    /** Off unless the server says true. */
    applePayEnabled: boolean;
    googlePayEnabled: boolean;
}
export declare class SetMerchantWalletsResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): SetMerchantWalletsResponse;
    getClientReturnValue(): SetMerchantWalletsResult;
}
