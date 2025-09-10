import { RequestBodyBase } from "./RequestBodyBase";
export declare class IdentificationDocumentRequest extends RequestBodyBase {
    private _identificationDocument;
    private _publicKey;
    private _password;
    private _fileNonce;
    get identificationDocument(): string;
    get publicKey(): string;
    get password(): string;
    get fileNonce(): string;
    set identificationDocument(id: string);
    set publicKey(pk: string);
    set password(pw: string);
    set fileNonce(fn: string);
    loadClientData(pk: string, pw: string, fn: string, id: string): void;
}
