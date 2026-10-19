import { RequestBodyBase } from "./RequestBodyBase";
/** One call of managePartnerAccessWeb (platform admins only, server-gated). */
export interface ManagePartnerAccessOpts {
    /** list | add | update | remove | removePartner | resendInvite */
    action: string;
    /** add: the person's email. */
    email?: string;
    /** add: every business to give them access to. */
    merchantIds?: number[];
    /** add / update: the permission ids they get on each business. */
    permissionIds?: number[];
    /** update / remove: one partner membership. */
    macId?: number;
    /** removePartner / resendInvite: the person. */
    loginId?: number;
}
/**
 * Body of managePartnerAccessWeb - the Partner dashboard's Partners panel. Only the keys the
 * caller supplied are sent; the server answers every action with the full, fresh picture.
 */
export declare class ManagePartnerAccessRequest extends RequestBodyBase {
    private opts;
    constructor();
    loadClientData(opts?: ManagePartnerAccessOpts): this;
    getRequestAsString(): string;
}
