import { ResponseBodyBase } from "./ResponseBodyBase";

/** setMerchantWalletsWeb: the merchant and both wallet switches as now stored. */
export interface SetMerchantWalletsResult {
    ok: boolean;
    merchantId: number | null;
    /** Off unless the server says true. */
    applePayEnabled: boolean;
    googlePayEnabled: boolean;
}

export class SetMerchantWalletsResponse extends ResponseBodyBase {
    private result: SetMerchantWalletsResult = { ok: false, merchantId: null, applePayEnabled: false, googlePayEnabled: false };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): SetMerchantWalletsResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            ok: !!p.ok,
            merchantId: p.merchantId != null ? Number(p.merchantId) : null,
            applePayEnabled: p.applePayEnabled === true,
            googlePayEnabled: p.googlePayEnabled === true,
        };
        return this;
    }

    public getClientReturnValue(): SetMerchantWalletsResult {
        return this.result;
    }
}
