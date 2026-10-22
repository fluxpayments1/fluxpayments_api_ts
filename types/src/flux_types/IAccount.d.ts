import { Address } from "./Address";
import { CustomerWallet } from "./CustomerWallet";
export interface IAccount {
    addresses?: Address[];
    customerWallets?: CustomerWallet[];
    id?: number;
    uniqueId?: string;
    metadata?: string;
    accountEmail?: string;
    currency?: string;
    processingFeeExempt?: boolean;
    serviceFeeExempt?: boolean;
    disableAchPassthrough?: boolean;
    disableCardPassthrough?: boolean;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    phoneNumber?: string;
    businessName?: string;
}
