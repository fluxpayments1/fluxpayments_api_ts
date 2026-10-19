import { ResponseBodyBase } from "./ResponseBodyBase";

/** setMerchantAiEnabledWeb: the merchant and its AI switch as now stored. */
export interface SetMerchantAiEnabledResult {
    ok: boolean;
    merchantId: number | null;
    /** The switch as stored after the call (true = AI features on). */
    aiEnabled: boolean;
}

export class SetMerchantAiEnabledResponse extends ResponseBodyBase {
    private result: SetMerchantAiEnabledResult = { ok: false, merchantId: null, aiEnabled: true };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): SetMerchantAiEnabledResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            ok: !!p.ok,
            merchantId: p.merchantId != null ? Number(p.merchantId) : null,
            aiEnabled: p.aiEnabled !== false,
        };
        return this;
    }

    public getClientReturnValue(): SetMerchantAiEnabledResult {
        return this.result;
    }
}
