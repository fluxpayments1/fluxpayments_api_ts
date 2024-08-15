import { BaseQuery } from "./BaseQuery";
import { IWallet } from "./IWallet";
import { IWalletQuery } from "./IWalletQuery";
import { Wallet } from "./Wallet";
export declare class WalletQuery extends BaseQuery<Wallet> implements IWalletQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        chain: string;
        active: boolean;
        publicAddress: any;
    };
    active: boolean;
    chain: string;
    publicAddress: any;
    metadata: string;
    id: number;
    uniqueId?: string;
    protected objectType: string;
    constructor(tokQ?: IWallet);
    static createQuery(ipq: IWallet): WalletQuery;
}
