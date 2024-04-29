export interface ResponseBody {
    setResponseJSON(json: string): ResponseBody;
    getClientReturnValue(): any;
    getMetaData(): any;
}
