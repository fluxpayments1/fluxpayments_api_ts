import { CustomerAddressData } from "./CustomerAddressData";
import { CustomerSensitiveData } from "./CustomerSensitiveData";
export interface ICustomerAccountData {
    id: number;
    email: string;
    streetAddress: string;
    activeStatus: boolean;
    customerAddressData: CustomerAddressData[];
    customerSensitiveData: CustomerSensitiveData[];
    defaultShippingAddressId: number;
    defaultShippingAddress: CustomerAddressData;
    defaultPaymentMethodId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    defaultPaymentMethod: CustomerSensitiveData;
    uniqueid: string;
    metadata: string;
    accountSession: string;
    objectType: string;
}
