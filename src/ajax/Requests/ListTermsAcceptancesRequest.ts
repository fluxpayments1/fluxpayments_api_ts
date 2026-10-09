import { RequestBodyBase } from "./RequestBodyBase";

/** listTermsAcceptancesWeb takes NO parameters; admin-gated server-side. */
export class ListTermsAcceptancesRequest extends RequestBodyBase {
    constructor() { super(); }
    public loadClientData(): void { /* no parameters */ }
    public getRequestAsString(): string { return JSON.stringify({}); }
}
