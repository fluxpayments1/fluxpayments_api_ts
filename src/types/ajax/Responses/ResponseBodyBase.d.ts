import { ResponseBody } from "./";
export declare abstract class ResponseBodyBase implements ResponseBody {
    _status: number;
    _metadata: any;
    getMetaData(): any;
    get status(): number;
    set status(status: number);
    sanitizeResults<T>(clazz: new (op?: any) => T, obj: any): void;
    setResponseJSON(json: string): ResponseBody;
    abstract getClientReturnValue(): any;
}
