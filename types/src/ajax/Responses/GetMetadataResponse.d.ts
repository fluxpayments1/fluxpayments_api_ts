import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class GetMetadataResponse extends ResponseBodyBase {
    constructor();
    _metadataMap: Record<string, any>;
    getClientReturnValue(): Record<string, any>;
}
