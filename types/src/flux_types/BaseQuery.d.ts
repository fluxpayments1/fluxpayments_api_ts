import { AdditionalSearchOptions } from "./AdditionalSearchOptions";
import { PaginationSupport } from "./PaginationSupport";
import { IBaseQuery } from "./IBaseQuery";
export declare abstract class BaseQuery<T> implements IBaseQuery<T> {
    constructor(attObject: new (o?: any) => T);
    conditional: "OR" | "AND";
    attachedObject: new (o?: any) => T;
    createdAt: number;
    pagination: PaginationSupport;
    additionalSearchOptions: AdditionalSearchOptions[];
    lookupPage: string | undefined;
    abstract objectType: string;
    abstract serialize(): any;
}
