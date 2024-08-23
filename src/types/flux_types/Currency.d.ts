import { FluxType } from './FluxType';
import { ICurrency } from './ICurrency';
export declare class Currency extends FluxType implements ICurrency {
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        shortName: string;
        chain: string;
        mintAddress: string;
        objectType: string;
    };
    chain: string;
    mintAddress: string;
    shortName: string;
    id: number;
    uniqueId: string;
    metadata: string;
    protected objectType: string;
    constructor(currency?: Partial<ICurrency>);
    static createInstanceLazy(acc: Partial<ICurrency>): Promise<Currency>;
    static createInstanceSafe(acc: Partial<ICurrency>): Promise<Currency>;
}
