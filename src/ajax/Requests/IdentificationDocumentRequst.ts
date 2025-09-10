import { RequestBodyBase } from "./RequestBodyBase";
export class IdentificationDocumentRequest extends RequestBodyBase {

    private _identificationDocument : string;
    private _publicKey : string;
    private _password : string;
    private _fileNonce : string;

    get identificationDocument () : string {
        return this._identificationDocument
    }

    get publicKey () : string {
        return this._publicKey
    }

    get password () : string {
        return this._password
    }

    get fileNonce () : string {
        return this._fileNonce
    }

    set identificationDocument (id : string) {
        this._identificationDocument = id
    }

    set publicKey (pk: string) {
        this._publicKey = pk;
    }

    set password (pw : string) {
        this._password = pw
    }

    set fileNonce (fn : string) {
        this._fileNonce = fn;
    }


    public loadClientData(pk: string, pw : string, fn: string, id: string): void {
        this._publicKey = pk;
        this._password = pw;
        this._fileNonce = fn;
        this._identificationDocument = id;


    }


}