import { FluxType } from "../../flux_types/FluxType";
import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class GenericGetterResponse<T extends FluxType> extends ResponseBodyBase {
    _objects: T[];
    type: new (fbo: FluxType) => T;
    get objects(): T[];
    constructor(type: new () => T);
    set objects(products: T[]);
    getClientReturnValue(): T[];
}
