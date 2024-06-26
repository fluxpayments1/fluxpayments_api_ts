import { Address } from "./Address";
import { IAddress } from "./IAddress";
export interface IBankAccount {
    lastFour: string;
    bankName: string;
    routingNumber: string;
    bankBrand: string;
    addressId: number;
    accountNumber: string;
    id: number;
    uniqueId: string;
    metadata: string;
    address: Address | IAddress;
}
