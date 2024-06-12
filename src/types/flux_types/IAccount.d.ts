import { AccountUserType } from "./AccountUserType";
export interface IAccount {
    id?: number;
    uniqueId?: string;
    metadata?: string;
    accountEmail?: string;
    currency?: string;
    firstName?: string;
    middleName?: string;
    isTaxExempt?: boolean;
    lastName?: string;
    phoneNumber: string;
    accountUserType: AccountUserType;
}
