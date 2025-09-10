import { IMerchant } from "./IMerchant";
import { ISearchOptions } from ".";
export type IMerchantQuery = Partial<IMerchant> & Partial<ISearchOptions>;
