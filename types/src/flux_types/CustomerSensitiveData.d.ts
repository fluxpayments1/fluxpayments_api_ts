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
        phoneNumber: string;
        encryptedAESKey: string;
        encryptedPayload: string;
        accountSession: string;
        firstName: string;
        lastName: string;
        nonce: string;
        shippingAddressId: number;
        objectType: string;
        oneTimeUseToken: string;
        transactionId: number;
    };
    lastFour: string;
    token: string;
    email: string;
    accountType: string;
    type: string;
    isAuthorized: boolean;
    phoneNumber: string;
    encryptedAESKey: string;
    shippingAddressId: number;
    approvalStatus: string;
    accountSession?: string;
    bankName: string;
    oneTimeUseToken: string;
    encryptedPayload: string;
    nonce: string;
    firstName: string;
    country: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    transactionId: number;
    processorError: string;
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
