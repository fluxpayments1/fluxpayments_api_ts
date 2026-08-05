import { ResponseBodyBase } from "./ResponseBodyBase";

export type SendForthCardIntakeResult = {
    status: number;
    errorMsg?: string;
    paymentLinkId?: number;
    paymentLink?: string;
    /**
     * Full customer-facing URL for the new card form. The backend also posts
     * this to the Forth contact's Notes, but that call is best-effort — if
     * Forth is unreachable nothing else delivers the link (the intake email is
     * deliberately suppressed for Forth payment links), so show it to the rep.
     */
    intakeUrl?: string;
};

export class SendForthCardIntakeResponse extends ResponseBodyBase {
    private errorMsg?: string;
    private paymentLinkId?: number;
    private paymentLink?: string;
    private intakeUrl?: string;

    constructor() { super(); }

    public setResponseJSON(jsonString: string): SendForthCardIntakeResponse {
        const p = JSON.parse(jsonString);
        if (typeof p.status === "number") this.status = p.status;
        this.errorMsg = p.errorMsg;
        this.paymentLinkId = p.paymentLinkId;
        this.paymentLink = p.paymentLink;
        this.intakeUrl = p.intakeUrl;
        return this;
    }

    public getClientReturnValue(): SendForthCardIntakeResult {
        return {
            status: this.status,
            errorMsg: this.errorMsg,
            paymentLinkId: this.paymentLinkId,
            paymentLink: this.paymentLink,
            intakeUrl: this.intakeUrl,
        };
    }
}
