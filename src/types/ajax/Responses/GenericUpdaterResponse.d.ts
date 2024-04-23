import { ResponseBodyBase } from "./ResponseBodyBase";
import { FluxType } from "../../flux_types/FluxType";
export declare class GenericUpdaterResponse<T extends FluxType> extends ResponseBodyBase {
    type: new (fbo: any) => T;
    _updatedObjects: T[];
    constructor(type: new (fbo: any) => T);
    get updatedObjects(): T[];
    set updatedObjects(products: T[]);
    getClientReturnValue(): T[];
}
