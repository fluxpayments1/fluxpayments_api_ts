import { Account } from ".";
export interface IEmailConfirmation {
    email: string;
    payLink: string;
    acc: Account;
    accountSession: string;
    code: string;
}
