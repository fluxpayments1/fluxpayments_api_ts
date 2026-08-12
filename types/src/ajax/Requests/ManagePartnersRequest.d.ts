import { RequestBodyBase } from "./RequestBodyBase";
export interface ManagePartnersOpts {
    partnerId?: number;
    partnerEmail?: string;
    partnerName?: string;
    merchantIds?: number[];
    /** merchantId -> granted Permissions row ids. Blocked (AI) types stripped server-side. */
    merchantPermissions?: {
        [merchantId: number]: number[];
    };
}
/**
 * Admin-only partner account management (managePartners -> managePartnersWeb).
 * action: "list" | "create" | "update" | "remove". For update, merchantIds is
 * the COMPLETE replacement list (attach/detach are client-side list edits).
 */
export declare class ManagePartnersRequest extends RequestBodyBase {
    private action;
    private partnerId?;
    private partnerEmail?;
    private partnerName?;
    private merchantIds?;
    private merchantPermissions?;
    constructor();
    loadClientData(action: string, opts?: ManagePartnersOpts): this;
    getRequestAsString(): string;
}
