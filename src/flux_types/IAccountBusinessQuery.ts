import { IAccountBusiness } from "./IAccountBusiness";
import { ISearchOptions } from ".";

export type IAccountBusinessQuery = Partial<IAccountBusiness> & Partial<ISearchOptions>;
