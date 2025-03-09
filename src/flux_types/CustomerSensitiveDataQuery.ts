import { CustomerSensitiveData } from "./CustomerSensitiveData";
import { ICustomerSensitiveData } from "./ICustomerSensitiveData";
import { ICustomerSensitiveDataQuery } from "./ICustomerSensitiveDataQuery";
import { BaseQuery } from "./BaseQuery";


export class CustomerSensitiveDataQuery extends BaseQuery<CustomerSensitiveData> implements ICustomerSensitiveDataQuery {
    public obName: string = "CustomerSensitiveDataQuery";
    public objectType: string = "customer_sensitive_data";
    public accountSession?: string;

    public constructor(c: Partial<ICustomerSensitiveDataQuery>) {
        super(CustomerSensitiveData);
        Object.assign(this, c);
    }

    public serialize() {
        return {
            objectType: this.objectType,
            accountSession: this.accountSession
        }
    }

    public static createQuery(accQ? : Partial<ICustomerSensitiveDataQuery>) {return new CustomerSensitiveDataQuery(accQ)}
}