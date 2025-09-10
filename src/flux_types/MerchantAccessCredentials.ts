import { BaseQuery } from './';
import { FluxType } from './FluxType';
import _cloneDeep from 'lodash/cloneDeep';
import { MerchantAccessCredentialsQuery } from './MerchantAccessCredentialsQuery';

export class MerchantAccessCredentials extends FluxType {
    obName: string = "MerchantAccessCredentials";

    getDispName(): string {
        return this.customerPublicKey
    }

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
            merchantId: this.merchantId,
            twoFactAuthCode: this.twoFactAuthCode,
            twoFactAuthCodeUpdateTime: this.twoFactAuthCodeUpdateTime,
            passwordResetCode: this.passwordResetCode,
            passwordResetTries: this.passwordResetTries,
            passwordResetCodeUpdateTime: this.passwordResetCodeUpdateTime,
            activationStatus: this.activationStatus,
            isAccountLocked: this.isAccountLocked,
        };
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
    protected objectType: string = "merchantAccessCredentials";


    static async queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U, cfs?): Promise<any[]> {
        if (q instanceof MerchantAccessCredentialsQuery) {
            return (await cfs.getMacs(q))
        }
        else throw new Error("didn't pass in a MerchantAccessCredentials")

    }


    public constructor(merchantAccessCredentials?: Partial<MerchantAccessCredentials>) {
        super(merchantAccessCredentials, MerchantAccessCredentials);
        Object.assign(this, merchantAccessCredentials)
    }

}
