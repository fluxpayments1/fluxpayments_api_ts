import { RequestBodyBase } from "./RequestBodyBase";

export class ConnectForthRequest extends RequestBodyBase {
    private forthClientId: string;
    private forthClientSecret: string;
    private label?: string;
    private notificationEmail?: string;
    private notificationEmails?: string;
    private discoveryListId?: number;
    private autoChargeEnabled?: boolean;

    constructor() {
        super();
    }

    public loadClientData(
        forthClientId: string,
        forthClientSecret: string,
        opts?: {
            label?: string;
            notificationEmail?: string;
            notificationEmails?: string;
            discoveryListId?: number;
            autoChargeEnabled?: boolean;
        }
    ): void {
        this.forthClientId = forthClientId;
        this.forthClientSecret = forthClientSecret;
        if (opts) {
            this.label = opts.label;
            this.notificationEmail = opts.notificationEmail;
            this.notificationEmails = opts.notificationEmails;
            this.discoveryListId = opts.discoveryListId;
            this.autoChargeEnabled = opts.autoChargeEnabled;
        }
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            forthClientId: this.forthClientId,
            forthClientSecret: this.forthClientSecret,
            label: this.label,
            notificationEmail: this.notificationEmail,
            notificationEmails: this.notificationEmails,
            discoveryListId: this.discoveryListId,
            autoChargeEnabled: this.autoChargeEnabled,
        });
    }
}
