import { SecurityHandlerBase } from "./";
export declare class GenAuthDataSecurityHandle extends SecurityHandlerBase {
    encodeRequest(request: string): Promise<string>;
    constructor();
    decodeResponse(response: string): Promise<string>;
    createHeaders(): Promise<Map<string, string>>;
}
