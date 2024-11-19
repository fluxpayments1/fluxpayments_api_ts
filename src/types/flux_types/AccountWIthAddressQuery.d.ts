import { AccountQuery } from "./AccountQuery";
export declare class AccountWithAddressQuery extends AccountQuery {
    obName: string;
    serialize(): {
        addresses: string[];
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
        accountUserType: import("./AccountUserType").AccountUserType;
        defaultShippingAddressId: number;
        defaultShippingAddressUniqueId: string;
        defaultPaymentMethodId: number;
        defaultPaymentMethodUniqueId: string;
        isTaxExempt: boolean;
    };
    addresses: string[];
    protected objectType: string;
    constructor(acc?: Partial<AccountWithAddressQuery>);
}
