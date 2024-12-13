export interface IWallet {
    uniqueId?: string;
    id?: number;
    metadata?: string;
    chain?: string;
    memoTag?: string;
    active?: boolean;
}
