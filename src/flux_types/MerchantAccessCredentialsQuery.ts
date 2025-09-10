import { BaseQuery } from "./BaseQuery";
import { IMerchantAccessCredentialsQuery } from "./IMerchantAccessCredentialsQuery";
import { MerchantAccessCredentials } from "./MerchantAccessCredentials";

/**
 * This is an object that is used to query for merchant_access_credentialss.
 */
export class MerchantAccessCredentialsQuery extends BaseQuery<MerchantAccessCredentials> {
    public serialize() {
        return {
            id: this.id,
            privateKey: this.privateKey,
            customerPublicKey: this.customerPublicKey,
            publicKey: this.publicKey,
            publicDataKey: this.publicDataKey,
            aesKey: this.aesKey,
            username: this.username,
            password: this.password,
            userEmail: this.userEmail,
            createdAt: this.createdAt,
            merchantId: this.merchantId,
            twoFactAuthCode: this.twoFactAuthCode,
            twoFactAuthCodeUpdateTime: this.twoFactAuthCodeUpdateTime,
            passwordResetCode: this.passwordResetCode,
            passwordResetTries: this.passwordResetTries,
            passwordResetCodeUpdateTime: this.passwordResetCodeUpdateTime,
            activationStatus: this.activationStatus,
            isAccountLocked: this.isAccountLocked,
        }
    }
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
    objectType: string = "merchantAccessCredentials";

    public constructor(tokQ?: IMerchantAccessCredentialsQuery){
        super(MerchantAccessCredentials);
        Object.assign(this, tokQ);
    }


    public static createQuery(ipq:  IMerchantAccessCredentialsQuery) {
        return new MerchantAccessCredentialsQuery(ipq);
    }
}
