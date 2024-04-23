import { IBankAccount } from "./IBankAccount";
import { ICard } from "./ICard";
export type IPaymentMethod = Partial<ICard> & Partial<IBankAccount>;
