import { FluxIdentifier } from "../../flux_types/FluxIdentifier";
import { RequestBodyBase } from "./RequestBodyBase";
export declare class GenericDeleterRequest extends RequestBodyBase {
    constructor();
    private _deletedObjIdList;
    get deletedObjIdList(): FluxIdentifier[];
    set deletedObjIdList(prodIds: FluxIdentifier[]);
    loadClientData(prodIds: FluxIdentifier | FluxIdentifier[]): void;
}
