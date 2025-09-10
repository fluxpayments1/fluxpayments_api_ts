import { RequestBodyBase } from "./RequestBodyBase";
import { AdditionalSearchOptions } from "../../flux_types/AdditionalSearchOptions";
import { PaginationSupport } from "../../flux_types/PaginationSupport";
import { IFlux } from "../../lib/IFlux";
import { IBaseQuery } from "../../flux_types/IBaseQuery";
export declare class GenericGetterRequest<U extends IFlux, T extends IBaseQuery<U>> extends RequestBodyBase {
    _queryObj: T;
    _additionalSearchOptions: AdditionalSearchOptions[];
    _pagination: PaginationSupport;
    _lookupPage: string;
    _conditional: string;
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
