import { Currency } from "./Currency";
import { Product } from "./Product";
import { Wallet } from "./Wallet";
export interface IPaymentLink {
    id?: number;
    metadata?: string;
    uniqueId?: string;
    redirectUrl: string;
    oneTimeUse: boolean;
    liveStatus?: any;
    wallets?: Wallet[];
    currencies?: Currency[];
    products?: Product[];
    removeOnSuccess?: any;
    paymentLink?: string;
    accountId?: number;
}
