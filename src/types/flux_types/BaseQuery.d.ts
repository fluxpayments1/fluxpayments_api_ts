import { AdditionalSearchOptions, PaginationSupport } from "./";
export declare abstract class BaseQuery {
    pagination: PaginationSupport;
    additionalSearchOptions: AdditionalSearchOptions[];
    lookupPage: string | undefined;
    protected abstract objectType: string;
    abstract serialize(): any;
}
