import { AdditionalSearchOptions } from "./AdditionalSearchOptions";
import { FluxType } from "./FluxType";
import { PaginationSupport } from "./PaginationSupport";
export declare abstract class BaseQuery {
    attachedObject: typeof FluxType;
    pagination: PaginationSupport;
    additionalSearchOptions: AdditionalSearchOptions[];
    lookupPage: string | undefined;
    protected abstract objectType: string;
    abstract serialize(): any;
}
