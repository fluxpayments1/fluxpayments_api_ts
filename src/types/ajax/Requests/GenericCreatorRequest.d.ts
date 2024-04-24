import { RequestBodyBase } from "./RequestBodyBase";
export declare class GenericCreatorRequest extends RequestBodyBase {
    constructor();
    private _createdObjects;
    get createdObjects(): any[];
    set createdObjects(co: any[]);
    loadClientData(co: any | any[]): void;
}
