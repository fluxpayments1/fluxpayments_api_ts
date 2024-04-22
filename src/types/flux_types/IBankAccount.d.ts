import { Address, IAddress } from "./";
export interface IBankAccount {
    lastFour: string;
    bankName: string;
    routingNumber: string;
    bankBrand: string;
    accountNumber: string;
    id: number;
    uniqueId: string;
    metadata: string;
    address: Address | IAddress;
}
