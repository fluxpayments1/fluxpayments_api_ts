import { RequestBodyBase } from "./RequestBodyBase";
import { FluxType } from "../../flux_types/FluxType";
export declare class GenericUpdaterRequest<T extends FluxType> extends RequestBodyBase {
    constructor();
    private _updatedObjects;
    get updatedObjects(): T[];
    set updatedObjects(product: T[]);
    loadClientData(product: T | T[]): void;
}
