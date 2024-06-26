import { FluxType } from "./FluxType";
import { IAccountAddress } from "./IAccountAddress";
export declare class AccountAddress extends FluxType implements IAccountAddress {
    obName: string;
    serialize(): {
        uniqueId: string;
        id: number;
        metadata: string;
        accountId: number;
        accountUniqueId: string;
        addressId: number;
        addressUniqueId: string;
        objectType: string;
    };
    uniqueId: string;
    id: number;
    metadata: string;
    accountId: number;
    accountUniqueId: string;
    addressId: number;
    addressUniqueId: string;
    protected objectType: string;
    constructor(add?: Partial<IAccountAddress>);
    static createInstanceLazy(acc: Partial<IAccountAddress>): Promise<AccountAddress>;
    static createInstanceSafe(acc: Partial<IAccountAddress>): Promise<AccountAddress>;
}
