import { RequestBodyBase } from "./RequestBodyBase";

export class ConnectForthRequest extends RequestBodyBase {
    private forthClientId: string;
    private forthClientSecret: string;
    private label?: string;
    private notificationEmail?: string;
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
            autoChargeEnabled?: boolean;
        }
    ): void {
        this.forthClientId = forthClientId;
        this.forthClientSecret = forthClientSecret;
        if (opts) {
            this.label = opts.label;
            this.notificationEmail = opts.notificationEmail;
            this.autoChargeEnabled = opts.autoChargeEnabled;
        }
    }

    public getRequestAsString(): string {
        return JSON.stringify({
            forthClientId: this.forthClientId,
            forthClientSecret: this.forthClientSecret,
            label: this.label,
            notificationEmail: this.notificationEmail,
            autoChargeEnabled: this.autoChargeEnabled,
        });
    }
}
