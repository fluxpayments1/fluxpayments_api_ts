import { ICard } from "./ICard";
import { PaymentMethod } from "./PaymentMethod";
export declare class Card extends PaymentMethod implements ICard {
    constructor(c: Partial<ICard>);
    accountSession: string;
    lastFour?: string;
    expMonth: string;
    expYear: string;
    cardNumber: string;
    cvv: string;
}
