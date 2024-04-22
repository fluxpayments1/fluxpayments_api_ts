import { IAccountAddress, FluxType, Address } from "./";
export declare class AccountAddress extends FluxType {
    obName: string;
    serialize(): {
        uniqueId: string;
        id: number;
        metadata: string;
        accountId: number;
        accountUniqueId: string;
        addressId: number;
        addressUniqueId: string;
        address: Address;
        objectType: string;
    };
    uniqueId: string;
    id: number;
    metadata: string;
    accountId: number;
    accountUniqueId: string;
    addressId: number;
    addressUniqueId: string;
    address: Address;
    protected objectType: string;
    constructor(add?: Partial<IAccountAddress>);
}