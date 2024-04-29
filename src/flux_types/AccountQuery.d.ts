import { Account } from "./Account";
import { AccountUserType } from "./AccountUserType";
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
        objectType: string;
        pagination: import("./PaginationSupport").PaginationSupport;
        additionalSearchOptions: import("./AdditionalSearchOptions").AdditionalSearchOptions[];
        accountUserType: AccountUserType;
        defaultShippingAddressId: number;
        defaultShippingAddressUniqueId: string;
        defaultPaymentMethodId: number;
        defaultPaymentMethodUniqueId: string;
    };
    id: number;
    uniqueId: string;
    metadata: string;
    accountEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    accountUserType: AccountUserType;
    defaultShippingAddressId: number;
    defaultShippingAddressUniqueId: string;
    defaultPaymentMethodId: number;
    defaultPaymentMethodUniqueId: string;
    protected objectType: string;
    constructor(accQ?: IAccountQuery);
    static createQuery(accQ?: IAccountQuery): AccountQuery;
}