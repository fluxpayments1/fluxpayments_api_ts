import { Flux } from "../lib/";
import { BaseQuery, FluxIdentifier } from "./";
export declare abstract class FluxType {
    dataTableMetadata: any;
    uniqueId: string;
    protected obType: new (o?: any) => FluxType;
    abstract obName: string;
    protected abstract objectType: string;
    getObjectType(): string;
    constructor(fbo: any, t: new (o?: any) => FluxType);
    id: number;
    getId(): FluxIdentifier;
    setId(fi: FluxIdentifier): void;
    static createInstanceLazy<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): T;
    static createInstanceSafe<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T>;
    protected static getBackendConn(): Promise<Flux>;
    abstract serialize(): any;
    delete(): Promise<void>;
    merge(): Promise<void>;
    persist(): Promise<void>;
    refresh(): Promise<void>;
    protected static getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
    protected static queryObjects<T extends FluxType, U extends BaseQuery>(q: U, obType: new (o?: any) => T, obName: string): Promise<T[]>;
    protected static deleteObjects(fi: FluxIdentifier | FluxIdentifier[], obName: string): Promise<void>;
    protected static updateObjects<T extends FluxType>(ob: T | T[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
    protected static createObjects<T extends FluxType>(ob: T | T[], obType: new (o?: any) => T, obName: string): Promise<FluxIdentifier[]>;
    protected static createObjectsGenericSafe<T extends FluxType>(ob: T | T[], obType: new (o?: any) => T, obName: string): Promise<T[]>;
}
