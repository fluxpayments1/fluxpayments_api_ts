import { FluxComms } from "./Flux";
import { SecurityHandlerBase } from "../ajax/security/SecurityHandlerBase"
import { GenAuthRes } from "../ajax/Responses/GenAuthRes"
import { CMMT } from "../ajax/lib/CMMT"
import { GenAuthDataSecurityHandle } from "../ajax/security/GenAuthDataSecurityHandle"
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle"
import { IdentificationDocumentRequest } from "../ajax/Requests/IdentificationDocumentRequst";
import { MerchantAccessCredentialsQuery } from "../flux_types/MerchantAccessCredentialsQuery";
import { MerchantAccessCredentials } from "../flux_types/MerchantAccessCredentials";
import { GetMacRequest } from "../ajax/Requests/GetMacRequest";
import { GenericGetterResponse } from '../ajax/Responses/GenericGetterResponse'
import { GenAuthReq } from "../ajax/Requests/GenAuthReq";

export class FluxTokenBackend<T extends SecurityHandlerBase> extends FluxComms<T> {

    protected fb: T;




    public getWebsitePublicKey(email): Promise<string> {
        return CMMT.fetch<string, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "getPublicKeyFromEmail",
            "POST",
            new GenAuthDataSecurityHandle(),
            email
        );
    }

    public async getMacs(query: MerchantAccessCredentialsQuery): Promise<MerchantAccessCredentials[]> {
        return CMMT.fetchGeneric<GetMacRequest, GenericGetterResponse<MerchantAccessCredentials>, MerchantAccessCredentials>(
            GetMacRequest,
            GenericGetterResponse<MerchantAccessCredentials>,
            MerchantAccessCredentials,
            "getMerchantAccessCredentials",
            "POST",
            this._securityHandle,
            query
        );
    }



    public submitIdentityDocument(pubK, password, fileNonce, document): Promise<void> {
        return CMMT.fetch<void, IdentificationDocumentRequest, GenAuthRes>(
            IdentificationDocumentRequest,
            GenAuthRes,
            "signUpDocument",
            "POST",
            new GeneralSecurityHandle(pubK),
            pubK,
            password,
            fileNonce,
            document
        );
    }

    public authorizeWebsiteUser(): Promise<void> {
        return CMMT.fetch<void, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "authorizeWebsiteUser",
            "POST",
            this._securityHandle
        );
    }

    public signUp(): Promise<void> {
        return CMMT.fetch<void, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "signUp",
            "POST",
            this._securityHandle
        );
    }

    public async updateAuthorizedUsersEncKeys(): Promise<void> {
        //Check whether or not the cookie can be reauthed
        await CMMT.fetch<void, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "updateAuthorizedUsersEncKeys",
            "POST",
            this._securityHandle
        );
    }


    public static getFluxTokebBackendInstance <T extends SecurityHandlerBase>() : FluxTokenBackend<T> {
        if (FluxTokenBackend.fb) return FluxTokenBackend.fb as FluxTokenBackend<T>;

        FluxTokenBackend.fb = new FluxTokenBackend();
        return FluxTokenBackend.fb as FluxTokenBackend<T>
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    set isAuthenticated(b: boolean) {
        this._isAuthenticated = b;
    }


    public async getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string> {
        return CMMT.fetch<string, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "getGeneralAuthorization",
            "POST",
            new GenAuthDataSecurityHandle(),
            customerPublicKey
        );
    }

}