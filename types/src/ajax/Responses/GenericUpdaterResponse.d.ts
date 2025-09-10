import { ResponseBodyBase } from "./ResponseBodyBase";
import { IFlux } from "../../lib/IFlux";
export declare class GenericUpdaterResponse<T extends IFlux> extends ResponseBodyBase {
    type: new (fbo: IFlux) => T;
    _updatedObjects: T[];
    constructor(type: new (fbo: any) => T);
    get updatedObjects(): T[];
    set updatedObjects(products: T[]);
    getClientReturnValue(): T[];
}
