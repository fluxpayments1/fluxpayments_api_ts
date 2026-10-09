import { RequestBodyBase } from "./RequestBodyBase";
export interface AcceptTermsOpts {
    /** Must be true. */
    agreed: boolean;
    /** Whether the scroll-to-end gate was satisfied before the box was ticked. */
    scrolledToEnd: boolean;
    signerName: string;
    signerTitle?: string;
    /** Canvas PNG as a data URL (`data:image/png;base64,...`). */
    signatureDataUrl: string;
    /** The hash the status call returned for the text that was rendered — the server refuses a mismatch. */
    agreementSha256: string;
}
export declare class AcceptTermsRequest extends RequestBodyBase {
    private opts;
    constructor();
    loadClientData(opts: AcceptTermsOpts): this;
    getRequestAsString(): string;
}
