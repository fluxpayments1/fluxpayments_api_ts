import { Account } from "./Account";
import { Address } from "./Address";

export class AccountWithAddress extends Account {
    public obName: string = "AccountWithAddress";
    serialize() {
        return {
            ...super.serialize(),
            addresses: this.addresses
        }
    }

    addresses: Address[];
    protected objectType = "account_with_address"

    constructor(acc?: Partial<AccountWithAddress>) {
        super(acc, AccountWithAddress)
        Object.assign(this, acc);
    }

}