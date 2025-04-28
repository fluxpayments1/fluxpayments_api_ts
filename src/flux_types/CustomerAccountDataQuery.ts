import { CustomerSensitiveData } from "./CustomerSensitiveData";
import { ICustomerSensitiveData } from "./ICustomerSensitiveData";
import { ICustomerSensitiveDataQuery } from "./ICustomerSensitiveDataQuery";
import { BaseQuery } from "./BaseQuery";
import { CustomerAccountData } from "./CustomerAccountData";
import { CustomerSensitiveDataQuery } from "./CustomerSensitiveDataQuery";
import { ICustomerAccountDataQuery } from "./ICustomerAccountDataQuery";


export class CustomerAccountDataQuery extends BaseQuery<CustomerAccountData> implements ICustomerAccountDataQuery {
    public obName: string = "CustomerAccountData";
    public objectType: string = "customer_account_data";
    public accountSession?: string;

    public constructor(c: Partial<ICustomerSensitiveDataQuery>) {
        super(CustomerAccountData);
        Object.assign(this, c);
    }

    public serialize() {
        return {
            objectType: this.objectType,
            accountSession: this.accountSession
        }
    }

    public static createQuery(accQ? : Partial<ICustomerAccountDataQuery>) {return new CustomerAccountDataQuery(accQ)}
}