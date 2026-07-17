import { IBusiness } from "./IBusiness";
import { ISearchOptions } from ".";

export type IBusinessQuery = Partial<IBusiness> & Partial<ISearchOptions>;
