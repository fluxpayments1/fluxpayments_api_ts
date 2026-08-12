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
export declare class SendForthCardIntakeResponse extends ResponseBodyBase {
    private errorMsg?;
    private paymentLinkId?;
    private paymentLink?;
    private intakeUrl?;
    constructor();
    setResponseJSON(jsonString: string): SendForthCardIntakeResponse;
    getClientReturnValue(): SendForthCardIntakeResult;
}
