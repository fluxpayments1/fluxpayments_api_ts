import { AdditionalSearchOptions, BaseQuery, PaginationSupport } from "../../flux_types/";
import { RequestBodyBase } from "./";
export declare class GenericGetterRequest<T extends BaseQuery> extends RequestBodyBase {
    _queryObj: T;
    _additionalSearchOptions: AdditionalSearchOptions[];
    _pagination: PaginationSupport;
    _lookupPage: string;
    get lookupPage(): string;
    set lookupPage(s: string);
    get additionalSearchOptions(): AdditionalSearchOptions[];
    set additionalSearchOptions(additionalSearchOptions: AdditionalSearchOptions[]);
    get pagination(): PaginationSupport;
    set pagination(paginationSupport: PaginationSupport);
    get queryObj(): T;
    set queryObj(prodQuery: T);
    loadClientData(prodQuery: T): void;
}
