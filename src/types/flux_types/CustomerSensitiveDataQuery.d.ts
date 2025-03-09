import { CustomerSensitiveData } from "./CustomerSensitiveData";
import { ICustomerSensitiveDataQuery } from "./ICustomerSensitiveDataQuery";
import { BaseQuery } from "./BaseQuery";
export declare class CustomerSensitiveDataQuery extends BaseQuery<CustomerSensitiveData> implements ICustomerSensitiveDataQuery {
    obName: string;
    objectType: string;
    accountSession?: string;
    constructor(c: Partial<ICustomerSensitiveDataQuery>);
    serialize(): {
        objectType: string;
        accountSession: string;
    };
    static createQuery(accQ?: Partial<ICustomerSensitiveDataQuery>): CustomerSensitiveDataQuery;
}
