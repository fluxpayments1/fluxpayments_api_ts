import { AccountQuery } from "./AccountQuery";
import { AccountWithAddress } from "./AccountWithAddress";
import { Address } from "./Address";

export class AccountWithAddressQuery extends AccountQuery {
    public obName: string = "AccountWithAddress";
    serialize() {
        return {
            ...super.serialize(),
            addresses: this.addresses
        }
    }

    addresses: Address[];
    objectType = "account_with_address"

    constructor(acc?: Partial<AccountWithAddressQuery>) {
        super(acc, AccountWithAddress)
        Object.assign(this, acc);
    }

}