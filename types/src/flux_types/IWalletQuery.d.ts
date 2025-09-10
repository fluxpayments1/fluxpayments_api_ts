import { ISearchOptions } from "./ISearchOptions";
import { IWallet } from "./IWallet";
export type IWalletQuery = Partial<IWallet> & Partial<ISearchOptions>;
