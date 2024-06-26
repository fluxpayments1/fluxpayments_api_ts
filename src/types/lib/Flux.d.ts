import { SecurityHandler } from "../ajax/security";
import { FluxIdentifier, FluxType, BaseQuery, Product } from "../flux_types";
import { IFlux } from "./IFlux";
export declare class Flux<A extends SecurityHandler> implements IFlux {
    protected tes: any;
    protected _isAuthenticated: boolean;
    protected _securityHandle: A;
    protected static fb: Flux<any>;
    constructor();
    static getInstance<T extends SecurityHandler>(): Flux<T>;
    get isAuthenticated(): boolean;
    set isAuthenticated(b: boolean);
    get securityHandle(): A;
    set securityHandle(securityHandle: A);
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
    /**
     * Creates a Session with an account id
     *
     *
     * @param accoundId The account id used to create a session
     * @returns a session id
     */
    createSession(id: FluxIdentifier): Promise<string>;
    static exchangeOTPLForSession(otpl: string): Promise<string>;
    static getMerchantPublicKeyFromOTPL(otpl: string): Promise<string>;
    validatePaymentMethod<T extends FluxType>(ob: T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    createObjectGeneric<T extends FluxType>(ob: T | T[], secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    createObjectGenericSafe<T extends FluxType>(ob: T | T[], secHandle?: SecurityHandler): Promise<T[]>;
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U, secHandle?: SecurityHandler): Promise<T[]>;
    deleteObjects<T extends FluxType>(ids: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]>;
    getLinkedObjectsById<T extends FluxType, U extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obType2: new (o?: any) => U): Promise<U[]>;
    updateObjects<T extends FluxType>(ob: T | T[], securityHandle?: SecurityHandler): Promise<T[]>;
    getMetadata(metadataName: string): Promise<string>;
    updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]>;
}
