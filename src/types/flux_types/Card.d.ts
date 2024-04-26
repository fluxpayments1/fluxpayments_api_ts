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
    static createInstanceLazy(acc: Partial<ICard>): Promise<Card>;
    /**
     * Will not create a card if working outside of the browser,
     * will just load the card if it exists.
     *
     * @param acc
     * @param accountSession
     * @returns
     */
    static createInstanceSafe(acc: Partial<ICard>): Promise<PaymentMethod>;
}
