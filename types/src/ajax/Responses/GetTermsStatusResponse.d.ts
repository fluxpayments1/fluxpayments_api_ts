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
export declare class GetTermsStatusResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): GetTermsStatusResponse;
    getClientReturnValue(): TermsStatusResult;
}
