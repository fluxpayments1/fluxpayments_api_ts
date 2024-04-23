import { FluxIdentifier } from "flux_types/FluxIdentifier";
import { RequestBodyBase } from "./RequestBodyBase";
export declare class CreateSessionRequest extends RequestBodyBase {
    _account: FluxIdentifier;
    loadClientData(id: FluxIdentifier): void;
}
