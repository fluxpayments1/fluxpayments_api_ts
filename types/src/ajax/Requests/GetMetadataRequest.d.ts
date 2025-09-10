import { RequestBodyBase } from "./RequestBodyBase";
export declare class GetMetadataRequest extends RequestBodyBase {
    constructor();
    private _metadataName;
    loadClientData(metadataName: string): void;
}
