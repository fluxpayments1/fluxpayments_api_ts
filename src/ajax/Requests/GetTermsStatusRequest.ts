import { RequestBodyBase } from "./RequestBodyBase";

/** getTermsStatusWeb takes NO parameters: scope is the signed-in merchant, never a body value. */
export class GetTermsStatusRequest extends RequestBodyBase {
    constructor() { super(); }
    public loadClientData(): void { /* no parameters */ }
    public getRequestAsString(): string { return JSON.stringify({}); }
}
