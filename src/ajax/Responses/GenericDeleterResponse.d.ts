import { FluxIdentifier } from "../../flux_types/FluxIdentifier";
import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class GenericDeleterResponse extends ResponseBodyBase {
    constructor();
    private _deletedObjIdList;
    get deletedObjIdList(): FluxIdentifier[];
    set deletedObjIdList(deletedObj: FluxIdentifier[]);
    getClientReturnValue(): FluxIdentifier[];
}
