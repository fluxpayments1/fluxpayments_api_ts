import { IProduct } from "./IProduct";
import { ISearchOptions } from "./ISearchOptions";
export type IProductQuery = Partial<IProduct> & Partial<ISearchOptions>;
