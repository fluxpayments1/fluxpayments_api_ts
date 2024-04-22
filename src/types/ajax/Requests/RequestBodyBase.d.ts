import { RequestBody } from "./";
export declare abstract class RequestBodyBase implements RequestBody {
    abstract loadClientData(...args: any): void;
    getRequestAsString(): string;
    constructor();
    loadObjectType(obj: any): void;
}
