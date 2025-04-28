import { BaseQuery } from "./BaseQuery";
import { CustomerAddressData } from "./CustomerAddressData";
import { ICustomerAddressDataQuery } from "./ICustomerAddressDataQuery";
export declare class CustomerAddressDataQuery extends BaseQuery<CustomerAddressData> implements ICustomerAddressDataQuery {
    obName: string;
    objectType: string;
    accountSession?: string;
    constructor(c: Partial<ICustomerAddressDataQuery>);
    serialize(): {
        objectType: string;
        accountSession: string;
    };
}
