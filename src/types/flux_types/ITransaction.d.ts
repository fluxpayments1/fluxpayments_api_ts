import { Account } from "./Account";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { Product } from "./Product";
export interface ITransaction {
    account: Account;
    paymentMethod: PaymentMethod;
    id: number;
    uniqueId: string;
    taxRate?: number;
    currency: string;
    currencyId: number;
    shippingAddress: Address;
    products: Product | Product[];
    inventoryOnlyOrder?: boolean;
}
