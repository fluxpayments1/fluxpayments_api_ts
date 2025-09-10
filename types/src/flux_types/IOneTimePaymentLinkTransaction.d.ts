import { Account, Address, PaymentMethod } from ".";
export interface IOneTimePaymentLinkTransaction {
    id?: number;
    oneTimePaymentLinkId?: string;
    paymentMethod?: PaymentMethod;
    billingAddress?: Address;
    account?: Account;
    shippingAddress?: Address;
    saveData?: Boolean;
    accountSession?: string;
}
