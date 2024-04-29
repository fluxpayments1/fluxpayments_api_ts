import { FluxIdentifier } from "../../flux_types/FluxIdentifier";
import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class GenericCreatorResponse extends ResponseBodyBase {
    _createdObjects: FluxIdentifier[];
    get createdObjects(): FluxIdentifier[];
    set createdObjects(fi: FluxIdentifier[]);
    getClientReturnValue(): FluxIdentifier[];
}
