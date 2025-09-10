import { ICustomerSensitiveDataQuery } from "./ICustomerSensitiveDataQuery";
import { BaseQuery } from "./BaseQuery";
import { CustomerAccountData } from "./CustomerAccountData";
import { ICustomerAccountDataQuery } from "./ICustomerAccountDataQuery";
export declare class CustomerAccountDataQuery extends BaseQuery<CustomerAccountData> implements ICustomerAccountDataQuery {
    obName: string;
    objectType: string;
    accountSession?: string;
    constructor(c: Partial<ICustomerSensitiveDataQuery>);
    serialize(): {
        objectType: string;
        accountSession: string;
    };
    static createQuery(accQ?: Partial<ICustomerAccountDataQuery>): CustomerAccountDataQuery;
}
