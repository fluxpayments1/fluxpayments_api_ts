import { Account, Address, PaymentMethod, Product } from ".";
export interface ITransaction {
    account: Account;
    paymentMethod: PaymentMethod;
    uniqueId: string;
    taxRate?: number;
    currency: string;
    shippingAddress: Address;
    products: Product | Product[];
    inventoryOnlyOrder?: boolean;
}
