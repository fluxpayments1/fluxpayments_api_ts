import { DumpId } from "./DumpId";
import { FluxType } from "./FluxType";
import { IAddress } from "./IAddress";
export declare class AddressDump extends FluxType implements IAddress {
    serialize(): void;
    obName: string;
    protected objectType: string;
    dumpId: DumpId;
    metadata: string;
    streetAddress: string;
    country: string;
    zipCode: string;
    addressState: string;
    city: string;
    getInterface(): IAddress;
    constructor(addDump?: any);
    static createInstanceLazy(acc: Partial<IAddress>): Promise<AddressDump>;
    static createInstanceSafe(acc: Partial<IAddress>): Promise<AddressDump>;
}
