import { ITransactionDetails } from "./ITransactionDetails";
import { ISearchOptions } from ".";
export type ITransactionDetailsQuery = Partial<ITransactionDetails> & Partial<ISearchOptions>;
