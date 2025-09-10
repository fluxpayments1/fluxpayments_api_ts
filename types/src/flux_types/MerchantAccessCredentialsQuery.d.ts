import { BaseQuery } from "./BaseQuery";
import { IMerchantAccessCredentialsQuery } from "./IMerchantAccessCredentialsQuery";
import { MerchantAccessCredentials } from "./MerchantAccessCredentials";
/**
 * This is an object that is used to query for merchant_access_credentialss.
 */
export declare class MerchantAccessCredentialsQuery extends BaseQuery<MerchantAccessCredentials> {
    serialize(): {
        id: number;
        privateKey: string;
        customerPublicKey: string;
        publicKey: string;
        publicDataKey: string;
        aesKey: string;
        username: string;
        password: string;
        userEmail: string;
        createdAt: number;
        merchantId: number;
        twoFactAuthCode: string;
        twoFactAuthCodeUpdateTime: Date;
        passwordResetCode: string;
        passwordResetTries: number;
        passwordResetCodeUpdateTime: Date;
        activationStatus: any;
        isAccountLocked: any;
    };
    id: number;
    privateKey: string;
    customerPublicKey: string;
    publicKey: string;
    publicDataKey: string;
    aesKey: string;
    username: string;
    password: string;
    userEmail: string;
    merchantId: number;
    twoFactAuthCode: string;
    twoFactAuthCodeUpdateTime: Date;
    passwordResetCode: string;
    passwordResetTries: number;
    passwordResetCodeUpdateTime: Date;
    activationStatus: any;
    isAccountLocked: any;
    objectType: string;
    constructor(tokQ?: IMerchantAccessCredentialsQuery);
    static createQuery(ipq: IMerchantAccessCredentialsQuery): MerchantAccessCredentialsQuery;
}
