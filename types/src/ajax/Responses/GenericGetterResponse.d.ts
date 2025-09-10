import { IFlux } from "../../lib/IFlux";
import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class GenericGetterResponse<T extends IFlux> extends ResponseBodyBase {
    _objects: T[];
    _count: number;
    type: new (fbo: IFlux) => T;
    get objects(): T[];
    constructor(type: new () => T);
    set objects(products: T[]);
    getClientReturnValue(): T[];
}
