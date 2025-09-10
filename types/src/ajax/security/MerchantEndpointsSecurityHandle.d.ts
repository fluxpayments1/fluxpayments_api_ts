import { SecurityHandlerBase } from "./SecurityHandlerBase";
export declare class MerchantEndpointsSecurityHandle extends SecurityHandlerBase {
    encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
    private static _nonceMap;
    private _publicKey;
    private _privateKey;
    private _username;
    private _password;
    get publicKey(): string;
    set publicKey(value: string);
    constructor(pk: string, prk: string, un: string, pw: string);
    decodeResponse(response: string, headers?: any): Promise<string>;
    createHeaders(): Promise<Map<string, string>>;
}
