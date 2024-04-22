import { Address, FluxType, IPaymentMethod } from "./";
export declare class PaymentMethod extends FluxType {
    obName: string;
    serialize(): {
        objectType: string;
        id: number;
        uniqueId: string;
        metadata: string;
        payType: any;
        address: Address;
        encSensitiveData: string;
        encAesKey: any;
        aesNonce: any;
    };
    address: Address;
    id: number;
    uniqueId: string;
    metadata: string;
    activeStatus: any;
    token: string;
    version: number;
    email: string;
    payType: any;
    addressId: number;
    firstName: string;
    lastName: string;
    objecttype: string;
    private encSensitiveData;
    private encAesKey;
    private aesNonce;
    protected objectType: string;
    constructor(c?: Partial<IPaymentMethod>);
}
