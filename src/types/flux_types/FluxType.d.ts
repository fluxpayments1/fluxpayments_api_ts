import { Flux } from "lib";
import { BaseQuery } from "./BaseQuery";
import { FluxIdentifier } from "./FluxIdentifier";
export declare abstract class FluxType {
    dataTableMetadata: any;
    uniqueId: string;
    obType: new (o?: any) => FluxType;
    abstract obName: string;
    protected abstract objectType: string;
    getObjectType(): string;
    constructor(fbo: any, t: new (o?: any) => FluxType);
    id: number;
    getId(): FluxIdentifier;
    setId(fi: FluxIdentifier): void;
    protected static instantiateLazyInstance<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T>;
    protected static instantiateInstance<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T>;
    protected static getBackendConn(): Promise<Flux>;
    abstract serialize(): any;
    delete(): Promise<void>;
    merge(): Promise<void>;
    persist(): Promise<void>;
    refresh(): Promise<void>;
    static getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]>;
    static queryObjects<T extends FluxType, U extends BaseQuery>(q: U, obType: new (o?: any) => T): Promise<T[]>;
    static deleteObjects<T extends FluxType>(this: new (o?: any) => T, fi: FluxIdentifier | FluxIdentifier[]): Promise<FluxIdentifier[]>;
    static updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]>;
    static createObjects<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]>;
    static createObjectsSafe<T extends FluxType>(ob: T | T[]): Promise<T[]>;
}
