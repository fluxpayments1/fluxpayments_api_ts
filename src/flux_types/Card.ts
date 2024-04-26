/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FluxType } from "./FluxType";
import { ICard } from "./ICard";
import { PaymentMethod } from "./PaymentMethod";


export class Card extends PaymentMethod implements ICard {
    public constructor (c : Partial<ICard>) {
        super(c)
        this.payType = "CARD"
    }
    accountSession: string;
    lastFour?: string;
    expMonth: string;
    expYear: string;
    cardNumber: string;
    cvv: string;

    public static async createInstanceLazy(acc: Partial<ICard>) {
        return await PaymentMethod.instantiateLazyInstance(acc, this)
    }


    /**
     * Will not create a card if working outside of the browser,
     * will just load the card if it exists.
     * 
     * @param acc 
     * @param accountSession 
     * @returns 
     */
    public static async createInstanceSafe(acc: Partial<ICard>) {
        let instance: Card = new Card(acc);
        let retVal = await PaymentMethod.createInstanceSafeDbCall(instance, acc)
        return retVal;
    }




}