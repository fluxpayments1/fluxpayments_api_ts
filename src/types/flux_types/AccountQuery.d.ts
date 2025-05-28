import { Account } from "./Account";
import { BaseQuery } from "./BaseQuery";
import { IAccountQuery } from "./IAccountQuery";
export declare class AccountQuery extends BaseQuery<Account> implements IAccountQuery {
    serialize(): {
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
    isTaxExempt?: boolean;
    id: number;
    uniqueId: string;
    metadata: string;
    accountEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    defaultShippingAddressId: number;
    defaultShippingAddressUniqueId: string;
    defaultPaymentMethodId: number;
    defaultPaymentMethodUniqueId: string;
    protected objectType: string;
    constructor(accQ?: any, overrideClass?: any);
    static createQuery(accQ?: IAccountQuery): AccountQuery;
}
