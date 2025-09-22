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
    phoneNumber?: string;
    bankName?: string;
    accountSession?: string;
    encryptedAESKey?: string;
    encryptedPayload?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    nonce?: string;
    objectType?: string;
    transactionId?: number;
    approvalStatus?: string;
}
