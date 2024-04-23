import { Account } from "./Account";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { Product } from "./Product";
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
