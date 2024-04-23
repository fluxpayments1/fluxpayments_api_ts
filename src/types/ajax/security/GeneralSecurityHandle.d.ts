import { SecurityHandlerBase } from "./SecurityHandlerBase";
export declare class GeneralSecurityHandle extends SecurityHandlerBase {
    private _publickey;
    get publicKey(): string;
    set publicKey(pk: string);
    constructor(pk: string);
    decodeResponse(response: string): Promise<string>;
    encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
    createHeaders(): Promise<Map<string, string>>;
}
