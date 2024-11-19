import { AccountUserType } from "./AccountUserType";
import { Address } from "./Address";
import { CustomerWallet } from "./CustomerWallet";
export interface IAccount {
    addresses?: Address[];
    customerWallets?: CustomerWallet[];
    id?: number;
    uniqueId?: string;
    metadata?: string;
    accountEmail?: string;
    currency?: string;
    firstName?: string;
    middleName?: string;
    isTaxExempt?: boolean;
    lastName?: string;
    phoneNumber?: string;
    accountUserType: AccountUserType;
}
