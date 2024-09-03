import { ICustomerWallet } from "./ICustomerWallet";
import { ISearchOptions } from "./ISearchOptions";
export type ICustomerWalletQuery = Partial<ICustomerWallet> & Partial<ISearchOptions>;
