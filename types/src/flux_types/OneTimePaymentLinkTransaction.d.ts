import { Account } from "./Account";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { FluxType } from './FluxType';
import { IOneTimePaymentLinkTransaction } from './IOneTimePaymentLinkTransaction';
export declare class OneTimePaymentLinkTransaction extends FluxType implements IOneTimePaymentLinkTransaction {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        oneTimePaymentLinkId: string;
        paymentMethod: PaymentMethod;
        billingAddress: Address;
        account: Account;
        shippingAddress: Address;
        saveData: Boolean;
        objectType: string;
    };
    id: number;
    oneTimePaymentLinkId: string;
    paymentMethod: PaymentMethod;
    billingAddress: Address;
    account: Account;
    shippingAddress: Address;
    accountSession: string;
    saveData: Boolean;
    protected objectType: string;
    constructor(oneTimePaymentLink?: Partial<OneTimePaymentLinkTransaction>);
    static createInstanceLazy(acc: Partial<OneTimePaymentLinkTransaction>): Promise<OneTimePaymentLinkTransaction>;
    static createInstanceSafe(acc: Partial<OneTimePaymentLinkTransaction>): Promise<OneTimePaymentLinkTransaction>;
}
