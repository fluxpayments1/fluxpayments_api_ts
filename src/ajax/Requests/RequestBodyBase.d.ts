import { RequestBody } from "./RequestBody";
export declare abstract class RequestBodyBase implements RequestBody {
    protected serializeRecursively(object: any): any;
    abstract loadClientData(...args: any): void;
    getRequestAsString(): string;
    constructor();
}
