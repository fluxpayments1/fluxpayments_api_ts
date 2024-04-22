import { FluxIdentifier } from "../../flux_types";
import { RequestBodyBase } from "./";
export declare class CreateSessionRequest extends RequestBodyBase {
    _account: FluxIdentifier;
    loadClientData(id: FluxIdentifier): void;
}
