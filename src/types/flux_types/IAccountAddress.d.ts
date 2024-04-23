import { Address } from "./Address";
export interface IAccountAddress {
    id?: number;
    uniqueId?: string;
    accountId?: number;
    accountUniqueId?: string;
    addressId?: number;
    addressUniqueId?: string;
    address?: Address;
}
