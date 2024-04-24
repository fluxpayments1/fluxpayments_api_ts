import { FluxIdentifier, FluxType, BaseQuery } from "flux_types";
export interface IFlux {
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
    createSession(id: FluxIdentifier): Promise<string>;
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U, type: new () => T, className: string): Promise<T[]>;
    deleteObjects(prodIds: FluxIdentifier | FluxIdentifier[], obType: any): Promise<FluxIdentifier[]>;
    updateObjects<T extends FluxType>(prod: T | T[], type: new (fbo?: any) => T, className: string): Promise<T[]>;
    createObjectGeneric<T extends FluxType>(ob: T | T[], obName: string): Promise<FluxIdentifier[]>;
    getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
}
