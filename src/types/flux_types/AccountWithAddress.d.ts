import { Account } from "./Account";
import { Address } from "./Address";
export declare class AccountWithAddress extends Account {
    obName: string;
    serialize(): {
        addresses: Address[];
        id: number;
        uniqueId: string;
        currency: string;
        metadata: string;
        accountEmail: string;
        isTaxExempt: boolean;
        firstName: string;
        middleName: string;
        lastName: string;
        defaultShippingAddressId: number;
        defaultShippingAddressUniqueId: string;
        defaultPaymentMethodId: number;
        defaultPaymentMethodUniqueId: string;
        objectType: string;
        phoneNumber: string;
        businessName: string;
        processingFeeExempt: boolean;
        serviceFeeExempt: boolean;
    };
    addresses: Address[];
    protected objectType: string;
    constructor(acc?: Partial<AccountWithAddress>);
}
