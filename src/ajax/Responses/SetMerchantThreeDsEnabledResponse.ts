import { ResponseBodyBase } from "./ResponseBodyBase";

/** setMerchantThreeDsEnabledWeb: the merchant and its 3-D Secure switch as now stored. */
export interface SetMerchantThreeDsEnabledResult {
    ok: boolean;
    merchantId: number | null;
    /** The switch as stored after the call (true = 3-D Secure on). Off unless the server says true. */
    threeDsEnabled: boolean;
}

export class SetMerchantThreeDsEnabledResponse extends ResponseBodyBase {
    private result: SetMerchantThreeDsEnabledResult = { ok: false, merchantId: null, threeDsEnabled: false };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): SetMerchantThreeDsEnabledResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            ok: !!p.ok,
            merchantId: p.merchantId != null ? Number(p.merchantId) : null,
            threeDsEnabled: p.threeDsEnabled === true,
        };
        return this;
    }

    public getClientReturnValue(): SetMerchantThreeDsEnabledResult {
        return this.result;
    }
}
