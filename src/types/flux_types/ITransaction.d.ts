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
    chainNumber: number;
    paymentLinkId: number;
    defaultCurrencyAmount: number;
    confidenceLevel: number;
    currency: string;
    approvalStatus: string;
    txnHash: string;
    currencyId: number;
    shippingAddress: Address;
    products: Product | Product[];
    inventoryOnlyOrder?: boolean;
}
