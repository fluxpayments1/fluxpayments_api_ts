import { Account, Address } from ".";
import { BaseQuery } from "./BaseQuery";
import { IAccountAddressQuery } from "./IAccountAddressQuery";

/**
 * This is an object that is used to query for products.
 */

export class AccountAddressQuery extends BaseQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            addressUniqueId: this.addressUniqueId,
            accountUniqueId: this.accountUniqueId,
            addressId: this.addressId,
            accountId: this.accountId,
            objectType: this.objectType,
            pagination: this.pagination,
            additionalSearchOptions: this.additionalSearchOptions
        }
    }

    uniqueId: string;
    id: number;
    protected objectType: string = "account_address";
    accountId: number;
    addressId: number;
    accountUniqueId: string;
    addressUniqueId: string;

    constructor(accQ?: IAccountAddressQuery) {
        super();
        Object.assign(this, accQ);
    }

    public static createQuery(accQ?: IAccountAddressQuery) { return new AccountAddressQuery(accQ) }
}
