import { ISearchOptions } from "./ISearchOptions";
import { ITransaction } from "./ITransaction";
export type ITransactionQuery = Partial<ITransaction> & Partial<ISearchOptions>;
