import { DumpId, FluxType, IAddress } from "./";
export declare class AddressDump extends FluxType {
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
}
