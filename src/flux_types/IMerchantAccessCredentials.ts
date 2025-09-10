export interface IMerchantAccessCredentials {
    id?: number;
    privateKey?: string;
    customerPublicKey?: string;
    publicKey?: string;
    publicDataKey?: string;
    aesKey?: string;
    username?: string;
    password?: string;
    userEmail?: string;
    merchantId?: number;
    twoFactAuthCode?: string;
    twoFactAuthCodeUpdateTime?: Date;
    passwordResetCode?: string;
    passwordResetTries?: number;
    passwordResetCodeUpdateTime?: Date;
    activationStatus?: any;
    isAccountLocked?: any;
}
