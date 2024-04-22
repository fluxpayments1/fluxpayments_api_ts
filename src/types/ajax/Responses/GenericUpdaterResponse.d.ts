import { ResponseBodyBase } from "./";
import { FluxType } from "../../flux_types/";
export declare class GenericUpdaterResponse<T extends FluxType> extends ResponseBodyBase {
    type: new (fbo: any) => T;
    _updatedObjects: T[];
    constructor(type: new (fbo: any) => T);
    get updatedObjects(): T[];
    set updatedObjects(products: T[]);
    getClientReturnValue(): T[];
}
