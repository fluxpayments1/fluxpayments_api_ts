import { ResponseBodyBase } from "./ResponseBodyBase";

export interface PartnerAccountRow {
    id: number;
    email: string;
    name: string | null;
    merchantIds: number[];
    /** merchantId -> granted Permissions row ids. */
    merchantPermissions: { [merchantId: number]: number[] };
    createdAt: string | number | null;
}

export interface ManagePartnersResult {
    partners: PartnerAccountRow[];
    /** True when a create also provisioned a brand-new login + invite email. */
    invitedLoginCreated: boolean;
}

export class ManagePartnersResponse extends ResponseBodyBase {
    private result: ManagePartnersResult = { partners: [], invitedLoginCreated: false };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ManagePartnersResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            partners: (p.partners || []).map((r: any) => ({
                id: r.id,
                email: r.email,
                name: r.name ?? null,
                merchantIds: r.merchantIds || [],
                merchantPermissions: r.merchantPermissions || {},
                createdAt: r.createdAt ?? null,
            })),
            invitedLoginCreated: !!p.invitedLoginCreated,
        };
        return this;
    }

    public getClientReturnValue(): ManagePartnersResult {
        return this.result;
    }
}
