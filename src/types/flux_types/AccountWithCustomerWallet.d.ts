import { Account } from "./Account";
import { CustomerWallet } from "./CustomerWallet";
export declare class AccountWithCustomerWallet extends Account {
    obName: string;
    serialize(): {
        customerWallets: CustomerWallet[];
        id: number;
        uniqueId: string;
        currency: string;
        metadata: string;
        accountEmail: string;
        isTaxExempt: boolean;
        firstName: string;
        middleName: string;
        lastName: string;
        accountUserType: import("./AccountUserType").AccountUserType;
        defaultShippingAddressId: number;
        defaultShippingAddressUniqueId: string;
        defaultPaymentMethodId: number;
        defaultPaymentMethodUniqueId: string;
        objectType: string;
        phoneNumber: string;
    };
    getDispName(): string;
    customerWallets: CustomerWallet[];
    protected objectType: string;
    constructor(acc?: Partial<AccountWithCustomerWallet>);
}
