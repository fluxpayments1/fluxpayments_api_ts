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

import { SecurityHandler } from "../ajax/security/SecurityHandler";
import { SensitiveClientDataSecurityHandle } from "../ajax/security/SensitiveClientDataSecurityHandle";
import { Flux } from "../lib/Flux";
import { Address } from "./Address";
import { BaseQuery } from "./BaseQuery";
import { FluxType } from "./FluxType";
import { ICard } from "./ICard";
import { IPaymentMethodQuery } from "./IPaymentMethodQuery";
import { PaymentMethod } from "./PaymentMethod";


export class Card extends PaymentMethod implements ICard {
    public constructor (c : Partial<ICard>) {
        super(c)
        this.payType = "CARD"
        this.lastFour = c.lastFour;
        this.expMonth = c.expMonth
        this.expYear = c.expYear
        this.cardNumber = c.cardNumber
        this.cvv = c.cvv
    }
    accountSession: string;
    expMonth: string;
    expYear: string;
    address: Address;
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

    public static async createCard(acc: Partial<ICard>) {
        let accCopy = JSON.parse(JSON.stringify(acc))
        let instance: Card = new Card(acc);
        let instance2: Card = new Card(accCopy);
        let l = await PaymentMethod.validatePaymentMethod(instance, acc)
        let additionalData = JSON.parse(l.additionalDataString)
        if (additionalData?.success) {
            let retVal = await PaymentMethod.createInstanceSafeDbCall(instance2, accCopy)
            return retVal;
        } else {
            throw new Error("Card validation failed")
        }


    }

    public static async validateCard(acc: Partial<ICard>) {
        let instance: Card = new Card(acc);
        let retVal = await PaymentMethod.validatePaymentMethod(instance, acc)
        return retVal;
    }

    public static async queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U, cfs?: Flux<SecurityHandler>): Promise<T[]> {
        let f: Flux<SecurityHandler> = cfs || await FluxType.getBackendConn()
        let secHandle = undefined;
        if ((q as IPaymentMethodQuery).accountSession) {
            secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, (q as IPaymentMethodQuery).accountSession)
        }

        let obs = await f.getObjects<T, U>(q, secHandle)
        return obs;
    }




}