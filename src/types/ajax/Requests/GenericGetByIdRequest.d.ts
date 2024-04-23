import { RequestBodyBase } from "./RequestBodyBase";
export declare class GenericGetByIdRequest extends RequestBodyBase {
    constructor();
    private _fluxIdentifiers;
    get fluxIdentifiers(): any[];
    set fluxIdentifiers(co: any[]);
    loadClientData(co: any | any[]): void;
}
