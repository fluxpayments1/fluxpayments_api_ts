export interface ICard {
    oneTimeUseToken?: string;
    id?: number;
    uniqueId?: string;
    metadata?: string;
    accountSession: string;
    firstName?: string;
    lastName?: string;
    payType?: string;
    lastFour?: string;
    cardBrand?: string;
    phoneNumber?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    email?: string;
    country?: string;
    expiryDate: string;
    cardNumber: string;
    cvv: string;
}
