import { BaseQuery } from "./BaseQuery";
import { IQuickBooksAuthUrlQuery } from "./IQuickBooksAuthUrlQuery";
import { QuickBooksAuthUrl } from "./QuickBooksAuthUrl";

/**
 * This is an object that is used to query for QuickBooks auth URLs.
 */
export class QuickBooksAuthUrlQuery extends BaseQuery<QuickBooksAuthUrl> {
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
    objectType: string = "quickbooks_auth_url";

    public constructor(qbQ?: IQuickBooksAuthUrlQuery) {
        super(QuickBooksAuthUrl);
        Object.assign(this, qbQ);
    }

    public static createQuery(qbQ: IQuickBooksAuthUrlQuery) {
        return new QuickBooksAuthUrlQuery(qbQ);
    }
}

