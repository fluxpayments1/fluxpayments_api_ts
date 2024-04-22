import { FluxIdentifier } from "../../flux_types";
import { RequestBodyBase } from "./";
export declare class GenericDeleterRequest extends RequestBodyBase {
    constructor();
    private _deletedObjIdList;
    get deletedObjIdList(): FluxIdentifier[];
    set deletedObjIdList(prodIds: FluxIdentifier[]);
    loadClientData(prodIds: FluxIdentifier | FluxIdentifier[]): void;
}
