import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetMetadataRequest extends RequestBodyBase {
    constructor();
    private _metadataNames;
    loadClientData(metadataNames: string[]): void;
}
