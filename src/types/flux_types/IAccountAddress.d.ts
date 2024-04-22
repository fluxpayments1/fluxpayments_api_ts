import { Address } from "./";
export interface IAccountAddress {
    id?: number;
    uniqueId?: string;
    accountId?: number;
    accountUniqueId?: string;
    addressId?: number;
    addressUniqueId?: string;
    address?: Address;
}
