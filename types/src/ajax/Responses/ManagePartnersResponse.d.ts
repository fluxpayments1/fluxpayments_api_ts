import { ResponseBodyBase } from "./ResponseBodyBase";
export interface PartnerAccountRow {
    id: number;
    email: string;
    name: string | null;
    merchantIds: number[];
    /** merchantId -> granted Permissions row ids. */
    merchantPermissions: {
        [merchantId: number]: number[];
    };
    createdAt: string | number | null;
}
export interface ManagePartnersResult {
    partners: PartnerAccountRow[];
    /** True when a create also provisioned a brand-new login + invite email. */
    invitedLoginCreated: boolean;
}
export declare class ManagePartnersResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ManagePartnersResponse;
    getClientReturnValue(): ManagePartnersResult;
}
