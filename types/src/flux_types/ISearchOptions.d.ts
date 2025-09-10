import { AdditionalSearchOptions } from "./AdditionalSearchOptions";
import { PaginationSupport } from "./PaginationSupport";
export interface ISearchOptions {
    pagination: PaginationSupport;
    additionalSearchOptions: AdditionalSearchOptions[];
    conditional: string;
}
