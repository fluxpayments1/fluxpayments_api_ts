import { FluxType } from "./FluxType";
import { IBankAccount } from "./IBankAccount";
import { CustomerSensitiveData } from "./CustomerSensitiveData";
export declare class BankAccount extends FluxType implements IBankAccount {
    obName: string;
    objectType: string;
    serialize(): {
        objectType: string;
        lastFour: string;
        bankName: string;
    };
    constructor(c: Partial<IBankAccount>);
    lastFour: string;
    bankName: string;
    routingNumber: string;
    bankBrand: string;
    accountNumber: string;
    accountType: string;
    accountSession: string;
    metadata: string;
    firstName: string;
    lastName: string;
    static parseCustomerSensitiveData(csd: CustomerSensitiveData): BankAccount;
    validateBankAccount(): Promise<void>;
    getDispName(): string;
}
