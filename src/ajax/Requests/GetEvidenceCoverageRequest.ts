import { RequestBodyBase } from "./RequestBodyBase";

/**
 * getEvidenceCoverageWeb takes NO parameters, deliberately.
 *
 * Scope comes from the authenticated session, never from the body: the merchant
 * block is always the act-as-resolved merchant on the MAC, and the
 * cross-merchant block is filled only if PartnerAccessGate allows it
 * server-side. A merchantId in the body would be a request to widen visibility,
 * which is exactly what this endpoint must not accept.
 */
export class GetEvidenceCoverageRequest extends RequestBodyBase {
    constructor() {
        super();
    }

    public loadClientData(): void {
        // No parameters — see the class note.
    }

    public getRequestAsString(): string {
        return JSON.stringify({});
    }
}
