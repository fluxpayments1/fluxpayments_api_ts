import { RequestBodyBase } from "./RequestBodyBase";
import { IFlux } from "../../lib/IFlux";
export declare class GenericUpdaterRequest<T extends IFlux> extends RequestBodyBase {
    constructor();
    private _updatedObjects;
    get updatedObjects(): T[];
    set updatedObjects(product: T[]);
    loadClientData(product: T | T[]): void;
}
