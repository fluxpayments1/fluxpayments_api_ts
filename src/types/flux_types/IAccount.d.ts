import { AccountUserType } from "./";
export interface IAccount {
    id?: number;
    uniqueId?: string;
    metadata?: string;
    accountEmail?: string;
    currency?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    accountUserType: AccountUserType;
}
