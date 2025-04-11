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
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    expiryDate: string;
    cardNumber: string;
    cvv: string;
}
