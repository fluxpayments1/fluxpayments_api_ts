import { RequestBodyBase } from "./";
export declare class GenAuthReq extends RequestBodyBase {
    _customerPublicKey: string;
    _additionalInformation: string;
    get additionalInformation(): string;
    set additionalInformation(a: string);
    get customerPublicKey(): string;
    set customerPublicKey(customerPublicKey: string);
    loadClientData(customerPublicKey: string): void;
}
