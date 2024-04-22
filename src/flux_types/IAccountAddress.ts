import Address from "./Address";

/**
 * Partials are used throughout the code. When you are 
 * persisting a new object to the flux system, make
 * certain that required fields are filled out.
 */
export interface IAccountAddress {
    id?: number,
    uniqueId?: string,
    accountId?: number,
    accountUniqueId?: string,
    addressId?: number,
    addressUniqueId?: string,
    address? : Address
}