import { CreateSessionResponse } from "../ajax/Responses";
import { SecurityHandler } from "../ajax/security";
import { FluxIdentifier, Product } from "../flux_types";
import { IFlux } from "../lib/IFlux";
import { IBaseQuery } from "../flux_types/IBaseQuery";
export declare class FluxComms<A extends SecurityHandler> {
    protected _isAuthenticated: boolean;
    protected _securityHandle: A;
    protected static fb: FluxComms<any>;
    constructor();
    static getInstance<T extends SecurityHandler>(): FluxComms<T>;
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
    static exchangeOTPLForSession(otpl: string): Promise<CreateSessionResponse>;
    static getMerchantPublicKeyFromOTPL(otpl: string): Promise<CreateSessionResponse>;
    validatePaymentMethod<T extends IFlux>(ob: T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    validateAndCreatePaymentMethod<T extends IFlux>(ob: T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    createObjectGeneric<T extends IFlux>(ob: T | T[], secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    createObjectGenericSafe<T extends IFlux>(ob: T | T[], secHandle?: SecurityHandler): Promise<T[]>;
    getObjects<T extends IFlux, U extends IBaseQuery<T>>(query: U, secHandle?: SecurityHandler): Promise<T[]>;
    deleteObjects<T extends IFlux>(ids: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    getObjectsById<T extends IFlux>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]>;
    getLinkedObjectsById<T extends IFlux, U extends IFlux>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obType2: new (o?: any) => U): Promise<U[]>;
    updateObjects<T extends IFlux>(ob: T | T[], securityHandle?: SecurityHandler): Promise<T[]>;
    getMetadata(metadataName: string): Promise<string>;
    updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]>;
}
