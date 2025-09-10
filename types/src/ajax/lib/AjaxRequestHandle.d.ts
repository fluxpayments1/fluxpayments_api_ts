import { SecurityHandler } from "../../ajax/security/SecurityHandler";
import { RequestBody } from "../../ajax/Requests/RequestBody";
import { ResponseBody } from "../../ajax/Responses/ResponseBody";
export interface ARH {
    method: string;
    path: string;
}
export declare class AjaxRequestHandle<T extends RequestBody, U extends ResponseBody, V extends SecurityHandler> implements ARH {
    _desc: string;
    _mthd: string;
    _pth: string;
    _req: T;
    _res: U;
    _sec: V;
    constructor(req: new () => T, res: new (r?: any) => U, sec: V, type?: any);
    get method(): string;
    set method(mthd: string);
    get path(): string;
    set path(pth: string);
    get request(): T;
    set request(req: T);
    get response(): U;
    set response(res: U);
    get securityHandler(): V;
    set securityHandler(sec: V);
}
