import { FluxType } from './FluxType';
import { IWallet } from './IWallet';
export declare class Wallet extends FluxType implements IWallet {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        publicAddress: string;
        chain: string;
        memoTag: string;
        active: boolean;
        objectType: string;
    };
    publicAddress: string;
    chain: string;
    id: number;
    uniqueId: string;
    metadata: string;
    memoTag: string;
    active: boolean;
    protected objectType: string;
    constructor(wallet?: Partial<IWallet>);
    static createInstanceLazy(acc: Partial<IWallet>): Promise<Wallet>;
    static createInstanceSafe(acc: Partial<IWallet>): Promise<Wallet>;
}
