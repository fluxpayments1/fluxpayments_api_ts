import { IBankAccount, ICard } from "./";
export type IPaymentMethod = Partial<ICard> & Partial<IBankAccount>;
