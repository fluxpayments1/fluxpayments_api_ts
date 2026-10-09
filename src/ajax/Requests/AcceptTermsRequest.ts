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

export class AcceptTermsRequest extends RequestBodyBase {
    private opts: AcceptTermsOpts | undefined;

    constructor() { super(); }

    public loadClientData(opts: AcceptTermsOpts) {
        this.opts = opts;
        return this;
    }

    public getRequestAsString(): string {
        const o = this.opts || ({} as AcceptTermsOpts);
        return JSON.stringify({
            agreed: !!o.agreed,
            scrolledToEnd: !!o.scrolledToEnd,
            signerName: o.signerName,
            signerTitle: o.signerTitle,
            signatureDataUrl: o.signatureDataUrl,
            agreementSha256: o.agreementSha256,
        });
    }
}
