import { AccountQuery } from "./AccountQuery";
import { AccountWithCustomerWallet } from "./AccountWithCustomerWallet";
import { CustomerWallet } from "./CustomerWallet";

export class AccountWithCustomerWalletQuery extends AccountQuery {
    public obName: string = "AccountWithCustomerWallet";
    serialize() {
        return {
            ...super.serialize(),
            customerWallets: this.customerWallets
        }
    }

    customerWallets: CustomerWallet[];
    protected objectType = "account_with_customer_wallet"

    constructor(acc?: Partial<AccountWithCustomerWalletQuery>) {
        super(acc, AccountWithCustomerWallet)
        Object.assign(this, acc);
    }

}