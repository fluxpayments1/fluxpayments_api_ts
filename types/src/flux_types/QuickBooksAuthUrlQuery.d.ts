import { BaseQuery } from "./BaseQuery";
import { IQuickBooksAuthUrlQuery } from "./IQuickBooksAuthUrlQuery";
import { QuickBooksAuthUrl } from "./QuickBooksAuthUrl";
/**
 * This is an object that is used to query for QuickBooks auth URLs.
 */
export declare class QuickBooksAuthUrlQuery extends BaseQuery<QuickBooksAuthUrl> {
    serialize(): {
        id: number;
        authUrl: string;
        state: string;
        objectType: string;
    };
    id: number;
    authUrl: string;
    state: string;
    objectType: string;
    constructor(qbQ?: IQuickBooksAuthUrlQuery);
    static createQuery(qbQ: IQuickBooksAuthUrlQuery): QuickBooksAuthUrlQuery;
}
