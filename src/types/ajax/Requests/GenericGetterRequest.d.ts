import { BaseQuery } from "../../flux_types/BaseQuery";
import { RequestBodyBase } from "./RequestBodyBase";
import { AdditionalSearchOptions } from "../../flux_types/AdditionalSearchOptions";
import { PaginationSupport } from "../../flux_types/PaginationSupport";
import { FluxType } from "../../flux_types/FluxType";
export declare class GenericGetterRequest<U extends FluxType, T extends BaseQuery<U>> extends RequestBodyBase {
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
