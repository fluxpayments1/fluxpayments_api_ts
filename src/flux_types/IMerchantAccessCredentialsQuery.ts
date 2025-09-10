import { IMerchantAccessCredentials } from "./IMerchantAccessCredentials";
import { ISearchOptions } from ".";

export type IMerchantAccessCredentialsQuery = Partial<IMerchantAccessCredentials> & Partial<ISearchOptions>;
