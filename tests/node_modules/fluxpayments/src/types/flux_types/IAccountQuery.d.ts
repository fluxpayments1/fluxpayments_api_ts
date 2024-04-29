import { IAccount } from "./IAccount";
import { ISearchOptions } from "./ISearchOptions";
export type IAccountQuery = Partial<IAccount> & Partial<ISearchOptions>;
