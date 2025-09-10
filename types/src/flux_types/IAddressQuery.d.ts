import { IAddress } from "./IAddress";
import { ISearchOptions } from "./ISearchOptions";
export type IAddressQuery = Partial<IAddress> & Partial<ISearchOptions>;
