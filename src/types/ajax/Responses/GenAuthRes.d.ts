import { ResponseBodyBase } from "./ResponseBodyBase";
export declare class GenAuthRes extends ResponseBodyBase {
    _publicKey: string;
    get publicKey(): string;
    set publicKey(publicKey: string);
    getClientReturnValue(): string;
}
