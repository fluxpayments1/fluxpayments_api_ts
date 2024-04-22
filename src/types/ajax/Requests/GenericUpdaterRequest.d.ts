import { RequestBodyBase } from "./";
import { FluxType } from "../../flux_types/";
export declare class GenericUpdaterRequest<T extends FluxType> extends RequestBodyBase {
    constructor();
    private _updatedObjects;
    get updatedObjects(): T[];
    set updatedObjects(product: T[]);
    loadClientData(product: T | T[]): void;
}
