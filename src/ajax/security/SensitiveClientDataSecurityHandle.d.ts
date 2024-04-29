import { SecurityHandlerBase } from "./SecurityHandlerBase";
export declare class SensitiveClientDataSecurityHandle extends SecurityHandlerBase {
    private static nonceKeyMap;
    encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
    private _publicKey;
    private _accountSession;
    get publicKey(): string;
    set publicKey(value: string);
    get accountSession(): string;
    set accountSession(as: string);
    constructor(pk: string, as: string);
    decodeResponse(response: string, headers?: any): Promise<string>;
    createHeaders(): Promise<Map<string, string>>;
}
