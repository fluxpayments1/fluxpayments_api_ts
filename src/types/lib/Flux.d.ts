import { MerchantEndpointsSecurityHandle } from "../ajax/security";
import { FluxIdentifier, FluxType, BaseQuery, Product } from "../flux_types";
import { IFlux } from "./IFlux";
export declare class Flux implements IFlux {
    private _isAuthenticated;
    private _securityHandle;
    private static fb;
    private constructor();
    static getInstance(): Flux;
    get isAuthenticated(): boolean;
    set isAuthenticated(b: boolean);
    get securityHandle(): MerchantEndpointsSecurityHandle;
    set securityHandle(securityHandle: MerchantEndpointsSecurityHandle);
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
    /**
     * Creates a Session with an account id
     *
     *
     * @param accoundId The account id used to create a session
     * @returns a session id
     */
    createSession(id: FluxIdentifier): Promise<string>;
    createObjectGeneric<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]>;
    createObjectGenericSafe<T extends FluxType>(ob: T | T[]): Promise<T[]>;
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U): Promise<T[]>;
    deleteObjects<T extends FluxType>(ids: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<FluxIdentifier[]>;
    getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]>;
    updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]>;
    updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]>;
}
