import { RequestBodyBase } from "./RequestBodyBase";

/**
 * getMerchantPolicyPagesWeb takes NO parameters, deliberately (root CLAUDE.md, ticket #47).
 *
 * The answer is about the act-as-resolved merchant of the session: its three Flux policy pages
 * (Terms, Refund and Cancellation, Privacy), whether they are switched on, and which checkout
 * policy link currently points at each one. Permission-less server-side, like
 * getEvidenceCoverageWeb, so a sub-user opening Settings is never signed out by it.
 */
export class GetMerchantPolicyPagesRequest extends RequestBodyBase {
    constructor() {
        super();
    }

    public loadClientData(): void {
        // No parameters - see the class note.
    }

    public getRequestAsString(): string {
        return JSON.stringify({});
    }
}
