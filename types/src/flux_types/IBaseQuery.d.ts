import { AdditionalSearchOptions } from "./AdditionalSearchOptions";
import { PaginationSupport } from "./PaginationSupport";
export interface IBaseQuery<T> {
    conditional: "OR" | "AND";
    attachedObject: new (o?: any) => T;
    createdAt: number;
    pagination: PaginationSupport;
    additionalSearchOptions: AdditionalSearchOptions[];
    lookupPage: string | undefined;
    objectType: string;
    serialize(): any;
}
