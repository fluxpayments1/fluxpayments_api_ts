import { AccountQuery } from "./AccountQuery";
import { Address } from "./Address";
export declare class AccountWithAddressQuery extends AccountQuery {
    obName: string;
    serialize(): {
        addresses: Address[];
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
    addresses: Address[];
    objectType: string;
    constructor(acc?: Partial<AccountWithAddressQuery>);
}
