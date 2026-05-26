import { RequestBodyBase } from "./RequestBodyBase";
export declare class ForthMappingActionRequest extends RequestBodyBase {
    private mappingId?;
    private paused?;
    constructor();
    loadClientData(mappingId?: number, paused?: boolean): void;
    getRequestAsString(): string;
}
