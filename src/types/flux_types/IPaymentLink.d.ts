import { Currency } from "./Currency";
import { Product } from "./Product";
import { Wallet } from "./Wallet";
export interface IPaymentLink {
    id?: number;
    metadata?: string;
    uniqueId?: string;
    redirectUrl: string;
    oneTimeUse: boolean;
    taxRatesId: number;
    requireShippingAddress: boolean;
    currentStatus: string;
    serviceFee: number;
    liveStatus?: any;
    wallets?: Wallet[];
    currencies?: Currency[];
    products?: Product[];
    requireAccountInformation: boolean;
    confidenceLevel: number;
    removeOnSuccess?: any;
    paymentLink?: string;
    accountId?: number;
    emailNotificationDisabled: boolean;
}
