import { AccountQuery } from "./AccountQuery";
import { CustomerWallet } from "./CustomerWallet";
export declare class AccountWithCustomerWalletQuery extends AccountQuery {
    obName: string;
    serialize(): {
        customerWallets: CustomerWallet[];
        id: number;
        uniqueId: string;
        metadata: string;
        accountEmail: string;
        firstName: string;
        middleName: string;
        lastName: string;
        createdAt: number;
        objectType: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
        defaultShippingAddressId: number;
        defaultShippingAddressUniqueId: string;
        defaultPaymentMethodId: number;
        defaultPaymentMethodUniqueId: string;
        isTaxExempt: boolean;
    };
    customerWallets: CustomerWallet[];
    protected objectType: string;
    constructor(acc?: Partial<AccountWithCustomerWalletQuery>);
}
