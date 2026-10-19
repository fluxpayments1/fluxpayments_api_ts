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
export class ManagePartnerAccessRequest extends RequestBodyBase {
    private opts: ManagePartnerAccessOpts = { action: "list" };

    constructor() { super(); }

    public loadClientData(opts?: ManagePartnerAccessOpts) {
        this.opts = opts || { action: "list" };
        return this;
    }

    public getRequestAsString(): string {
        const o = this.opts || { action: "list" };
        const body: any = { action: o.action || "list" };
        if (o.email !== undefined && o.email !== null) body.email = o.email;
        if (Array.isArray(o.merchantIds)) body.merchantIds = o.merchantIds;
        if (Array.isArray(o.permissionIds)) body.permissionIds = o.permissionIds;
        if (o.macId !== undefined && o.macId !== null) body.macId = o.macId;
        if (o.loginId !== undefined && o.loginId !== null) body.loginId = o.loginId;
        return JSON.stringify(body);
    }
}
