import { FluxType } from './FluxType';
import { IQuickBooksAuthUrl } from './IQuickBooksAuthUrl';

export class QuickBooksAuthUrl extends FluxType implements IQuickBooksAuthUrl {
    obName: string = "QuickBooksAuthUrl";

    getDispName(): string {
        return "QuickBooks Auth URL";
    }

    public serialize() {
        return {
            id: this.id,
            authUrl: this.authUrl,
            state: this.state,
            objectType: this.objectType
        };
    }

    id: number;
    authUrl: string;
    state: string;
    protected objectType: string = "quickbooks_auth_url";

    public constructor(quickBooksAuthUrl?: Partial<QuickBooksAuthUrl>) {
        super(quickBooksAuthUrl, QuickBooksAuthUrl);
        Object.assign(this, quickBooksAuthUrl);
    }
}

