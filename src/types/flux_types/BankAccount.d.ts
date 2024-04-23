import { IBankAccount } from "./IBankAccount";
import { PaymentMethod } from "./PaymentMethod";
export declare class BankAccount extends PaymentMethod implements IBankAccount {
    constructor(c: Partial<IBankAccount>);
    lastFour: string;
    bankName: string;
    routingNumber: string;
    bankBrand: string;
    accountNumber: string;
}
