import { SecurityHandler } from "../ajax/security/SecurityHandler";
import { Flux } from "../lib/Flux";
import { Address } from "./Address";
import { FluxIdentifier } from "./FluxIdentifier";
import { FluxType } from "./FluxType";
import { IPaymentMethod } from "./IPaymentMethod";
import { BaseQuery } from "./BaseQuery";
export declare class PaymentMethod extends FluxType implements IPaymentMethod {
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
    accountSession: string;
    private encSensitiveData;
    private encAesKey;
    private aesNonce;
    protected objectType: string;
    static validatePaymentMethod(pm: PaymentMethod, pt: any): Promise<FluxIdentifier[]>;
    protected static createInstanceSafeDbCall(inst: PaymentMethod, pt: any): Promise<PaymentMethod>;
    constructor(c?: Partial<IPaymentMethod>);
    static updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]>;
    static createObjects<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]>;
    delete(): Promise<void>;
    merge(): Promise<void>;
    persist(): Promise<void>;
    refresh(): Promise<void>;
    static queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U, cfs?: Flux<SecurityHandler>): Promise<T[]>;
    static deleteObjects<T extends FluxType>(this: new (o?: any) => T, fi: FluxIdentifier | FluxIdentifier[], cfs?: Flux<SecurityHandler>, accountSession?: string): Promise<FluxIdentifier[]>;
    protected static createObjectsSafe<T extends FluxType>(ob: T | T[], secHandle?: SecurityHandler): Promise<T[]>;
}
