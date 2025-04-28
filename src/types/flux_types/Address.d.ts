import { IAddress } from "./IAddress";
import { FluxType } from "./FluxType";
export declare class Address extends FluxType implements IAddress {
    obName: string;
    serialize(): {
        uniqueId: string;
        id: number;
        metadata: string;
        streetAddress: string;
        country: string;
        zipCode: string;
        addressState: string;
        city: string;
        accountId: number;
        objectType: string;
    };
    getDispName(): string;
    accountId: number;
    uniqueId: string;
    id: number;
    metadata: string;
    streetAddress: string;
    country: string;
    zipCode: string;
    addressState: string;
    city: string;
    protected objectType: string;
    constructor(add?: Partial<IAddress>);
    static createInstanceLazy(acc: Partial<IAddress>): Promise<Address>;
    static createInstanceSafe(acc: Partial<IAddress>): Promise<Address>;
}
