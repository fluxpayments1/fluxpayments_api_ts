import { IAddress } from "./IAddress";
import { FluxType } from "./FluxType";
export declare class Address extends FluxType {
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
        objectType: string;
    };
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
