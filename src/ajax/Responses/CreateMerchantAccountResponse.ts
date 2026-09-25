import { ResponseBodyBase } from "./ResponseBodyBase";

export interface CreateMerchantAccountResult {
    merchantId: number | null;
    macId: number | null;
    email: string | null;
    businessName: string | null;
    /** Whether the set-your-password invite was actually sent. The merchant exists either way. */
    inviteEmailSent: boolean;
    /**
     * Which acknowledgement the create is waiting on, as a STABLE CODE, or
     * null when nothing needs confirming. Arrives on a 200 because a non-2xx
     * makes the transport throw the raw body; nothing was created either way.
     */
    confirmRequired: 'ROUNDING' | 'P12_UNVERIFIED' | null;
    /** The question to show, verbatim. */
    confirmMessage: string | null;
}

export class CreateMerchantAccountResponse extends ResponseBodyBase {
    private result: CreateMerchantAccountResult = {
        merchantId: null, macId: null, email: null, businessName: null,
        inviteEmailSent: false, confirmRequired: null, confirmMessage: null,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): CreateMerchantAccountResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            merchantId: p.merchantId ?? null,
            macId: p.macId ?? null,
            email: p.email ?? null,
            businessName: p.businessName ?? null,
            inviteEmailSent: !!p.inviteEmailSent,
            confirmRequired: p.confirmRequired ?? null,
            confirmMessage: p.confirmMessage ?? null,
        };
        return this;
    }

    public getClientReturnValue(): CreateMerchantAccountResult {
        return this.result;
    }
}
