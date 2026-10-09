import { RequestBodyBase } from "./RequestBodyBase";
/** getTermsStatusWeb takes NO parameters: scope is the signed-in merchant, never a body value. */
export declare class GetTermsStatusRequest extends RequestBodyBase {
    constructor();
    loadClientData(): void;
    getRequestAsString(): string;
}
