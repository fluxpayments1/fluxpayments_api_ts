import { AdditionalSearchOptions } from "./AdditionalSearchOptions";
import { FluxType } from "./FluxType";
import { PaginationSupport } from "./PaginationSupport";
export declare abstract class BaseQuery<T extends FluxType> {
    constructor(attObject: new (o?: any) => T);
    conditional: "OR" | "AND";
    attachedObject: new (o?: any) => T;
    pagination: PaginationSupport;
    additionalSearchOptions: AdditionalSearchOptions[];
    lookupPage: string | undefined;
    protected abstract objectType: string;
    abstract serialize(): any;
}
