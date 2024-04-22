import { FluxIdentifier } from "../../flux_types/";
import { ResponseBodyBase } from "./";
export declare class GenericDeleterResponse extends ResponseBodyBase {
    constructor();
    private _deletedObjIdList;
    get deletedObjIdList(): FluxIdentifier[];
    set deletedObjIdList(deletedObj: FluxIdentifier[]);
    getClientReturnValue(): FluxIdentifier[];
}
