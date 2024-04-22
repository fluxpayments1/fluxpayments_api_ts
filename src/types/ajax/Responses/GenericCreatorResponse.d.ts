import { FluxIdentifier } from "../../flux_types/";
import { ResponseBodyBase } from "./";
export declare class GenericCreatorResponse extends ResponseBodyBase {
    _createdObjects: FluxIdentifier[];
    get createdObjects(): FluxIdentifier[];
    set createdObjects(fi: FluxIdentifier[]);
    getClientReturnValue(): FluxIdentifier[];
}
