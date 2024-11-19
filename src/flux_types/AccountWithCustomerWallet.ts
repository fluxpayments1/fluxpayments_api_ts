import { Account } from "./Account";
import { Address } from "./Address";
import { CustomerWallet } from "./CustomerWallet";

export class AccountWithCustomerWallet extends Account {
    public obName: string = "AccountWithCustomerWallet";
    serialize() {
        return {
            ...super.serialize(),
            customerWallets: this.customerWallets
        }
    }

    customerWallets: CustomerWallet[];
    protected objectType = "account_with_customer_wallet"

    constructor(acc?: Partial<AccountWithCustomerWallet>) {
        super(acc, AccountWithCustomerWallet)
        Object.assign(this, acc);
    }

}