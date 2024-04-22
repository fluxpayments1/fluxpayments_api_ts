import { BaseQuery, IProductQuery } from "./";
/**
 * This is an object that is used to query for products.
 */
export declare class ProductQuery extends BaseQuery {
    serialize(): {
        id: number;
        uniqueId: number;
        metadata: string;
        name: string;
        type: "SUBSCRIPTION" | "SERVICE" | "PHYSICAL_PRODUCT";
        subscriptionInterval: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
        category: string;
        objectType: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
    };
    metadata: string;
    id: number;
    uniqueId?: number;
    name?: string;
    type?: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT';
    subscriptionInterval?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    category?: string;
    protected objectType: string;
    constructor(productQuery?: IProductQuery);
    static createQuery(ipq: IProductQuery): ProductQuery;
}
