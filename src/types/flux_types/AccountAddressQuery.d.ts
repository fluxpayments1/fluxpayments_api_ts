import { AccountAddress } from "./AccountAddress";
import { BaseQuery } from "./BaseQuery";
import { IAccountAddressQuery } from "./IAccountAddressQuery";
/**
 * This is an object that is used to query for products.
 */
export declare class AccountAddressQuery extends BaseQuery<AccountAddress> {
    serialize(): {
        id: number;
        uniqueId: string;
        addressUniqueId: string;
        accountUniqueId: string;
        addressId: number;
        accountId: number;
        objectType: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
    };
    uniqueId: string;
    id: number;
    protected objectType: string;
    accountId: number;
    addressId: number;
    accountUniqueId: string;
    addressUniqueId: string;
    constructor(accQ?: IAccountAddressQuery);
    static createQuery(accQ?: IAccountAddressQuery): AccountAddressQuery;
}
