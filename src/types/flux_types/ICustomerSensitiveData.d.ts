export interface ICustomerSensitiveData {
    id?: number;
    lastFour?: string;
    token?: string;
    email?: string;
    accountType?: string;
    oneTimeUseToken?: string;
    type?: string;
    isAuthorized?: boolean;
    firstName?: string;
    lastName?: string;
    shippingAddressId?: number;
    bankName?: string;
    accountSession?: string;
    encryptedAESKey?: string;
    encryptedPayload?: string;
    nonce?: string;
    objectType?: string;
}
