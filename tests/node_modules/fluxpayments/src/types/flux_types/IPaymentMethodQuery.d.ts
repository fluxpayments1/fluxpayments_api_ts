import { IPaymentMethod } from "./IPaymentMethod";
import { ISearchOptions } from "./ISearchOptions";
export type IPaymentMethodQuery = Partial<IPaymentMethod> & Partial<ISearchOptions>;
