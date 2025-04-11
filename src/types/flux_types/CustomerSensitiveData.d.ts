import { FluxType } from './FluxType';
import { ICustomerSensitiveData } from './ICustomerSensitiveData';
import { BankAccount } from './BankAccount';
import { Card } from './Card';
export declare class CustomerSensitiveData extends FluxType implements ICustomerSensitiveData {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        lastFour: string;
        token: string;
        email: string;
        accountType: string;
        type: string;
        isAuthorized: boolean;
        encryptedAESKey: string;
        encryptedPayload: string;
        accountSession: string;
        firstName: string;
        lastName: string;
        nonce: string;
        objectType: string;
        oneTimeUseToken: string;
    };
    lastFour: string;
    token: string;
    email: string;
    accountType: string;
    type: string;
    isAuthorized: boolean;
    encryptedAESKey: string;
    accountSession?: string;
    bankName: string;
    oneTimeUseToken: string;
    encryptedPayload: string;
    nonce: string;
    firstName: string;
    lastName: string;
    objectType: string;
    constructor(c?: Partial<ICustomerSensitiveData>);
    static createInstanceLazy(acc: Partial<ICustomerSensitiveData>): Promise<CustomerSensitiveData>;
    static createInstanceSafe(acc: Partial<ICustomerSensitiveData>): Promise<CustomerSensitiveData>;
    /**
     * This is how we keep our API's out of PCI scope.....
     *
     * Everything is encrypted with the Data Transmissio Public Key
     *
     * Only our tokenizer can decrypt the payload with the Data Transmissio Private Key
     *
     *
     *
     * @param bankAccount
     */
    loadSensitiveData(bankAccount: BankAccount): Promise<void>;
    loadSensitiveDataCard(card: Card): Promise<void>;
}
