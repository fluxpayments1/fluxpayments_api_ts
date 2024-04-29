import { Address } from "./Address";
import { IAddress } from "./IAddress";
export interface ICard {
    id?: number;
    uniqueId?: string;
    metadata?: string;
    address: Address | IAddress;
    accountSession: string;
    firstName?: string;
    lastName?: string;
    lastFour?: string;
    expMonth: string;
    expYear: string;
    cardNumber: string;
    cvv: string;
}