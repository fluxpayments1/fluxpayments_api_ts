import { MerchantEndpointsSecurityHandle } from "../ajax/security";
import { IFlux } from "./";
import { Product, FluxType, BaseQuery, FluxIdentifier } from "../flux_types/";
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
    createObjectGeneric<T extends FluxType>(ob: T | T[], obName: string): Promise<FluxIdentifier[]>;
    createObjectGenericSafe<T extends FluxType>(ob: T | T[], obName: string): Promise<T[]>;
    getObjects<T extends FluxType, U extends BaseQuery>(query: U, obType: new (o?: any) => T, obName: string): Promise<T[]>;
    deleteObjects(ids: FluxIdentifier | FluxIdentifier[], obName: string): Promise<FluxIdentifier[]>;
    getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
    updateObjects<T extends FluxType>(ob: T | T[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
    updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]>;
}
