import { IMerchant } from "./IMerchant";
import { IMerchantNetworkCounts } from "./IMerchantNetworkCounts";
import { ISearchOptions } from ".";

export type IMerchantQuery = Partial<IMerchant> & Partial<ISearchOptions>;
