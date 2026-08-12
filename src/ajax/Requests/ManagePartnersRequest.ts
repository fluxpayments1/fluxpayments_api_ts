import { RequestBodyBase } from "./RequestBodyBase";

export interface ManagePartnersOpts {
    partnerId?: number;
    partnerEmail?: string;
    partnerName?: string;
    merchantIds?: number[];
    /** merchantId -> granted Permissions row ids. Blocked (AI) types stripped server-side. */
    merchantPermissions?: { [merchantId: number]: number[] };
}

/**
 * Admin-only partner account management (managePartners -> managePartnersWeb).
 * action: "list" | "create" | "update" | "remove". For update, merchantIds is
 * the COMPLETE replacement list (attach/detach are client-side list edits).
 */
export class ManagePartnersRequest extends RequestBodyBase {
    private action: string;
    private partnerId?: number;
    private partnerEmail?: string;
    private partnerName?: string;
    private merchantIds?: number[];
    private merchantPermissions?: { [merchantId: number]: number[] };

    constructor() { super(); }

    public loadClientData(action: string, opts?: ManagePartnersOpts) {
        this.action = action;
        this.partnerId = opts?.partnerId;
        this.partnerEmail = opts?.partnerEmail;
        this.partnerName = opts?.partnerName;
        this.merchantIds = opts?.merchantIds;
        this.merchantPermissions = opts?.merchantPermissions;
        return this;
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            action: this.action,
            partnerId: this.partnerId,
            partnerEmail: this.partnerEmail,
            partnerName: this.partnerName,
            merchantIds: this.merchantIds,
            merchantPermissions: this.merchantPermissions,
        });
    }
}
