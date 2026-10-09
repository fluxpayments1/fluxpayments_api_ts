import { ResponseBodyBase } from "./ResponseBodyBase";

export interface TermsStatusResult {
    /** True = the portal must show the agreement and block until it is accepted. */
    required: boolean;
    version: string | null;
    /** Present only when required: the hash of the markdown below, echoed back on accept. */
    agreementSha256: string | null;
    /** Present only when required. */
    agreementMarkdown: string | null;
    acceptedAt: string | number | null;
    acceptedBy: string | null;
    /** portal | onboarding | partner_act_as | unavailable | null */
    source: string | null;
}

/** Shared by getTermsStatus and acceptTerms — the server answers both with the same shape. */
export class GetTermsStatusResponse extends ResponseBodyBase {
    private result: TermsStatusResult = {
        required: false, version: null, agreementSha256: null, agreementMarkdown: null,
        acceptedAt: null, acceptedBy: null, source: null,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): GetTermsStatusResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            required: !!p.required,
            version: p.version ?? null,
            agreementSha256: p.agreementSha256 ?? null,
            agreementMarkdown: p.agreementMarkdown ?? null,
            acceptedAt: p.acceptedAt ?? null,
            acceptedBy: p.acceptedBy ?? null,
            source: p.source ?? null,
        };
        return this;
    }

    public getClientReturnValue(): TermsStatusResult { return this.result; }
}
