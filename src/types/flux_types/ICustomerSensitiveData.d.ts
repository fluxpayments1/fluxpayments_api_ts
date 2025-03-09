export interface ICustomerSensitiveData {
    id?: number;
    lastFour?: string;
    token?: string;
    email?: string;
    accountType?: string;
    type?: string;
    isAuthorized?: boolean;
    firstName?: string;
    lastName?: string;
    bankName?: string;
    accountSession?: string;
    encryptedAESKey?: string;
    encryptedPayload?: string;
    nonce?: string;
    objectType?: string;
}
