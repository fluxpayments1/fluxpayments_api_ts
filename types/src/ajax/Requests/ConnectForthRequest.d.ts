import { RequestBodyBase } from "./RequestBodyBase";
export declare class ConnectForthRequest extends RequestBodyBase {
    private forthClientId;
    private forthClientSecret;
    private label?;
    private notificationEmail?;
    private autoChargeEnabled?;
    constructor();
    loadClientData(forthClientId: string, forthClientSecret: string, opts?: {
        label?: string;
        notificationEmail?: string;
        autoChargeEnabled?: boolean;
    }): void;
    getRequestAsString(): string;
}
