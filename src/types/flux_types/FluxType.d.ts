import { SecurityHandler } from "../ajax/security";
import { Flux } from "../lib/Flux";
import { BaseQuery } from "./BaseQuery";
import { FluxIdentifier } from "./FluxIdentifier";
export declare abstract class FluxType {
    dataTableMetadata: any;
    uniqueId: string;
    obType: new (o?: any) => this;
    abstract obName: string;
    protected abstract objectType: string;
    getObjectType(): string;
    constructor(fbo: any, t: new (o?: any) => any);
    id: number;
    getId(): FluxIdentifier;
    setId(fi: FluxIdentifier): void;
    protected static instantiateLazyInstance<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T>;
    protected static instantiateInstance<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T>;
    protected static getBackendConn(): Promise<Flux<SecurityHandler>>;
    abstract serialize(): any;
    delete(): Promise<void>;
    merge(): Promise<void>;
    persist(): Promise<void>;
    /**
     * Used for account free or stateless payments.
     * Creating a payment method with a stateless
     * token will store the payment method in our
     * system and return a token. You can then pass
     * this token for one time use into a transaction
     * object.
     *
     *
     * @returns
     */
    static generateStatelessSession(): Promise<any>;
    refresh(): Promise<void>;
    protected static getObjectsByIdInternal<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]>;
    static getObjectsById<T extends FluxType>(this: new () => T, fi: FluxIdentifier | FluxIdentifier[]): Promise<T[]>;
    static queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U): Promise<T[]>;
    static deleteObjects<T extends FluxType>(this: new (o?: any) => T, fi: FluxIdentifier | FluxIdentifier[]): Promise<FluxIdentifier[]>;
    static updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]>;
    static createObjects<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]>;
    protected static createObjectsSafe<T extends FluxType>(ob: T | T[]): Promise<T[]>;
}
