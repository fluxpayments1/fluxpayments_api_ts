import { Observable, of } from "rxjs";
import { AxiosHeaders } from "axios";
import { SecurityHandlerBase } from "./SecurityHandlerBase";


export class WebsiteSignUpSecurityHandle extends SecurityHandlerBase {
    public async encodeRequest(request: string, headers: Map<string, string>): Promise<string> {
        return '{"encData": ""}';
    }

    private _serverEncryptionKey: string
    private _clientDecryptionKey: string
    private _email: string
    private _token: string;
    private _password: string;
    private _firstName: string;
    private _middleName: string;
    private _lastName: string;
    private _phoneNumber: string;
    private _document: string;
    private _businessType: string;
    private _businessLegalName: string;
    private _serviceCategory: string;
    private _businessDescription: string;
    private _socialSecurityNumber: string;
    private _ein: string;
    private _address: string;
    private _city: string;
    private _state: string;
    private _zipCode: string;
    private _file: string;
    private _fileNonce: string;
    private _walletAddress: string;
    private _walletType: string;
    private _defaultCurrency: string;

    get defaultCurrency () : string {
        return this._defaultCurrency
    }

    set defaultCurrency (dc: string) {
        this._defaultCurrency = dc
    }

    get walletAddress () : string {
        return this._walletAddress
    }

    get walletType () : string {
        return this._walletType
    }

    set walletAddress (wa: string) {
        this._walletAddress = wa
    }

    set walletType (wt: string) {
        this._walletType = wt;
    }

    get fileNonce (): string {
        return this._fileNonce
    }

    set fileNonce(fn: string) {
        this._fileNonce = fn
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get middleName(): string {
        return this._middleName;
    }

    set middleName(value: string) {
        this._middleName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get document(): string {
        return this._document;
    }

    set document(value: string) {
        this._document = value;
    }

    get businessType(): string {
        return this._businessType;
    }

    set businessType(value: string) {
        this._businessType = value;
    }

    get businessLegalName(): string {
        return this._businessLegalName;
    }

    set businessLegalName(value: string) {
        this._businessLegalName = value;
    }

    get serviceCategory(): string {
        return this._serviceCategory;
    }

    set serviceCategory(value: string) {
        this._serviceCategory = value;
    }

    get businessDescription(): string {
        return this._businessDescription;
    }

    set businessDescription(value: string) {
        this._businessDescription = value;
    }

    get socialSecurityNumber(): string {
        return this._socialSecurityNumber;
    }

    set socialSecurityNumber(value: string) {
        this._socialSecurityNumber = value;
    }

    get ein(): string {
        return this._ein;
    }

    set ein(value: string) {
        this._ein = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get zipCode(): string {
        return this._zipCode;
    }

    set zipCode(value: string) {
        this._zipCode = value;
    }

    set password (p: string) {
        this._password = p
    }

    get password() {
        return this._password
    }

    get file() {
        return this._file
    }

    set file(f: string) {
        this._file = f;
    }

    constructor(email: string, rsaKeyPair: {
        publicKey: string,
        privateKey: string
    }, token: string) {
        super()
        this._email = email;
        this._serverEncryptionKey = rsaKeyPair.publicKey
        this._clientDecryptionKey = rsaKeyPair.privateKey
        this._token = token
    }

    public async decodeResponse(response: string, headers?: AxiosHeaders): Promise<string> {

        if (headers.get("X-Error-Msg")) throw headers.get("X-Error-Msg")

        localStorage.setItem("PUB_KEY", headers.get("X-Key").toString())

        return response;

    }

    public async createHeaders(): Promise<Map<string, string>> {
        let headersMap = new Map<string, string>();

        if (this._password) {
            headersMap.set("X-Key", localStorage.getItem("PUB_KEY"))
            headersMap.set("X-Password", this._password)
            headersMap.set("X-Email", this._email)
            headersMap.set("X-First-Name", this._firstName);
            headersMap.set("X-Middle-Name", this._middleName);
            headersMap.set("X-Last-Name", this._lastName);
            headersMap.set("X-Phone-Number", this._phoneNumber);
            headersMap.set("X-Business-Legal-Name", this._businessLegalName);
            headersMap.set("X-Address", this._address);
            headersMap.set("X-Default-Currency", this._defaultCurrency)
            headersMap.set("X-City", this._city);
            headersMap.set("X-State", this._state);
            headersMap.set("X-Zip-Code", this._zipCode);
            headersMap.set("X-Wallet-Address", this._walletAddress);
            headersMap.set("X-Wallet-Type", this._walletType);
        } else {
            headersMap.set("X-Enc-Key", this._serverEncryptionKey);
            headersMap.set("X-Email", this._email)
            headersMap.set("X-Token", this._token)
        }

 
        return headersMap
    }

}