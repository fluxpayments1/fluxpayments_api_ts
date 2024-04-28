import { SecurityHandler } from "../ajax/security";
import { FluxIdentifier, FluxType, BaseQuery } from "../flux_types";
export interface IFlux {
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U, secHandle?: SecurityHandler): Promise<T[]>;
    createObjectGenericSafe<T extends FluxType>(ob: T | T[], secHandle?: SecurityHandler): Promise<T[]>;
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
    createSession(id: FluxIdentifier): Promise<string>;
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U, secHandle?: SecurityHandler): Promise<T[]>;
    deleteObjects(prodIds: FluxIdentifier | FluxIdentifier[], obType: any, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>;
    updateObjects<T extends FluxType>(prod: T | T[], s?: SecurityHandler): Promise<T[]>;
    createObjectGeneric<T extends FluxType>(ob: T | T[], s?: SecurityHandler): Promise<FluxIdentifier[]>;
    getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
}
