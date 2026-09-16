import { RequestBodyBase } from "./RequestBodyBase";
/**
 * Assemble and download the Dispute Response Bundle for one case (DESIGN 3.2).
 *
 * Rendered ON DEMAND rather than served from a cached key: the bundle grows every
 * time the merchant uploads a file or revises their rebuttal, and handing them a
 * stale exhibit on the day of a deadline is the worst possible outcome. The sealed
 * Evidence Record inside it is fetched byte-for-byte and never re-rendered, so its
 * recorded hash stays valid.
 */
export interface GetDisputeBundleParams {
    disputeId: number;
}
export declare class GetDisputeBundleRequest extends RequestBodyBase {
    private disputeId;
    constructor();
    loadClientData(params: GetDisputeBundleParams): void;
    getRequestAsString(): string;
}
