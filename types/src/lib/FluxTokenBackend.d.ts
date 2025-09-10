import { FluxComms } from "./Flux";
import { SecurityHandlerBase } from "../ajax/security/SecurityHandlerBase";
import { MerchantAccessCredentialsQuery } from "../flux_types/MerchantAccessCredentialsQuery";
import { MerchantAccessCredentials } from "../flux_types/MerchantAccessCredentials";
export declare class FluxTokenBackend<T extends SecurityHandlerBase> extends FluxComms<T> {
    protected fb: T;
    getWebsitePublicKey(email: any): Promise<string>;
    getMacs(query: MerchantAccessCredentialsQuery): Promise<MerchantAccessCredentials[]>;
    submitIdentityDocument(pubK: any, password: any, fileNonce: any, document: any): Promise<void>;
    authorizeWebsiteUser(): Promise<void>;
    signUp(): Promise<void>;
    updateAuthorizedUsersEncKeys(): Promise<void>;
    static getFluxTokebBackendInstance<T extends SecurityHandlerBase>(): FluxTokenBackend<T>;
    get isAuthenticated(): boolean;
    set isAuthenticated(b: boolean);
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
}
